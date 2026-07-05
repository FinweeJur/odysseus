"""Launcher do Cutia — sobe o servidor (via venv embutida) e abre o navegador.

Empacotado pelo PyInstaller como CutiaLauncher.exe e instalado na raiz do app
(ao lado de app.py, venv/, static/, data/). Mantém o launcher leve: ele apenas
inicia o uvicorn como subprocesso usando o python da venv local — assim o
PyInstaller não precisa congelar as dependências pesadas do app (chromadb,
fastembed/onnx etc.), o que seria frágil e enorme.

Primeiro uso: se venv/ ainda não existe, faz o setup (cria venv + pip install)
em uma janela de console antes de iniciar o servidor.
"""
import os
import socket
import subprocess
import sys
import threading
import time
import webbrowser

HOST = "127.0.0.1"
PORT = 7002

# Navegadores com modo --app (janela própria, sem barra de endereço/abas),
# em ordem de preferência. Caem para webbrowser.open() se nenhum existir.
_APP_MODE_BROWSERS = [
    r"%PROGRAMFILES(X86)%\Microsoft\Edge\Application\msedge.exe",
    r"%PROGRAMFILES%\Microsoft\Edge\Application\msedge.exe",
    r"%PROGRAMFILES%\Google\Chrome\Application\chrome.exe",
    r"%PROGRAMFILES(X86)%\Google\Chrome\Application\chrome.exe",
    r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe",
]

# ID do app instalado via "Instalar este site como aplicativo" no Edge
# (perfil dedicado abaixo). Dá um ícone/agrupamento próprios na barra de
# tarefas em vez do ícone genérico do Edge que o modo --app=URL usa.
# Se o app for desinstalado/reinstalado e o ID mudar, cai no fallback --app=.
_INSTALLED_APP_ID = "kphnpfknbgjmmfnljmimgennonpbolbk"


def _porta_livre(host: str, port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex((host, port)) != 0


def _achar_navegador_app_mode():
    for template in _APP_MODE_BROWSERS:
        path = os.path.expandvars(template)
        if os.path.isfile(path):
            return path
    return None


def _user_data_dir():
    return os.path.join(os.environ.get("LOCALAPPDATA", "."), "Cutia", "browser-profile")


def _app_instalado(user_data_dir: str) -> bool:
    return os.path.isdir(os.path.join(
        user_data_dir, "Default", "Web Applications", "Manifest Resources", _INSTALLED_APP_ID
    ))


def _abrir_janela(url: str):
    browser = _achar_navegador_app_mode()
    if not browser:
        webbrowser.open(url)
        return
    user_data_dir = _user_data_dir()
    if _app_instalado(user_data_dir):
        subprocess.Popen([browser, f"--app-id={_INSTALLED_APP_ID}", f"--user-data-dir={user_data_dir}"])
    else:
        subprocess.Popen([browser, f"--app={url}", f"--user-data-dir={user_data_dir}"])


def _abrir_navegador_quando_pronto():
    for _ in range(120):
        if not _porta_livre(HOST, PORT):
            _abrir_janela(f"http://{HOST}:{PORT}")
            return
        time.sleep(0.5)


def _encontrar_python_sistema():
    """Retorna o executável Python 3.9+ instalado no sistema, ou None."""
    candidatos = ["python", "python3", "py"]
    for cmd in candidatos:
        try:
            result = subprocess.run(
                [cmd, "-c", "import sys; v=sys.version_info; print(f'{v.major}.{v.minor}')"],
                capture_output=True, text=True, timeout=5
            )
            if result.returncode == 0:
                partes = result.stdout.strip().split(".")
                major, minor = int(partes[0]), int(partes[1])
                if major == 3 and minor >= 9:
                    return cmd
        except Exception:
            continue
    return None


def _setup_primeiro_uso(base_dir: str, venv_python: str):
    """Cria venv e instala dependências numa janela de console visível."""
    req = os.path.join(base_dir, "requirements.txt")
    if not os.path.isfile(req):
        return  # sem requirements.txt, nada a fazer

    sistema_python = _encontrar_python_sistema()
    if not sistema_python:
        import ctypes
        ctypes.windll.user32.MessageBoxW(
            0,
            "Python 3.9 ou superior é necessário.\n\n"
            "Baixe em https://www.python.org/downloads/ e reinstale o Cutia.",
            "Cutia — Python não encontrado",
            0x10  # MB_ICONERROR
        )
        sys.exit(1)

    venv_dir = os.path.join(base_dir, "venv")
    print("=" * 60)
    print("  Cutia — configuração inicial")
    print("=" * 60)
    print(f"\nCriando ambiente Python em {venv_dir}...")
    subprocess.run([sistema_python, "-m", "venv", venv_dir], check=True)

    pip = os.path.join(venv_dir, "Scripts", "pip.exe")
    print("\nInstalando dependências (pode levar alguns minutos)...")
    subprocess.run([pip, "install", "-r", req], check=True)
    print("\nConfiguracao concluida! Iniciando o Cutia...\n")


def main():
    base_dir = os.path.dirname(os.path.abspath(sys.argv[0]))
    os.chdir(base_dir)

    if not _porta_livre(HOST, PORT):
        # Já está rodando (segunda instância) — só abre a janela
        _abrir_janela(f"http://{HOST}:{PORT}")
        return

    venv_python = os.path.join(base_dir, "venv", "Scripts", "python.exe")

    # Primeiro uso: venv ainda não existe — faz setup
    if not os.path.isfile(venv_python):
        _setup_primeiro_uso(base_dir, venv_python)
        # Após setup, venv_python deve existir
        if not os.path.isfile(venv_python):
            venv_python = sys.executable  # fallback

    threading.Thread(target=_abrir_navegador_quando_pronto, daemon=True).start()

    creationflags = subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0
    subprocess.run(
        [venv_python, "-m", "uvicorn", "app:app", "--host", HOST, "--port", str(PORT)],
        cwd=base_dir,
        creationflags=creationflags,
    )


if __name__ == "__main__":
    main()
