# Cutia (odysseus-pt)

Fork/tradução PT-BR do [Odysseus](https://github.com/pewdiepie-archdaemon/odysseus), um workspace de
IA self-hosted (chat, agentes, documentos, email, calendário, tarefas, deep research). 827+ strings
traduzidas em backend (`routes/*.py`) e frontend (`static/js/*.js`).

GitHub: https://github.com/FinweeJur/odysseus-em-portugues-PT-BR-translation
(branch `feature/pt-br-translation`).

**Sempre creditar o autor original** [@pewdiepie-archdaemon](https://github.com/pewdiepie-archdaemon)
em qualquer material com a marca Cutia — é uma tradução comunitária, não um projeto pessoal.

## ⚠️ Cópias relacionadas (não confundir)
- `C:\Users\teste\odysseus` (irmã neste mesmo diretório) — **original upstream em inglês,
  intencionalmente não traduzido**, usado como baseline de diff. Nunca traduzir esse.
- `X:\DevCoder\odysseus-pt` e `X:\DevCoder\foz-suite\ia` — cópias de uma migração de disco datada de
  2026-06-29 (`X:\DevCoder\RELATORIO_MIGRACAO.md`), com validação pendente (caminhos hardcoded
  detectados). Este diretório (`C:\Users\teste\odysseus-pt`) é o clone git ativo — commits e pushes
  pro fork do GitHub acontecem aqui. Antes de assumir qual cópia é a "atual", confirme com o usuário.

## Branding: Paleta Cerrado
- Laterita Vermelha `#B45032` (primária), Verde Cerrado `#698250`, Ocre Profundo `#A07850`,
  Dourado Quente `#DCB464`, Azul Cerrado `#648CB4`, Verde Profundo `#3C5A28`
- Validada contra WCAG AA/AAA — detalhes em `COLOR_PALETTE_TECHNICAL.md` / `QUICK_REFERENCE.md`

## Estrutura de documentação (deliberada)
- `README.md` — prático/funcional, curto, lista de features primeiro, narrativa mínima
- `README_CUTIA_NARRATIVE.md` — versão narrativa/filosófica completa
- `CUTIA_LAUNCH.md` — versão ultra-compacta pra social/Product Hunt
- `MARKETING_STRATEGY.md` — racional de qual doc serve qual canal

## Convenções
- Não adicionar narrativa de marca/IA nos docs principais — manter curto e separado (ver
  `MARKETING_STRATEGY.md`).
- Qualquer string nova em inglês deve ser verificada em **todas** as cópias conhecidas acima antes de
  considerar a tradução completa — já aconteceu de corrigir só uma cópia.
