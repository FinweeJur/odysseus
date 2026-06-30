# Cutia

**Seu workspace de IA. Seus dados. Seu computador.**

---

## O Que é Cutia?

Cutia é a versão em português brasileiro do [Odysseus](https://github.com/pewdiepie-archdaemon/odysseus) — um workspace de IA self-hosted que roda completamente no seu computador.

Pense em ChatGPT ou Claude, mas sem nuvem. Seus dados nunca saem de casa. Você escolhe o modelo de IA. Você controla tudo.

**Por que Cutia?** A cutia é um roedor do cerrado brasileiro: pequeno, ágil, inteligente. Não usa força bruta — usa eficiência. Prospera em ambientes hostis através de adaptação e resiliência. Assim é este software: enxuto, rápido, resiliente. Sem peso desnecessário, máxima funcionalidade. Autenticidade sem compromisso.

---

## O Que Você Consegue Fazer

**Chat com IA**  
Converse com modelos locais ou APIs. Histórico persistente, sessões compartilháveis.

**Agentes Autônomos**  
Configure uma IA com ferramentas reais (navegador, arquivos, terminal). Deixe ela executar tarefas completas sozinha.

**Documentos**  
Editor de texto com IA integrada. Suporte a Markdown, HTML, CSV. A IA sugere edições.

**E-mail Inteligente**  
Conecte IMAP/SMTP. A IA triagem automaticamente, escreve rascunhos, sincroniza com calendário.

**Calendário**  
Calendário local-first com suporte CalDAV. Sincroniza com Apple Calendar, Google Calendar, Nextcloud.

**Tarefas & Lembretes**  
Sistema de tarefas com agendamento. Notificações via navegador, e-mail ou ntfy.

**Pesquisa Profunda**  
A IA pesquisa múltiplas fontes automaticamente e sintetiza em relatório. Ideal para pesquisa acadêmica e análise.

**Memória & Conhecimento**  
Armazene informação persistentemente. A IA usa sua memória em futuras conversas. Busca semântica por vetores.

---

## Começar em 5 Minutos

### Windows
```powershell
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
cd odysseus
.\install-ptbr.ps1
```

### Linux e macOS
```bash
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus.git
cd odysseus
chmod +x install-ptbr.sh
./install-ptbr.sh
```

Acesse `http://127.0.0.1:7000` no navegador. Credenciais padrão:
- **Usuário:** `admin`
- **Senha:** exibida no terminal

---

## Requisitos

- **Python** 3.11+
- **RAM** 8GB (16GB ideal)
- **Disco** 50GB+
- **GPU (opcional)** NVIDIA CUDA ou AMD ROCm

### Recomendado: Ollama
Para rodar modelos de IA localmente:
- Download: https://ollama.ai
- Modelos: `qwen2.5:7b-instruct` ou `gemma2:2b`

---

## Configuração

### Primeira Vez
1. Inicie Cutia
2. Login com credenciais padrão
3. Vá a **Settings → Geral**
4. Configure seu modelo de IA (Ollama, OpenAI, Claude, etc.)
5. Configure integrações (E-mail, Calendário)

### Variáveis de Ambiente (.env)

```env
# Servidor
SERVER_PORT=7000
SERVER_HOST=127.0.0.1

# IA
LLM_PROVIDER=ollama
LLM_URL=http://localhost:11434/v1
LLM_MODEL=qwen2.5:7b-instruct

# Banco de Dados
DATABASE_URL=sqlite:///./data/app.db

# Segurança
AUTH_ENABLED=true
LOCALHOST_BYPASS=false
SECURE_COOKIES=false
```

---

## Segurança

Cutia é poderoso. Trate como console administrativo.

**Sempre Faça:**
- Mantenha `AUTH_ENABLED=true`
- Use senhas fortes
- Não exponha na internet sem HTTPS
- Use reverse proxy com autenticação

**Nunca Faça:**
- Exponha diretamente na internet
- Use localhost_bypass em produção
- Compartilhe senhas em logs

---

## Troubleshooting

**Cutia não abre?**
```bash
ps aux | grep python          # Verifique se está rodando
netstat -tulpn | grep 7000    # Verifique a porta
```

**Erro ao carregar modelos?**
```bash
ollama list                             # Verifique modelos
ollama pull qwen2.5:7b-instruct        # Baixe um modelo
```

**Interface em inglês?**
- Verifique se está na branch correta
- Limpe cache: `Ctrl+Shift+Del`
- Reinicie o servidor

---

## Documentação

- **[README_CUTIA_NARRATIVE.md](README_CUTIA_NARRATIVE.md)** — História de Cutia e metáforas
- **[INSTALL_PTBR.md](INSTALL_PTBR.md)** — Guia de instalação detalhado
- **[COLOR_PALETTE_TECHNICAL.md](COLOR_PALETTE_TECHNICAL.md)** — Paleta de cores e branding
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** — Referência rápida

---

## Cores de Cutia

O branding reflete autenticidade do cerrado brasileiro:

| Cor | Código | Uso |
|-----|--------|-----|
| Laterita Vermelha | #B45032 | Ações críticas |
| Verde Cerrado | #698250 | Crescimento |
| Ocre Profundo | #A07850 | Autenticidade |
| Dourado Quente | #DCB464 | Destaque |
| Azul Cerrado | #648CB4 | Confiança |
| Verde Profundo | #3C5A28 | Fundação |

---

## Contribuindo

Encontrou bug? Strings em inglês? Quer melhorar?

- Abra uma [issue](https://github.com/FinweeJur/odysseus/issues)
- Envie um [PR](https://github.com/FinweeJur/odysseus/pulls)

---

## Créditos

- **Odysseus Original:** [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon)
- **Tradução PT-BR:** Comunidade brasileira
- **Coordenação:** [@FinweeJur](https://github.com/FinweeJur)
- **Assistência IA:** Claude (Anthropic)

---

## Licença

MIT — Use livremente, comercial ou pessoal.

---

**Seu workspace de IA. Sem intermediários. Sem nuvem. Apenas você, seus dados, e poder real.**
