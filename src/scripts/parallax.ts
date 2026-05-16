import { isMobile } from './utils';

export function initiateImgParallax(container: HTMLElement): void {
  const PARALLAX_DURATION = 50;
  const images = Array.from(container.querySelectorAll<HTMLElement>('.inner-block > div'));

  if (isMobile()) return;

  images.forEach((image, index) => {
    const dataX = parseInt(image.dataset.x ?? '0');
    const cssLeft = parseInt(image.style.left) || 0;
    image.dataset.x = String(cssLeft + (index + 1) * 5);
    image.style.left = dataX + 'px';
    image.style.transition = `left ${PARALLAX_DURATION}ms linear`;
  });

  function animateParallax(mX: number): void {
    const xPos = mX - container.getBoundingClientRect().left;
    const mouseXFactor = Math.round((xPos / container.offsetWidth) * 10);
    images.forEach((image, index) => {
      const x = parseInt(image.dataset.x ?? '0');
      image.style.left = (x - (index + 1) * mouseXFactor) + 'px';
    });
  }

  container.addEventListener('mousemove', (e) => animateParallax(e.pageX));
  container.addEventListener('mouseleave', () => {
    animateParallax(container.getBoundingClientRect().left + container.offsetWidth / 2);
  });

  function onLoad(): void {
    container.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
      container.style.opacity = '1';
    });
    // Let initial positions paint before sliding to center
    setTimeout(() => {
      animateParallax(container.getBoundingClientRect().left + container.offsetWidth / 2);
    }, 100);
  }

  if (document.readyState === 'complete') {
    onLoad();
  } else {
    window.addEventListener('load', onLoad);
  }
}

export function initParallaxResize(): void {
  function onResize(): void {
    const container = document.querySelector<HTMLElement>('.paralax-container');
    if (!container) return;
    const width = window.innerWidth;
    (container.style as CSSStyleDeclaration & { zoom: string }).zoom =
      width < 1024 ? String(width / 1024) : '1';
  }

  window.addEventListener('resize', onResize);
  onResize();
}
