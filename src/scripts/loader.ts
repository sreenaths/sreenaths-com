export function initLoaderAnim(): void {
  const loader = document.querySelector<HTMLElement>('.loading-msg');
  const container = document.querySelector<HTMLElement>('.main-container');
  if (!loader || !container) return;

  loader.style.display = 'block';
  container.style.display = 'none';

  function onLoad(): void {
    loader.style.transition = 'opacity 0.3s';
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      container.style.opacity = '0';
      container.style.display = 'block';
      container.style.transition = 'opacity 0.5s';
      requestAnimationFrame(() => {
        container.style.opacity = '1';
      });
    }, 300);
  }

  if (document.readyState === 'complete') {
    onLoad();
  } else {
    window.addEventListener('load', onLoad);
  }
}

export function initScrollTop(): void {
  document.querySelector('.scroll-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
