# 🇧🇷 Cutia — Odysseus em Português Brasileiro

```
───────────────────────────────────────────────
 ⊹ ࣪ ˖ ૮( ˶ᵔ ᵕ ᵔ˶ )っ  Odysseus vers. 1.0
           🐭 Cutia Edition (PT-BR)
───────────────────────────────────────────────
```

## Bem-vindo a Cutia!

> **Cutia** é a versão em português brasileiro do [Odysseus](https://github.com/pewdiepie-archdaemon/odysseus), o workspace de IA self-hosted. 
>
> Cutia é um roedor sul-americano conhecido por ser ágil, inteligente e adaptável — características que também descrevem este projeto! 🐭

[![GitHub](https://img.shields.io/badge/Odysseus%20Original-pewdiepie--archdaemon-blue)](https://github.com/pewdiepie-archdaemon/odysseus)
[![Licença](https://img.shields.io/badge/Licença-MIT-green)](LICENSE)
[![Tradução PT-BR](https://img.shields.io/badge/Tradução%20PT--BR-Cutia-success)](https://github.com/FinweeJur/odysseus/tree/feature/pt-br-translation)

---

## O Conceito: Cutia

**Cutia** é uma iniciativa da comunidade brasileira para trazer o Odysseus para falantes de português. Não é um fork separado — é a **versão oficial em português** mantida pela comunidade, com:

- 🇧🇷 **Interface 100% em português** (827+ strings traduzidas)
- 🚀 **Instalação facilitada** com scripts automáticos
- 📚 **Documentação completa em português**
- 🤝 **Créditos totais** ao criador original, [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon)
- 🔄 **Sincronizada regularmente** com a versão original

---

## 🎯 O Que é Odysseus/Cutia?

Um **workspace de IA self-hosted** — pense em ChatGPT ou Claude, mas rodando no seu computador, com seus próprios dados, sem intermediários.

```
┌─────────────────────────────────────────┐
│  Seu Computador / Seu Servidor          │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Cutia (Interface Web)          │   │
│  │  • Chat com IA Local           │   │
│  │  • Documentos & Edição          │   │
│  │  • Calendário & Tarefas         │   │
│  │  • E-mail Inteligente           │   │
│  └─────────────────────────────────┘   │
│          ↓                               │
│  ┌─────────────────────────────────┐   │
│  │  Seus Modelos de IA             │   │
│  │  • Ollama (Local)               │   │
│  │  • ou APIs Externas             │   │
│  └─────────────────────────────────┘   │
│          ↓                               │
│  ┌─────────────────────────────────┐   │
│  │  Seus Dados (Privados)          │   │
│  │  • Documentos                   │   │
│  │  • E-mails                      │   │
│  │  • Memória & Notas              │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Zero dados enviados para nuvem. Privacidade total.**

---

## ✨ Principais Funcionalidades

### 💬 Chat
- Converse com qualquer modelo de IA local ou API
- Suporte a: Ollama, vLLM, llama.cpp, OpenAI, Claude, OpenRouter
- Histórico e sessões persistentes
- Compartilhamento e controle de acesso

### 🤖 Agentes
- Configure uma IA com ferramentas (navegador, arquivos, terminal, etc.)
- Deixe ela executar tarefas completas sozinha
- Suporte a MCP (Model Context Protocol)
- Memória persistente — o agente aprende com você

### 📊 Cookbook
- Escaneia seu hardware (CPU, GPU, VRAM)
- Recomenda modelos que rodam bem na sua máquina
- Baixa e serve modelos com 1 clique
- Suporta: GGUF, FP8, AWQ, quantização inteligente

### 🔬 Pesquisa Profunda
- IA pesquisa múltiplas fontes automaticamente
- Sintetiza em relatório visual
- Ideal para: pesquisa acadêmica, análise de concorrentes, investimentos

### 📄 Documentos
- Editor de texto multi-abas com IA integrada
- Suporte a: Markdown, HTML, CSV
- Edições sugeridas pela IA
- Sintaxe highlighting para código

### 🧠 Memória & Habilidades
- Armazene conhecimento persistentemente
- A IA usa sua memória em futuras conversas
- Habilidades customizadas (skills)
- Busca semântica vetorial

### 📧 E-mail Inteligente
- Conecte seu e-mail (IMAP/SMTP)
- IA triagem automática
- Tags, resumos e rascunhos de resposta automáticos
- Integração com calendário (CalDAV)

### 📅 Calendário
- Calendário local-first com suporte CalDAV
- Sincroniza com: Apple Calendar, Google Calendar, Nextcloud, Radicale
- Cores por calendário
- Integração com tarefas e lembretes

### ✅ Notas & Tarefas
- Anotações rápidas com lembretes
- Listas de tarefas com agendamento
- Tarefas automáticas que o agente executa
- Notificações (navegador, e-mail, ntfy)

### 📱 Responsivo & Mobile
- Funciona perfeitamente em celular
- Instalável como app (PWA)
- Gestos touch
- Dark mode automático

### 🎨 Extras
- Editor de imagens integrado
- Editor de temas visual
- Upload de arquivos com visão computacional
- Busca web local
- Presets de chat

---

## 🚀 Começar em 5 Minutos

### Windows
```powershell
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
cd odysseus
.\install-ptbr.ps1
# Acesse: http://127.0.0.1:7000
```

### Linux/Mac
```bash
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
cd odysseus
chmod +x install-ptbr.sh
./install-ptbr.sh
# Acesse: http://127.0.0.1:7000
```

### Docker (Recomendado)
```bash
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
cd odysseus
docker compose up -d --build
# Acesse: http://localhost:7000
```

### Credenciais Padrão
- **Usuário:** `admin`
- **Senha:** exibida no terminal na primeira execução
- **Mude na primeira vez** em Settings → Geral

---

## 📋 Requisitos Mínimos

- **Python:** 3.11+ (3.12 recomendado)
- **RAM:** 8GB (16GB ideal para modelos locais)
- **Disco:** 50GB+ (para modelos de IA)
- **GPU (Opcional):** NVIDIA CUDA ou AMD ROCm para acelerar

### Recomendado: Instalar Ollama
Para usar modelos de IA locais (melhor experiência):
- Download: https://ollama.ai
- Modelos recomendados:
  - `qwen2.5:7b-instruct` — Bom equilíbrio (4.7GB)
  - `gemma2:2b` — Rápido (1.6GB)

---

## ⚙️ Configuração

### Primeira Vez
1. Inicie Cutia
2. Login com credenciais padrão
3. Vá a **Settings → Geral**
4. Configure seu modelo de IA (Ollama, OpenAI, etc.)
5. Configure outras integrações conforme necessário

### Variáveis de Ambiente (.env)

Crie um arquivo `.env` com:

```env
# Servidor
SERVER_PORT=7000
SERVER_HOST=127.0.0.1

# Modelo de IA Local
LLM_PROVIDER=ollama
LLM_URL=http://localhost:11434/v1
LLM_MODEL=qwen2.5:7b-instruct-q4_K_M

# Banco de Dados
DATABASE_URL=sqlite:///./data/app.db

# Segurança
AUTH_ENABLED=true
LOCALHOST_BYPASS=false
SECURE_COOKIES=false

# Opcional: API External
OPENAI_API_KEY=seu_key_aqui
```

### Configurações Importantes

| Variável | Padrão | Descrição |
|----------|--------|-----------|
| `SERVER_PORT` | 7000 | Porta do app |
| `SERVER_HOST` | 127.0.0.1 | Endereço (0.0.0.0 para rede) |
| `LLM_PROVIDER` | ollama | Provedor de IA (ollama, openai, etc.) |
| `AUTH_ENABLED` | true | Requer login |
| `LOCALHOST_BYPASS` | false | Bypass auth local (dev only) |
| `SECURE_COOKIES` | false | true em produção HTTPS |
| `DATABASE_URL` | sqlite | Caminho do banco de dados |

---

## 🔐 Segurança

Cutia é poderoso — trate como um console administrativo:

### ✅ Sempre Faça Isso
- ✓ Mantenha `AUTH_ENABLED=true`
- ✓ Use senhas fortes
- ✓ Não exponha na internet sem HTTPS
- ✓ Use reverse proxy com autenticação (Tailscale, Cloudflare, nginx)
- ✓ Mantenha `.env` e `data/` fora do Git

### ❌ Nunca Faça Isso
- ✗ Exponha diretamente na internet pública
- ✗ Use localhost_bypass em produção
- ✗ Compartilhe senhas em chat/logs
- ✗ Deixe default credentials após setup

### Deployment Seguro
```
Internet
    ↓
[Reverse Proxy com HTTPS]
    ↓ (conexão criptografada)
[Cutia rodando em 127.0.0.1:7000]
    ↓
[Modelos IA locais/APIs]
```

---

## 🐛 Problemas Comuns

### "Cutia não abre"
```bash
# Verifique se está rodando
ps aux | grep python

# Verifique a porta
netstat -tulpn | grep 7000

# Reinicie
# Windows: Pressione Ctrl+C, depois `python app.py` de novo
# Linux: `kill $(lsof -t -i:7000)` e reinicie
```

### "Erro ao carregar modelos"
```bash
# Verifique se Ollama está rodando
ollama list

# Se não tiver nenhum modelo
ollama pull qwen2.5:7b-instruct

# Reinicie Cutia
```

### "Strings ainda em inglês"
- Você está na branch correta? `git branch`
- Limpe cache: `Ctrl+Shift+Del` no navegador
- Reinicie o servidor

---

## 🛠️ Instaladores Facilitados

Não quer linhas de comando? Temos scripts automáticos:

### Windows (PowerShell)
```powershell
.\install-ptbr.ps1
```
- Verifica requisitos
- Configura ambiente Python
- Oferece iniciar Cutia após instalação

### Linux/Mac (Bash)
```bash
./install-ptbr.sh
```
- Verifica requisitos
- Configura venv
- Oferece iniciar Cutia

Veja [INSTALL_PTBR.md](INSTALL_PTBR.md) para detalhes completos.

---

## 📚 Documentação Completa

- **[INSTALL_PTBR.md](INSTALL_PTBR.md)** — Guia de instalação detalhado
- **[ROADMAP.md](ROADMAP.md)** — Planos futuros
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — Como contribuir
- **[SECURITY.md](SECURITY.md)** — Boas práticas de segurança
- **[PR_I18N_PROPOSAL.md](PR_I18N_PROPOSAL.md)** — Proposta de sistema de idiomas

---

## 🤝 Contribuindo

Encontrou algo em inglês? Quer melhorar a tradução?

1. **Abra uma issue:**
   ```
   Título: [PT-BR] String não traduzida em X
   Descrição: Identifique a string e local
   ```

2. **Ou envie um PR:**
   ```bash
   git checkout feature/pt-br-translation
   # Edite os arquivos
   git commit -m "fix: Traduzir X para português"
   git push origin feature/pt-br-translation
   ```

---

## 🌍 Sobre Este Fork

Este é um **fork comunitário de tradução**, mantido para:
- 🇧🇷 Brasil
- 🇵🇹 Portugal
- 🌎 Comunidade lusófona global

### Sincronização
- Atualizamos regularmente com a versão original
- Novas funcionalidades do Odysseus chegam aqui automaticamente
- Você sempre tem a versão mais recente + em português

### Créditos
- **Odysseus Original:** [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon)
- **Tradução PT-BR:** Comunidade brasileira
- **Coordenação:** [@FinweeJur](https://github.com/FinweeJur)
- **Assistência IA:** Claude (Anthropic)

---

## 📄 Licença

MIT — Use livremente, comercial ou pessoal, desde que respeite a licença original.

---

## 🚀 Próximos Passos

1. **Instale Cutia** (use o script facilitado)
2. **Configure seu modelo de IA** em Settings
3. **Explore as funcionalidades** — comece com Chat
4. **Configure integrações** — E-mail, Calendário, etc.
5. **Customize** — Tema, atalhos de teclado, etc.

---

## 💬 Perguntas? Sugestões?

- 💬 Abra uma [issue](https://github.com/FinweeJur/odysseus/issues)
- 🤝 Envie um [PR](https://github.com/FinweeJur/odysseus/pulls) com melhorias
- 📖 Leia [CONTRIBUTING.md](CONTRIBUTING.md)

---

**Bem-vindo ao Cutia! 🐭 Sua IA privada, local, brasileira.**

*"Ágil, inteligente, adaptável — como uma cutia."*
