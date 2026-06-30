# Cutia - Software que se move como a natureza

No coração do cerrado brasileiro existe um animal de extraordinária elegância: a cutia. Pequeno roedor de apenas alguns quilogramas, é um paradoxo vivente - vulnerável em força, mas imbatível em inteligência. Desprovida de armadura, não confia em defesa passiva. Sem tamanho para intimidar, confia em velocidade e adaptação. No cerrado árido e implacável, onde seis meses de chuva são seguidos por seca rigorosa, a cutia não apenas sobrevive: prospera.

**Cutia herda os princípios deste roedor notável.**

---

## Filosofia Cutia

Cutia não é software pesado, cheio de features que nunca serão usadas. É enxuto, inteligente, adaptável. Cada linha de código tem propósito. Cada módulo é independente mas colaborativo. Cada decisão arquitetural reflete a sofisticação de um sistema biológico refinado ao longo de milênios.

Como a cutia no cerrado, Cutia em software significa:

**Agilidade** — Resposta rápida a mudança. Arquitetura que não precisa ser reescrita quando demandas evoluem.

**Inteligência** — Sistemas que aprendem, adaptam e melhoram continuamente. Não apenas reagem; antecipam.

**Eficiência** — Recursos utilizados com precisão cirúrgica. Sem desperdício de CPU, memória ou latência.

**Resiliência** — Falhas não são o fim; são parte da operação. Erros são capturados, tratados, e o sistema continua.

**Autenticidade** — Software que não pretende ser o que não é. Há elegância em saber exatamente para que você foi feito e fazer isso melhor que ninguém.

---

## O Que Você Ganha

Cutia é um workspace de IA self-hosted que traz poder profissional de ferramentas como ChatGPT e Claude diretamente para seu computador, seus dados, sua privacidade.

**Interface Inteligente**
- Chat com modelos locais ou APIs
- Documentos com assistente IA integrado
- Calendário sincronizado
- E-mail com triagem inteligente
- Tarefas com lembretes persistentes

**Agentes Autônomos**
- Configure uma IA com ferramentas reais
- Deixe ela executar tarefas completas sozinha
- Memória persistente - a IA aprende com você
- Suporte a MCP (Model Context Protocol)

**Pesquisa Profunda**
- IA pesquisa múltiplas fontes automaticamente
- Sintetiza em relatório visual
- Ideal para pesquisa acadêmica e análise

**Controle Total**
- Roda completamente no seu computador
- Seus dados nunca saem de casa
- Sem telemetria, sem rastreamento
- Zero dependência de nuvem

---

## Começar em 1 Minuto

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

Acesse `http://127.0.0.1:7000` e comece a usar. Credenciais padrão:
- Usuário: `admin`
- Senha: exibida no terminal na primeira execução

---

## Requisitos Mínimos

- Python 3.11+ (3.12 recomendado)
- RAM: 8GB (16GB ideal para modelos locais)
- Disco: 50GB+ (para armazenar modelos de IA)
- GPU (opcional): NVIDIA CUDA ou AMD ROCm

**Recomendado: Instalar Ollama** para rodar modelos de IA localmente
- Download: https://ollama.ai
- Modelos: qwen2.5:7b-instruct (equilibrado) ou gemma2:2b (rápido)

---

## Configuração

### Primeira Vez
1. Inicie Cutia
2. Login com credenciais padrão
3. Vá a Settings > Geral
4. Configure seu modelo de IA (Ollama, OpenAI, etc.)
5. Configure integrações conforme necessário

### Variáveis de Ambiente (.env)

```env
# Servidor
SERVER_PORT=7000
SERVER_HOST=127.0.0.1

# Modelo de IA
LLM_PROVIDER=ollama
LLM_URL=http://localhost:11434/v1
LLM_MODEL=qwen2.5:7b-instruct-q4_K_M

# Banco de Dados
DATABASE_URL=sqlite:///./data/app.db

# Segurança
AUTH_ENABLED=true
LOCALHOST_BYPASS=false
SECURE_COOKIES=false
```

---

## Segurança

Cutia é poderoso. Trate como um console administrativo:

**Sempre Faça**
- Mantenha AUTH_ENABLED=true
- Use senhas fortes
- Não exponha na internet sem HTTPS
- Use reverse proxy com autenticação

**Nunca Faça**
- Exponha diretamente na internet pública
- Use localhost_bypass em produção
- Compartilhe senhas em logs ou chat
- Deixe default credentials após setup

---

## Troubleshooting

**Cutia não abre**
```bash
ps aux | grep python          # Verifique se está rodando
netstat -tulpn | grep 7000    # Verifique a porta
```

**Erro ao carregar modelos**
```bash
ollama list                     # Verifique modelos
ollama pull qwen2.5:7b-instruct  # Baixe um modelo
```

**Strings em inglês**
- Verifique se está na branch correta
- Limpe cache do navegador (Ctrl+Shift+Del)
- Reinicie o servidor

---

## Paleta de Cores - Cerrado Brasileiro

O branding de Cutia reflete a autenticidade do cerrado:

| Cor | Código | Propósito |
|-----|--------|----------|
| Terra Vermelha | #A0403A | Primária, força e enraizamento |
| Ocre Queimado | #B8860B | Secundária, maturidade e sabedoria |
| Verde Cerrado | #6B8E23 | Terciária, adaptação |
| Dourado Seco | #DAA520 | Destaque, chamadas à ação |
| Marrom Profundo | #5C4033 | Tipografia, seriedade |
| Cinza Cinéreo | #8B8680 | Elementos secundários |
| Fundo Neutro | #F5F1E8 | Background principal |

---

## Documentação

- [INSTALL_PTBR.md](INSTALL_PTBR.md) — Guia de instalação detalhado
- [CUTIA_LAUNCH.md](CUTIA_LAUNCH.md) — Documento de lançamento
- [PR_I18N_PROPOSAL.md](PR_I18N_PROPOSAL.md) — Proposta de sistema de idiomas

---

## Contribuindo

Encontrou algo em inglês? Quer melhorar a tradução?

1. Abra uma [issue](https://github.com/FinweeJur/odysseus/issues)
2. Ou envie um [PR](https://github.com/FinweeJur/odysseus/pulls)

---

## Créditos

- **Odysseus Original**: [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon)
- **Tradução PT-BR**: Comunidade brasileira
- **Coordenação**: [@FinweeJur](https://github.com/FinweeJur)
- **Assistência IA**: Claude (Anthropic)

---

## Licença

MIT — Use livremente, comercial ou pessoal.

---

Bem-vindo ao cerrado digital. Aqui, código se move como a cutia: rápido, inteligente, econômico, e adaptável a qualquer terreno que o desafie.
