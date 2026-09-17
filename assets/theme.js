(() => {
  const storageKey = 'control-d-guide-theme';
  const root = document.documentElement;

  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.dataset.theme = savedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.dataset.theme = 'dark';
  }

  const addToggle = () => {
    const header = document.querySelector('.site-header .wrapper');
    if (!header || document.querySelector('.theme-toggle')) return;

    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    toggle.setAttribute('title', 'Toggle dark mode');

    const updateToggle = () => {
      const dark = root.dataset.theme === 'dark';
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.innerHTML = dark
        ? '<span aria-hidden="true">☀</span><span>Light</span>'
        : '<span aria-hidden="true">☾</span><span>Dark</span>';
    };

    toggle.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = nextTheme;
      localStorage.setItem(storageKey, nextTheme);
      updateToggle();
    });

    header.appendChild(toggle);
    updateToggle();
  };

  document.addEventListener('DOMContentLoaded', addToggle);
})();
