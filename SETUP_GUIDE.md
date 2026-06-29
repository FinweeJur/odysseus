# Guia de Instalação e Replicação do Cutia

## O que é Cutia?

Cutia é um clone do **Odysseus** (workspace de IA auto-hospedado) completamente **traduzido para português (PT-BR)** com:
- Interface 100% em português
- Identidade visual inspirada no Cerrado (paleta Cerrado: terracota, verde-seco, amarelo-quente)
- Controle de tamanho de texto (acessibilidade)
- Ícone e instalador Windows

---

## Opção 1: Usar o Instalador (Recomendado)

### Requisitos:
- Windows 10 ou 11
- Nenhum software adicional necessário (Python e dependências vêm embutidas)

### Passos:

1. **Baixe o instalador:**
   - `CutiaSetup.exe` (na pasta `build/dist`)

2. **Execute o instalador:**
   - Clique duas vezes em `CutiaSetup.exe`
   - Escolha pasta de instalação (padrão: `C:\Program Files\Cutia`)
   - Selecione opções (criar atalho no Desktop)

3. **Inicie o Cutia:**
   - Clique no atalho "Cutia" no Desktop
   - Ou procure em "Aplicativos" → "Cutia"
   - O app vai subir o servidor em background e abrir no navegador em `http://127.0.0.1:7002`

4. **Primeira vez:**
   - Você vai para a tela `/setup` para criar sua conta de admin
   - Digite usuário e senha
   - Escolha entre modelos locais ou API externa

---

## Opção 2: Executar do Código-Fonte

### Requisitos:
- Python 3.11+ instalado
- git

### Passos:

1. **Clone ou copie a pasta:**
   ```bash
   cd C:\Users\<seu-user>
   xcopy odysseus-pt odysseus-pt-novo /E /I
   cd odysseus-pt-novo
   ```

2. **Crie um ambiente virtual:**
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```

3. **Instale dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Inicie o servidor:**
   ```bash
   .\venv\Scripts\python -m uvicorn app:app --host 127.0.0.1 --port 7002
   ```

5. **Acesse no navegador:**
   - Abra `http://127.0.0.1:7002`

---

## Estrutura de Pastas

```
odysseus-pt/
├── app.py                  # Entrada FastAPI
├── requirements.txt        # Dependências Python
├── venv/                   # Ambiente Python embutido
├── static/                 # Frontend (HTML/CSS/JS)
│   ├── index.html         # Chat principal (traduzido para PT-BR)
│   ├── login.html         # Tela de login (PT-BR + tema Cerrado)
│   ├── landing.html       # Página de informações
│   ├── manifest.json      # PWA manifest (atualizado para Cutia)
│   ├── app.js             # Orquestrador de UI (traduzido)
│   ├── style.css          # Estilos (paleta Cerrado)
│   ├── icon-192.png       # Ícone PWA 192x192
│   ├── icon-512.png       # Ícone PWA 512x512
│   └── js/
│       ├── theme.js        # Sistema de temas (adicionado "cerrado")
│       ├── text-scale.js   # Controle de tamanho de texto
│       ├── odysseus-ptbr.js # Motor de tradução em runtime (~350 termos)
│       ├── calendar.js     # Calendário (traduzido)
│       └── ...outros.js
├── data/                   # Banco de dados SQLite (criado automaticamente)
│   ├── app.db             # Database principal
│   └── ...
├── src/, routes/, core/, services/ # Backend Python
└── build/
    ├── CutiaLauncher.exe   # Launcher (PyInstaller)
    ├── cutia.ico           # Ícone Windows
    └── dist/
        ├── CutiaSetup.exe   # Instalador (Inno Setup)
        └── CutiaLauncher.exe
```

---

## Personalização

### Mudar Cores (Paleta Cerrado)

1. Edite `static/js/theme.js`:
   - Procure por `cerrado: { bg:'#F5F3F0', ...`
   - Mude os valores hex para suas cores

2. Ou edite `static/style.css` para as cores padrão (`:root` variables)

### Mudar Língua

Edite `static/js/odysseus-ptbr.js`:
- Dicionário `DICT` contém ~360 termos PT-BR
- Engine de tradução cobre conteúdo dinâmico

### Mudar Tamanho de Fonte Padrão

1. Edite `static/style.css` (variáveis `:root`)
2. Ou use o controle "Tamanho do Texto" em Configurações → Tema

---

## Troubleshooting

### Porta 7002 já está em uso

```bash
# Windows: encontre qual processo está usando
netstat -ano | find ":7002"

# Mate o processo (substitua PID):
taskkill /PID <pid> /F

# Ou use outra porta (edite app.py ou use flag):
python -m uvicorn app:app --port 7003
```

### Erro: "unable to open database file"

- Certifique-se que a pasta `data/` existe e é gravável
- Se reinstalando, delete `data/app.db` para resetar o banco

### Interface em inglês (motor de tradução não ativou)

- Recarregue a página (Ctrl+F5 para limpeza de cache)
- Verifique se `static/js/odysseus-ptbr.js` está carregado (abra DevTools → Console)

---

## Créditos & Origem

**Cutia** é uma versão traduzida e rebrandizada do projeto **Odysseus**:
- **Projeto original:** https://github.com/pewdiepie-archdaemon/odysseus
- **Identidade visual:** Paleta Cerrado (bioma brasileiro) + mascote Cutia
- **Tradução:** PT-BR completo (interface + calendário + documentos)
- **Data de criação:** Junho 2026

---

## Próximos Passos

Depois de criar sua conta:

1. **Configure um modelo de IA:**
   - Vá para "Configurações" (ícone ⚙️)
   - "Configuração" → escolha "Modelos Locais" ou API

2. **Explore os recursos:**
   - **Chat:** Converse com a IA
   - **Calendário:** Gerencie eventos
   - **Documentos:** Crie e organize arquivos
   - **Memória:** Adicione contexto persistente

3. **Leia a ajuda:**
   - Digite `/help` no chat para ver comandos

---

**Divirta-se com o Cutia!** 🐭
