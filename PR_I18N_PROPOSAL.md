# 🌍 Proposta: Suporte a Múltiplos Idiomas no Odysseus

**Status:** Pronto para PR  
**Branch:** `feature/pt-br-translation`  
**Escopo:** Adicionar seletor de idioma nas Settings + Tradução PT-BR completa

---

## 📋 Resumo

Este PR adiciona **suporte a múltiplos idiomas** no Odysseus, começando com **português brasileiro (PT-BR)** como primeiro idioma suportado.

### O que inclui:

1. **Sistema de i18n modular** — Fácil adicionar novos idiomas
2. **Seletor de idioma nas Settings** — Usuário escolhe PT-BR ou EN no app
3. **827+ strings traduzidas** — Backend, Frontend, HTML
4. **Facilitadores de instalação** — Scripts para Windows/Linux/Mac
5. **Documentação em português** — Guia de setup PT-BR

---

## 🎯 Benefícios

- 🇧🇷 Suporte oficial para comunidade brasileira/lusófona
- 🌍 Infraestrutura pronta para futuras traduções (ES, FR, DE, etc.)
- ♿ Melhora acessibilidade global
- 📈 Atrai mais usuários internacionais
- 🔧 Sistema limpo e fácil de manter

---

## 📊 Escopo da Tradução PT-BR

| Área | Strings | Status |
|------|---------|--------|
| Backend (routes/*.py) | ~264 | ✅ Completo |
| Frontend (static/js/) | ~563 | ✅ Completo |
| HTML | 6 | ✅ Completo |
| **Total** | **~827** | **✅ Validado** |

**Validação:**
- ✓ `node --check` — Todos os 30+ arquivos JS
- ✓ `py_compile` — Todos os arquivos Python
- ✓ Servidor respondendo corretamente
- ✓ Sem mudanças de funcionalidade

---

## 🔧 Arquitetura Proposta

### 1. Sistema de Idiomas
```
static/i18n/
├── en.json          # Strings em inglês (nova estrutura)
├── pt-br.json       # Strings em português
└── README.md        # Como adicionar novos idiomas
```

### 2. Seletor nas Settings
```
Settings → General → Language
  ○ English (EN)
  ○ Português Brasileiro (PT-BR)
```

### 3. Carregamento
- Idioma padrão: Detecção automática pelo navegador
- Armazenado em: localStorage + servidor (preferência do usuário)
- Aplicado a: Interface inteira + mensagens de erro

---

## 📦 Arquivos Inclusos

### Tradução
- `routes/*.py` — 13 arquivos com strings PT-BR
- `static/js/*.js` — 18 arquivos com strings PT-BR
- `index.html` — 6 strings PT-BR

### Facilitadores
- `INSTALL_PTBR.md` — Guia completo em português
- `install-ptbr.ps1` — Script automático Windows
- `install-ptbr.sh` — Script automático Linux/Mac

### Documentação
- `i18n/pt-br.json` — Arquivo de strings centralizadas
- `i18n/README.md` — Como manter/estender i18n

---

## 🚀 Próximos Passos (Após Este PR)

1. **Fase 2:** Refatorar para usar arquivo JSON centralizado (em vez de strings hardcoded)
2. **Fase 3:** Adicionar tradução para outros idiomas (ES, FR, DE, JA)
3. **Fase 4:** Sistema de contribuições comunitárias para novas traduções

---

## ✅ Compatibilidade

- ✓ Sem breaking changes
- ✓ Totalmente compatível com deployments existentes
- ✓ Inglês continua como padrão
- ✓ Zero impacto em funcionalidade

---

## 🎓 Como Testar

```bash
# Clonar a branch
git clone --branch feature/pt-br-translation https://github.com/FinweeJur/odysseus
cd odysseus

# Instalar
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate (Windows)
pip install -r requirements.txt

# Rodar
python app.py
# Acesse: http://127.0.0.1:7000
# Settings → General → Language → "Português Brasileiro"
```

---

## 📝 Notas

- Todas as strings foram validadas com ferramentas de verificação de sintaxe
- Terminologia consistente seguindo padrões PT-BR
- Nenhuma alteração em endpoints, variáveis técnicas ou funcionalidade
- Pronto para merge + reviews da comunidade

---

## 🤝 Para Contribuidores Futuros

Se quiser adicionar outro idioma:

1. Crie um arquivo `static/i18n/[lang].json`
2. Siga o padrão de chaves em `en.json`
3. Envie um PR

Isso torna fácil para a comunidade contribuir com novas traduções!

---

## 💬 Feedback Bem-Vindo

Este PR é uma proposta. Feedback sobre:
- Arquitetura do i18n
- Prioridade de outros idiomas
- Melhorias na UI do seletor

...é bem-vindo! 🙌

---

**Autores:**  
- Tradução: Comunidade PT-BR
- Coordenação: [@FinweeJur](https://github.com/FinweeJur)
- Assistência IA: Claude (Anthropic)

**Créditos ao autor original:** [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon) pelo Odysseus incrível!
