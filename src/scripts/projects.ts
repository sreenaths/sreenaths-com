import { isMobile } from './utils';

export function initSticky(selector: string): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element || isMobile()) return;

  const parent = element.parentElement!;

  function onScroll(): void {
    if (window.scrollY >= parent.offsetTop) {
      element?.classList.add('stuck');
      parent.style.minHeight = (element?.offsetHeight ?? 0) + 'px';
    } else {
      element?.classList.remove('stuck');
      parent.style.minHeight = '';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

export function initTagFilter(): void {
  document.querySelector('.tag-bar')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('a[data-tag]');
    if (!btn) return;
    e.preventDefault();

    btn.classList.toggle('selected');

    const selectedTags = Array.from(
      document.querySelectorAll<HTMLElement>('.tag-bar a[data-tag].selected')
    ).map((el) => el.dataset.tag!);

    document.querySelectorAll<HTMLElement>('.projects-list .project').forEach((project) => {
      if (selectedTags.length === 0) {
        project.style.display = '';
        return;
      }
      const projectClasses = Array.from(project.classList).filter(
        (c) => c !== 'project' && c !== 'outer-block'
      );
      const matches = selectedTags.some((tag) => projectClasses.includes(tag));
      project.style.display = matches ? '' : 'none';
    });
  });
}
