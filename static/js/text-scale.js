// Tamanho do Texto — escala global da interface (acessibilidade)
(function () {
  'use strict';
  const STORAGE_KEY = 'odysseus-text-scale';
  const DEFAULT_SCALE = 100;

  function applyScale(pct) {
    const clamped = Math.max(85, Math.min(150, pct));
    document.body.style.zoom = (clamped / 100);
    return clamped;
  }

  function loadScale() {
    const raw = localStorage.getItem(STORAGE_KEY);
    const n = raw ? parseInt(raw, 10) : DEFAULT_SCALE;
    return isNaN(n) ? DEFAULT_SCALE : n;
  }

  function saveScale(pct) {
    localStorage.setItem(STORAGE_KEY, String(pct));
  }

  // Aplica assim que possível (antes do DOM completo, evita "flash" de tamanho errado)
  const initial = loadScale();
  function applyInitial() {
    if (document.body) applyScale(initial);
    else document.addEventListener('DOMContentLoaded', () => applyScale(initial));
  }
  applyInitial();

  function wireControls() {
    const slider = document.getElementById('theme-text-scale');
    const valueLabel = document.getElementById('theme-text-scale-value');
    const resetBtn = document.getElementById('theme-text-scale-reset');
    if (!slider) return;

    const current = loadScale();
    slider.value = String(current);
    if (valueLabel) valueLabel.textContent = current + '%';
    applyScale(current);

    slider.addEventListener('input', () => {
      const pct = applyScale(parseInt(slider.value, 10));
      if (valueLabel) valueLabel.textContent = pct + '%';
      saveScale(pct);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        slider.value = String(DEFAULT_SCALE);
        const pct = applyScale(DEFAULT_SCALE);
        if (valueLabel) valueLabel.textContent = pct + '%';
        saveScale(pct);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireControls);
  } else {
    wireControls();
  }
  // Configurações podem ser renderizadas dinamicamente — observa o DOM até os controles aparecerem
  const observer = new MutationObserver(() => {
    if (document.getElementById('theme-text-scale')) {
      wireControls();
      observer.disconnect();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
