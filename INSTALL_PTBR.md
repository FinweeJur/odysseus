# 🇧🇷 Odysseus em Português Brasileiro

[![GitHub stars](https://img.shields.io/github/stars/FinweeJur/odysseus?style=social)](https://github.com/FinweeJur/odysseus)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Odysseus com suporte completo em português brasileiro** — Chat AI self-hosted com interface 100% traduzida.

---

## 📦 Instalação Rápida

### Opção 1: Clone com tradução PT-BR (Recomendado)

```bash
git clone https://github.com/FinweeJur/odysseus.git
cd odysseus
git checkout feature/pt-br-translation
```

### Opção 2: Windows (CutiaLauncher)

```bash
# Download direto do executável
.\CutiaLauncher.exe
```

### Opção 3: Docker

```bash
docker-compose up -d
# Acesse: http://localhost:7000
```

### Opção 4: Python (Linux/Mac)

```bash
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
# venv\Scripts\activate  # Windows
pip install -r requirements.txt
python app.py
```

---

## ✨ O Que Está Traduzido?

- ✅ **Backend (13 arquivos)** — ~264 strings em PT-BR
  - Mensagens de erro, validações, confirmações
  - Todas as APIs retornam mensagens em português

- ✅ **Frontend (18 arquivos)** — ~563 strings em PT-BR
  - Interface completa: admin, chat, galeria, documentos, calendário, tarefas, etc.
  - Placeholders, títulos, tooltips, botões

- ✅ **HTML** — 6 strings traduzidas
  - Títulos de página, descrições

**Total:** 827+ strings traduzidas em 31 arquivos

---

## 🚀 Primeiros Passos

1. **Inicie o servidor:**
   ```bash
   python app.py
   # ou via launcher Windows: .\CutiaLauncher.exe
   ```

2. **Acesse no navegador:**
   - http://127.0.0.1:7000 (Odysseus padrão)
   - http://127.0.0.1:7002 (CutiaLauncher — já traduzido)

3. **Login padrão:**
   - Usuário: `admin`
   - Senha: `admin123` (mude na primeira vez!)

4. **Configurar LLM local:**
   - Settings → Providers
   - URL: `http://localhost:11434/v1`
   - API Key: `ollama`
   - Modelo: `qwen2.5:7b-instruct-q4_K_M` (recomendado) ou `gemma2:2b` (rápido)

---

## 📋 Requisitos

- **Python:** 3.11+ (3.12 recomendado)
- **RAM:** 8GB mínimo (16GB ideal)
- **GPU (opcional):** NVIDIA CUDA ou AMD ROCm para Ollama
- **Ollama:** Para usar LLMs locais (recomendado)
  - Download: https://ollama.ai

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente

Copie `.env.example` → `.env` e ajuste:

```env
# Porta padrão
SERVER_PORT=7000

# LLM Provider (local)
LLM_PROVIDER=ollama
LLM_URL=http://localhost:11434/v1
LLM_MODEL=qwen2.5:7b-instruct-q4_K_M

# Banco de dados
DATABASE_URL=sqlite:///./odysseus.db
```

### Windows PowerShell (Iniciar automático)

O `CutiaLauncher.exe` já está configurado para iniciar automaticamente. Se quiser reiniciar:

```powershell
Start-ScheduledTask -TaskName "Odysseus"
```

---

## 📚 Recursos em Português

- **SETUP_GUIDE.md** — Guia completo de configuração
- **ROADMAP.md** — Futuras funcionalidades
- **CONTRIBUTING.md** — Como contribuir com melhorias

---

## 🤝 Contribuindo com Melhorias

Encontrou algo em inglês que deveria estar em português?

1. **Crie uma issue:**
   ```
   Título: [PT-BR] String não traduzida em X
   Descrição: Identifique a string e a localização
   ```

2. **Ou envie um PR:**
   ```bash
   git checkout feature/pt-br-translation
   # Edite os arquivos
   git push origin feature/pt-br-translation
   # Abra um PR
   ```

---

## 🐛 Problemas Comuns

### "Servidor não responde"
- Verifique se Python/Ollama estão rodando
- Verifique porta: `netstat -ano | findstr :7002` (Windows)

### "Erro ao carregar modelos"
- Verifique: `ollama list`
- Baixe modelo: `ollama pull qwen2.5:7b-instruct-q4_K_M`

### "Strings ainda em inglês"
- Atualize para a branch `feature/pt-br-translation`
- Limpe cache: `CTRL+SHIFT+DEL` no navegador

---

## 📄 Licença

MIT License — veja [LICENSE](LICENSE)

---

## 🙏 Créditos

- **Odysseus:** [pewdiepie-archdaemon/odysseus](https://github.com/pewdiepie-archdaemon/odysseus)
- **Tradução PT-BR:** Comunidade brasileira
- **Suporte IA:** Claude, Ollama

---

**Pronto para usar em português! 🚀 Qualquer dúvida, abra uma [issue](https://github.com/FinweeJur/odysseus/issues).**
