# 🇧🇷 Instalador Odysseus PT-BR para Windows
# Script facilitado para clonar e configurar Odysseus com tradução PT-BR

Write-Host "`n=== Odysseus em Português Brasileiro ===" -ForegroundColor Cyan
Write-Host "Instalador Automático para Windows" -ForegroundColor Green

# Verificar requisitos
Write-Host "`n[1/5] Verificando requisitos..." -ForegroundColor Yellow

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Python não encontrado. Instale de: https://www.python.org" -ForegroundColor Red
    exit 1
}

$pythonVersion = python --version 2>&1
Write-Host "✓ Python encontrado: $pythonVersion" -ForegroundColor Green

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git não encontrado. Instale de: https://git-scm.com" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Git encontrado" -ForegroundColor Green

# Escolher diretório
Write-Host "`n[2/5] Configurando diretório..." -ForegroundColor Yellow

$installDir = Read-Host "Diretório de instalação (padrão: C:\Odysseus-PTBR)"
if ([string]::IsNullOrWhiteSpace($installDir)) { $installDir = "C:\Odysseus-PTBR" }

if (Test-Path $installDir) {
    Write-Host "⚠️  Diretório já existe. Continuando..." -ForegroundColor Yellow
} else {
    New-Item -ItemType Directory -Path $installDir | Out-Null
    Write-Host "✓ Diretório criado: $installDir" -ForegroundColor Green
}

Set-Location $installDir

# Clonar repositório
Write-Host "`n[3/5] Clonando repositório PT-BR..." -ForegroundColor Yellow

if (Test-Path ".\odysseus\.git") {
    Write-Host "ℹ️  Repositório já existe. Atualizando..." -ForegroundColor Cyan
    Set-Location odysseus
    git fetch origin
    git checkout feature/pt-br-translation
} else {
    git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
    Set-Location odysseus
    Write-Host "✓ Repositório clonado" -ForegroundColor Green
}

# Criar venv e instalar dependências
Write-Host "`n[4/5] Configurando ambiente Python..." -ForegroundColor Yellow

if (-not (Test-Path ".\venv")) {
    python -m venv venv
    Write-Host "✓ Ambiente virtual criado" -ForegroundColor Green
}

.\venv\Scripts\Activate.ps1
pip install -q -r requirements.txt 2>$null
Write-Host "✓ Dependências instaladas" -ForegroundColor Green

# Finalizar
Write-Host "`n[5/5] Configuração concluída!" -ForegroundColor Green

Write-Host "`n📋 Próximos passos:
1. Instale Ollama (opcional, para LLMs locais):
   https://ollama.ai

2. Inicie o Odysseus:
   .\CutiaLauncher.exe
   ou
   python app.py

3. Acesse no navegador:
   http://127.0.0.1:7002

4. Login padrão:
   Usuário: admin
   Senha: admin123

5. Configure seu LLM em Settings → Providers

" -ForegroundColor Cyan

$continue = Read-Host "Iniciar Odysseus agora? (S/N)"
if ($continue -eq "S" -or $continue -eq "s") {
    if (Test-Path ".\CutiaLauncher.exe") {
        .\CutiaLauncher.exe
    } else {
        python app.py
    }
}
