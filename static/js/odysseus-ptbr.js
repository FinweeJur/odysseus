// =============================================================================
// Odysseus — Tradução PT-BR v2 (motor refeito — text-node walker)
// =============================================================================

(function () {
  'use strict';

  const DICT = {
    'Odysseus Chat': 'Chat do Cutia',
    'Cutia Chat': 'Chat do Cutia',
    'New Chat': 'Novo Chat',
    'Select model': 'Selecionar modelo',
    'Switch model': 'Trocar modelo',
    'Attach files': 'Anexar arquivos',
    'TTS Mode': 'Modo Leitura',
    'No limit': 'Sem limite',
    'System prompt': 'Prompt do sistema',
    'Rename Session': 'Renomear Sessão',
    'Session Name': 'Nome da Sessão',
    'Add Models': 'Adicionar Modelos',
    'AI Defaults': 'Padrões da IA',
    'Agent Tools': 'Ferramentas do Agente',
    'Image Generation': 'Geração de Imagens',
    'Web Search': 'Busca na Web',
    'Research Model': 'Modelo de Pesquisa',
    'Deep Research': 'Pesquisa Profunda',
    'More': 'Mais',
    'Rename': 'Renomear',
    'Copy Chat': 'Copiar Chat',
    'PDF': 'PDF',
    'Save to Documents': 'Salvar em Documentos',
    'API Key': 'Chave API',
    'Max Tokens': 'Tokens Máximos',
    'Extract Timeout': 'Timeout de Extração',
    'Extract Parallel': 'Paralelismo',
    'Max Time': 'Tempo Máximo',
    'Type a message...': 'Digite uma mensagem...',
    'Send message': 'Enviar mensagem',
    'Stop generating': 'Parar geração',
    'Regenerate': 'Regenerar',
    'Edit message': 'Editar mensagem',
    'Delete message': 'Excluir mensagem',
    'Copy message': 'Copiar mensagem',
    'Thinking...': 'Pensando...',
    'Streaming...': 'Transmitindo...',
    'Connected': 'Conectado',
    'Disconnected': 'Desconectado',
    'Reconnecting...': 'Reconectando...',
    'No messages yet': 'Nenhuma mensagem ainda',
    'Start a conversation': 'Inicie uma conversa',
    'Type /setup to get started.': 'Digite /setup para começar.',
    'Type /setup, then choose Local models or API.': 'Digite /setup e escolha Modelos Locais ou API.',
    'Yours for the voyage.': 'Seu para a jornada.',
    'Click to launch setup': 'Clique para iniciar configuração',
    'Search models...': 'Buscar modelos...',
    'No models match': 'Nenhum modelo corresponde',
    'Favorites': 'Favoritos',
    'Offline': 'Offline',
    '+ Chat': '+ Chat',
    '+ Image': '+ Imagem',
    '(offline)': '(offline)',
    '(scan failed)': '(falha ao escanear)',
    '(render failed': '(falha ao renderizar',
    'Show less': 'Mostrar menos',
    'Show': 'Mostrar',
    'more': 'mais',
    'more model': 'mais modelo',
    'more models': 'mais modelos',
    's': 's',
    '(No folder)': '(Sem pasta)',
    '+ New Folder': '+ Nova Pasta',
    'e.g. Work, Research, Drafts': 'ex: Trabalho, Pesquisa, Rascunhos',
    'Unsorted': 'Sem pasta',
    'Select': 'Selecionar',
    'Cancel': 'Cancelar',
    'Export': 'Exportar',
    'Import': 'Importar',
    'Importing…': 'Importando…',
    'Imported': 'Importado',
    'file': 'arquivo',
    'files': 'arquivos',
    'Archived': 'Arquivado',
    'Archive': 'Arquivar',
    'Restore': 'Restaurar',
    'Open Report': 'Abrir Relatório',
    'selected': 'selecionado(s)',
    'research': 'pesquisas',
    'sources': 'fontes',
    'Last Active': 'Mais Recente',
    'Newest First': 'Mais Novo Primeiro',
    'By Folder': 'Por Pasta',
    'Last used': 'Último uso',
    'Most used': 'Mais usado',
    'Filter…': 'Filtrar…',
    'Select sessions': 'Selecionar sessões',
    'Actions': 'Ações',
    '(archived)': '(arquivado)',
    'Brain': 'Cérebro',
    'Close memory modal': 'Fechar painel de memória',
    'Close theme': 'Fechar tema',
    'Include memories in chat context': 'Incluir memórias no contexto do chat',
    'Sort memories': 'Ordenar memórias',
    'Select multiple memories': 'Selecionar várias memórias',
    'AI tidy: deduplicate and clean up memories': 'Limpeza IA: remover duplicatas e organizar memórias',
    'Tidy': 'Limpar',
    'Search memories…': 'Buscar memórias…',
    'Search memories': 'Buscar memórias',
    'Cancel (Esc)': 'Cancelar (Esc)',
    'Import memories from a file': 'Importar memórias de um arquivo',
    'Export all memories as JSON': 'Exportar todas as memórias como JSON',
    'New memory text': 'Nova memória',
    'Add Memory': 'Adicionar Memória',
    'Memory': 'Memória',
    'Memories': 'Memórias',
    'No memories yet': 'Nenhuma memória ainda',
    'Search': 'Buscar',
    'Category': 'Categoria',
    'fact': 'fato',
    'event': 'evento',
    'contact': 'contato',
    'preference': 'preferência',
    'All': 'Todas',
    'Add Skill': 'Adicionar Habilidade',
    'Skill title': 'Título da habilidade',
    'When to use this skill': 'Quando usar esta habilidade',
    'How — the approach or steps': 'Como — abordagem ou passos',
    'Tags': 'Tags',
    'Inject relevant skills into chat context': 'Injetar habilidades relevantes no contexto',
    'Select multiple skills': 'Selecionar várias habilidades',
    'Test every skill, auto-fix the weak ones, flag what still fails': 'Testar todas as habilidades, corrigir as fracas, sinalizar falhas',
    'Audit all': 'Auditar tudo',
    'Search skills…': 'Buscar habilidades…',
    'Search skills': 'Buscar habilidades',
    'Publish selected drafts': 'Publicar rascunhos selecionados',
    'Approve': 'Aprovar',
    'Audit selected draft skills': 'Auditar rascunhos selecionados',
    'Audit': 'Auditar',
    'Delete selected duplicates, generic/irrelevant skills, failed audits, and skills below threshold': 'Excluir duplicatas, habilidades genéricas/irrelevantes, auditorias falhas e abaixo do limiar',
    'Delete non passing': 'Excluir não aprovadas',
    'Max skills to inject': 'Máx. de habilidades a injetar',
    'Inject Skills': 'Injetar Habilidades',
    'Minimum confidence': 'Confiança mínima',
    'All skills': 'Todas as habilidades',
    'Drafts only': 'Apenas rascunhos',
    'Published only': 'Apenas publicadas',
    'Skills': 'Habilidades',
    'Skill': 'Habilidade',
    'No skills yet': 'Nenhuma habilidade ainda',
    'Theme': 'Tema',
    'Fade this window to preview the page behind it': 'Esmaecer janela para pré-visualizar',
    'Background': 'Fundo',
    'Text': 'Texto',
    'Panel': 'Painel',
    'Sidebar': 'Barra lateral',
    'Border': 'Borda',
    'Accent': 'Destaque',
    'Reset this color': 'Resetar esta cor',
    'Reset color': 'Resetar cor',
    'Default Themes': 'Temas Padrão',
    'Your Themes': 'Seus Temas',
    'Chat Bubbles': 'Balões de Chat',
    'User Chat Bubble': 'Balão do Usuário',
    'AI Chat Bubble': 'Balão da IA',
    'Border Chat Bubble': 'Borda do Balão',
    'Odysseus Logo': 'Logo do Cutia',
    'Cutia Logo': 'Logo do Cutia',
    'Input Bg': 'Fundo Input',
    'Input Border': 'Borda Input',
    'Send Btn': 'Botão Enviar',
    'Send Hover': 'Hover Enviar',
    'Code Blocks': 'Blocos de Código',
    'Code Bg': 'Fundo Código',
    'Code Text': 'Texto Código',
    'Toggle On': 'Toggle Ativo',
    'Custom Fonts': 'Fontes Personalizadas',
    'Color Harmony': 'Harmonia de Cores',
    'Accent Color': 'Cor de Destaque',
    'Perlin Flow': 'Fluxo Perlin',
    'Hamburger menu': 'Menu hambúrguer',
    'Brave Search': 'Brave Search',
    'Google PSE': 'Google PSE',
    'Brave API key': 'Chave API Brave',
    'Google API key': 'Chave API Google',
    'Tavily API key': 'Chave API Tavily',
    'Serper API key': 'Chave API Serper',
    'API key': 'Chave API',
    'Active:': 'Ativo:',
    'results': 'resultados',
    'Saved': 'Salvo',
    'Failed to save': 'Falha ao salvar',
    'Pick a provider first': 'Escolha um provedor primeiro',
    'Testing...': 'Testando...',
    'Test failed:': 'Falha no teste:',
    'No results returned': 'Nenhum resultado retornado',
    'result': 'resultado',
    'Using chat defaults': 'Usando padrões do chat',
    'Pick an endpoint + model': 'Escolha um endpoint + modelo',
    'Disabled': 'Desabilitado',
    'Drag to reorder': 'Arraste para reordenar',
    'Remove': 'Remover',
    'Same as chat': 'Igual ao chat',
    '(no key)': '(sem chave)',
    '(not detected)': '(não detectado)',
    '(API)': '(API)',
    'Limit:': 'Limite:',
    'tool calls per message': 'chamadas de ferramenta por mensagem',
    'Unlimited': 'Ilimitado',
    'Preview': 'Pré-visualizar',
    'Loading...': 'Carregando...',
    'Stop': 'Parar',
    'Preview failed:': 'Pré-visualização falhou:',
    'Select a provider first': 'Selecione um provedor primeiro',
    'OS default voice': 'Voz padrão do SO',
    'Voice:': 'Voz:',
    'Vision:': 'Visão:',
    '(fallback)': '(reserva)',
    'Settings': 'Configurações',
    'Save': 'Salvar',
    'Error': 'Erro',
    'Saved!': 'Salvo!',
    'Created!': 'Criado!',
    'Create Persistent Chat': 'Criar Chat Persistente',
    'Save as Template': 'Salvar como Modelo',
    'Restart server': 'Reiniciar servidor',
    'Cancel group': 'Cancelar grupo',
    'Persistent chat — persona is locked. Style, temperature, and memory can still be changed.': 'Chat persistente — persona bloqueada. Estilo, temperatura e memória ainda podem ser alterados.',
    'Prompt': 'Prompt',
    'stopped': 'parado',
    '[Message interrupted]': '[Mensagem interrompida]',
    'View thinking process': 'Ver raciocínio',
    'done': 'concluído',
    'failed': 'falhou',
    'Screenshot': 'Captura de tela',
    'Loading': 'Carregando',
    'Load more': 'Carregar mais',
    'No results': 'Nenhum resultado',
    'Empty': 'Vazio',
    'No emails': 'Nenhum email',
    'No emails from': 'Nenhum email de',
    'Clear filter': 'Limpar filtro',
    'From:': 'De:',
    'Has attachments': 'Tem anexos',
    'AI flagged as spam — click ✓ to unflag': 'IA marcou como spam — clique ✓ para desmarcar',
    'Not spam': 'Não é spam',
    'Show all emails from': 'Mostrar todos os emails de',
    'Email:': 'Email:',
    'Calendar settings': 'Configurações do calendário',
    'Refresh from database': 'Atualizar do banco de dados',
    'Calendar': 'Calendário',
    'Today': 'Hoje',
    'Tomorrow': 'Amanhã',
    'Yesterday': 'Ontem',
    'No events': 'Nenhum evento',
    'Add Event': 'Adicionar Evento',
    'Event title': 'Título do evento',
    'All day': 'Dia inteiro',
    'Start': 'Início',
    'End': 'Fim',
    'Location': 'Local',
    'Description': 'Descrição',
    'Delete': 'Excluir',
    'Edit': 'Editar',
    'Notes': 'Notas',
    'Tasks': 'Tarefas',
    'Add Note': 'Adicionar Nota',
    'Add Task': 'Adicionar Tarefa',
    'No notes': 'Nenhuma nota',
    'No tasks': 'Nenhuma tarefa',
    'Search notes...': 'Buscar notas...',
    'Search tasks...': 'Buscar tarefas...',
    'Pinned': 'Fixado',
    'Unarchive': 'Desarquivar',
    'Pin': 'Fixar',
    'Unpin': 'Desafixar',
    'Due date': 'Prazo',
    'No due date': 'Sem prazo',
    'Overdue': 'Atrasado',
    'Completed': 'Concluído',
    'Gallery': 'Galeria',
    'No images': 'Nenhuma imagem',
    'Upload': 'Enviar',
    'Download': 'Baixar',
    'Copy': 'Copiar',
    'Open': 'Abrir',
    'Close': 'Fechar',
    'Documents': 'Documentos',
    'Library': 'Biblioteca',
    'New Document': 'Novo Documento',
    'No documents': 'Nenhum documento',
    'Last modified': 'Última modificação',
    'Admin': 'Admin',
    'Ctrl': 'Ctrl',
    'Alt': 'Alt',
    'Copied to clipboard': 'Copiado para a área de transferência',
    'Deleted': 'Excluído',
    'Error:': 'Erro:',
    'Warning': 'Aviso',
    'Info': 'Informação',
    'Success': 'Sucesso',
    'Retry': 'Tentar novamente',
    'Dismiss': 'Descartar',
    'Yes': 'Sim',
    'No': 'Não',
    'OK': 'OK',
    'Apply': 'Aplicar',
    'Reset': 'Resetar',
    'Refresh': 'Atualizar',
    'Back': 'Voltar',
    'Next': 'Próximo',
    'Previous': 'Anterior',
    'Submit': 'Enviar',
    'Confirm': 'Confirmar',
    'Are you sure?': 'Tem certeza?',
    'This action cannot be undone.': 'Esta ação não pode ser desfeita.',
    'Copy link': 'Copiar link',
    'Share': 'Compartilhar',
    'Print': 'Imprimir',
    'Copy as Markdown': 'Copiar como Markdown',
    'Copy as JSON': 'Copiar como JSON',
    'Compare': 'Comparar',
    'Compare Models': 'Comparar Modelos',
    'Model A': 'Modelo A',
    'Model B': 'Modelo B',
    'Run': 'Executar',
    'Swap': 'Trocar',
    'Clear': 'Limpar',
    'Research': 'Pesquisar',
    'Deep research': 'Pesquisa profunda',
    'Researching...': 'Pesquisando...',
    'Findings': 'Descobertas',
    'Summary': 'Resumo',
    'Cookbook': 'Receitas',
    'GPU': 'GPU',
    'GPUs': 'GPUs',
    'Serve Model': 'Servir Modelo',
    'Stop Server': 'Parar Servidor',
    'Running': 'Rodando',
    'Stopped': 'Parado',
    'Available': 'Disponível',
    'In Use': 'Em Uso',
    'Presets': 'Presets',
    'Save Preset': 'Salvar Preset',
    'Load Preset': 'Carregar Preset',
    'Delete Preset': 'Excluir Preset',
    'Default': 'Padrão',
    'Group Chat': 'Chat em Grupo',
    'Create Group': 'Criar Grupo',
    'Group Name': 'Nome do Grupo',
    'Add Member': 'Adicionar Membro',
    'Members': 'Membros',
    'Home': 'Início',
    'Chat': 'Chat',
    'Chats': 'Chats',
    'Menu': 'Menu',
    'Toggle sidebar': 'Alternar barra lateral',
    'Expand': 'Expandir',
    'Collapse': 'Recolher',
    'Minimize': 'Minimizar',
    'Maximize': 'Maximizar',
    'Recent': 'Recente',
    'Create': 'Criar',
    'Save': 'Salvar',
    'Search': 'Pesquisar',
    'Week': 'Semana',
    'Month': 'Mês',
    'Year': 'Ano',
    'Import': 'Importar',
    'Export': 'Exportar',
    'Reset': 'Redefinir',
    'Delete selected duplicates, generic/irrelevant skills, failed audits, and skills below threshold': 'Excluir selecionadas: remover duplicatas, habilidades genéricas/irrelevantes, auditorias com falha e abaixo do limiar',
  };

  const PARTIALS = [
    [/^Show (\d+) more model(s?)$/, 'Mostrar mais $1 modelo$2'],
    [/^Show (\d+) more$/, 'Mostrar mais $1'],
    [/^(\d+) selected$/, '$1 selecionado(s)'],
    [/^Email: (.*)$/, 'Email: $1'],
    [/^From: (.*)$/, 'De: $1'],
    [/^Limit: (\d+) tool calls per message$/, 'Limite: $1 chamadas por mensagem'],
    [/^No models match "(.*)"$/, 'Nenhum modelo corresponde a "$1"'],
    [/^No emails from (.*)$/, 'Nenhum email de $1'],
    [/^Imported (\d+) file(s?)$/, 'Importado(s) $1 arquivo$2'],
    [/^Active: (.*) \u00b7 (\d+) results$/, 'Ativo: $1 \u00b7 $2 resultados'],
    [/^(\d+) result(s?) \u00b7 (\d+)ms \u00b7 top: (.*)$/, '$1 resultado$2 \u00b7 $3ms \u00b7 topo: $4'],
    [/^(\d+) msgs?$/, '$1 mensagens'],
    [/^(\d+) sources$/, '$1 fontes'],
    [/^(\d+) research$/, '$1 pesquisas'],
    [/^Show all emails from (.*)$/, 'Mostrar todos os emails de $1'],
    [/^(\d+) (hours?|days?|weeks?|months?) ago$/, 'há $1 $2'],
    [/^(\d+) minutes? ago$/, 'há $1 minutos'],
    [/^Just now$/, 'Agora mesmo'],
    [/^Created (.*)$/, 'Criado $1'],
    [/^Updated (.*)$/, 'Atualizado $1'],
    [/^Deleted (.*)$/, 'Excluído $1'],
    [/^(\d+) items?$/, '$1 itens'],
    [/^(\d+) of (\d+)$/, '$1 de $2'],
  ];

  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA']);
  const translatedNodes = new WeakSet();

  function translateText(text) {
    if (typeof text !== 'string') return text;
    const trimmed = text.trim();
    if (trimmed === '') return text;
    if (/^[\d\-:.TZ\/+ ]+$/.test(trimmed)) return text;
    if (/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(trimmed)) return text;
    if (DICT.hasOwnProperty(trimmed)) return DICT[trimmed];
    if (DICT.hasOwnProperty(text)) return DICT[text];
    for (const [re, replacement] of PARTIALS) {
      const m = trimmed.match(re);
      if (m) return trimmed.replace(re, replacement);
    }
    return text;
  }

  function shouldSkip(el) {
    if (!el || el.nodeType !== 1) return false;
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.closest('code, pre, textarea, [contenteditable="true"]')) return true;
    if (el.matches('input:focus, textarea:focus, [contenteditable="true"]:focus')) return true;
    return false;
  }

  function translateTextNode(node) {
    if (translatedNodes.has(node)) return;
    if (node.nodeType !== 3) return;
    if (!node.data || node.data.trim() === '') return;
    const parent = node.parentElement;
    if (!parent || shouldSkip(parent)) return;
    const original = node.data;
    if (/^[\s\d.,;:!?()\[\]{}\-+*\/=<>|&@#$%^~`'"]+$/.test(original)) return;
    const translated = translateText(original);
    if (translated !== original) {
      node.data = translated;
    }
    translatedNodes.add(node);
  }

  function walkTextNodes(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        const parent = node.parentElement;
        if (!parent || shouldSkip(parent)) return NodeFilter.FILTER_REJECT;
        if (translatedNodes.has(node)) return NodeFilter.FILTER_REJECT;
        if (!node.data || node.data.trim() === '') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      translateTextNode(walker.currentNode);
    }
  }

  function translateAttributes(el) {
    if (!el || el.nodeType !== 1) return;
    if (shouldSkip(el)) return;
    const attrs = ['aria-label', 'title', 'placeholder', 'data-tooltip', 'data-title', 'data-hint', 'data-label'];
    for (const attr of attrs) {
      if (el.hasAttribute(attr)) {
        const orig = el.getAttribute(attr);
        if (!orig || orig.trim() === '') continue;
        const translated = translateText(orig);
        if (translated !== orig) {
          el.setAttribute(attr, translated);
        }
      }
    }
    if ((el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button')) || el.tagName === 'BUTTON') {
      if (el.hasAttribute('value')) {
        const orig = el.getAttribute('value');
        const translated = translateText(orig);
        if (translated !== orig) el.setAttribute('value', translated);
      }
    }
  }

  function fullPass(root) {
    walkTextNodes(root || document.body);
    if (root && root.nodeType === 1) {
      translateAttributes(root);
      root.querySelectorAll('*').forEach(translateAttributes);
    } else {
      document.querySelectorAll('[aria-label],[title],[placeholder],[data-tooltip],[data-title],[data-hint],[data-label]').forEach(translateAttributes);
      document.querySelectorAll('input[type="submit"], input[type="button"], button[value]').forEach(translateAttributes);
    }
  }

  // Debounced per-node full pass: a node added during streaming often gets its
  // real text filled in asynchronously a beat later, so we still need a
  // follow-up pass — but one debounced pass per node is enough; the previous
  // version fired three fixed passes (50/200/800ms) per node regardless of
  // how many mutations arrived, which compounds badly during AI response
  // streaming (many added/changed nodes per second).
  const pendingNodePasses = new WeakMap();
  function scheduleNodePass(node) {
    const existing = pendingNodePasses.get(node);
    if (existing) clearTimeout(existing);
    pendingNodePasses.set(node, setTimeout(function () {
      pendingNodePasses.delete(node);
      fullPass(node);
    }, 250));
  }

  // Debounced body-wide pass for characterData bursts (e.g. streamed tokens):
  // one pass after activity settles, instead of a counter-based trigger that
  // could still fire many times across a single long streamed response.
  let bodyPassTimer = null;
  function scheduleBodyPass() {
    if (bodyPassTimer) clearTimeout(bodyPassTimer);
    bodyPassTimer = setTimeout(function () {
      bodyPassTimer = null;
      walkTextNodes(document.body);
    }, 400);
  }

  const observer = new MutationObserver(function (mutations) {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) {
          translateAttributes(node);
          scheduleNodePass(node);
        } else if (node.nodeType === 3) {
          translateTextNode(node);
        }
      }
      if (m.type === 'attributes' && m.target && m.target.nodeType === 1) {
        const attrs = ['aria-label', 'title', 'placeholder', 'data-tooltip', 'data-title', 'data-hint', 'data-label', 'value'];
        if (attrs.includes(m.attributeName)) {
          translateAttributes(m.target);
          scheduleNodePass(m.target);
        }
      }
      if (m.type === 'characterData' && m.target) {
        translatedNodes.delete(m.target);
        translateTextNode(m.target);
        scheduleBodyPass();
      }
    }
  });

  function init() {
    fullPass(document.body);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      attributeFilter: ['aria-label', 'title', 'placeholder', 'data-tooltip', 'data-title', 'data-hint', 'data-label', 'value'],
      characterDataOldValue: false,
    });
    var retryDelays = [500, 1000, 2000, 4000, 8000, 16000, 30000, 60000];
    retryDelays.forEach(function (delay) {
      setTimeout(function () {
        walkTextNodes(document.body);
        document.querySelectorAll('[aria-label],[title],[placeholder],[data-tooltip],[data-title],[data-hint],[data-label]').forEach(translateAttributes);
      }, delay);
    });
    // Low-cost safety net only — the debounced MutationObserver above handles
    // normal updates. This just catches anything that slips through without
    // re-scanning the whole page every few seconds.
    setInterval(function () {
      fullPass(document.body);
    }, 120000);
    console.log('[Odysseus PT-BR v2] ' + Object.keys(DICT).length + ' termos | text-node walker ativo.');
  }

  if (document.body && document.body.children.length > 0) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  window.__ptbr = {
    dict: DICT,
    partials: PARTIALS,
    translate: translateText,
    fullPass: fullPass,
    addTerms: function (terms) { Object.assign(DICT, terms); fullPass(document.body); },
  };
})();
