export class Lightbox {
  private overlay: HTMLElement;
  private container: HTMLElement;
  private imgEl: HTMLImageElement;
  private caption: HTMLElement;
  private number: HTMLElement;
  private loader: HTMLElement;
  private outerContainer: HTMLElement;
  private dataContainer: HTMLElement;
  private images: Array<{ src: string; title: string }> = [];
  private currentIndex = 0;

  private readonly FADE_MS = 200;
  private readonly RESIZE_MS = 300;
  private readonly CONTAINER_PADDING = 4; // matches CSS padding: 4px on .lb-container

  constructor() {
    this.overlay = this.makeEl('div', 'lightboxOverlay');

    this.container = document.createElement('div');
    this.container.className = 'lightbox';
    this.container.id = 'lightbox';
    this.container.style.display = 'none';
    this.container.innerHTML = `
      <div class="lb-outerContainer">
        <div class="lb-container">
          <img class="lb-image" src="" alt="" style="display:none;" />
          <div class="lb-loader"><a class="lb-cancel"></a></div>
          <div class="lb-nav" style="display:none;">
            <a class="lb-prev" href="#" aria-label="Previous"></a>
            <a class="lb-next" href="#" aria-label="Next"></a>
          </div>
        </div>
      </div>
      <div class="lb-dataContainer" style="display:none;">
        <div class="lb-data">
          <div class="lb-details">
            <span class="lb-caption"></span>
            <span class="lb-number"></span>
          </div>
          <div class="lb-closeContainer">
            <a class="lb-close" href="#" aria-label="Close"></a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(this.overlay);
    document.body.appendChild(this.container);

    this.outerContainer = this.container.querySelector('.lb-outerContainer')!;
    this.dataContainer  = this.container.querySelector('.lb-dataContainer')!;
    this.imgEl          = this.container.querySelector('.lb-image')!;
    this.caption        = this.container.querySelector('.lb-caption')!;
    this.number         = this.container.querySelector('.lb-number')!;
    this.loader         = this.container.querySelector('.lb-loader')!;

    this.bindEvents();
  }

  private makeEl(tag: string, cls: string): HTMLElement {
    const el = document.createElement(tag);
    el.className = cls;
    el.style.display = 'none';
    return el;
  }

  private fadeIn(el: HTMLElement, ms = this.FADE_MS, displayAs = 'block'): void {
    el.style.opacity = '0';
    el.style.display = displayAs;
    el.style.transition = `opacity ${ms}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = '1'; }));
  }

  private fadeOut(el: HTMLElement, ms = this.FADE_MS, done?: () => void): void {
    el.style.transition = `opacity ${ms}ms`;
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
      el.style.transition = '';
      done?.();
    }, ms);
  }

  private sizeOverlay(): void {
    this.overlay.style.width  = document.documentElement.scrollWidth + 'px';
    this.overlay.style.height = document.documentElement.scrollHeight + 'px';
  }

  private bindEvents(): void {
    this.overlay.addEventListener('click', () => this.close());

    this.container.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).id === 'lightbox') this.close();
    });

    this.container.querySelector('.lb-prev')!.addEventListener('click', (e) => {
      e.preventDefault();
      this.navigate(-1);
    });
    this.container.querySelector('.lb-next')!.addEventListener('click', (e) => {
      e.preventDefault();
      this.navigate(1);
    });
    this.container.querySelector('.lb-close')!.addEventListener('click', (e) => {
      e.preventDefault();
      this.close();
    });

    document.addEventListener('keyup', (e) => {
      if (this.overlay.style.display === 'none') return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });

    window.addEventListener('resize', () => this.sizeOverlay());

    document.addEventListener('click', (e) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-lightbox]');
      if (!anchor) return;
      e.preventDefault();

      const group = anchor.dataset.lightbox!;
      const anchors = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(`a[data-lightbox="${group}"]`)
      );
      this.images = anchors.map((a) => ({ src: a.href, title: a.title ?? '' }));
      this.currentIndex = anchors.indexOf(anchor);
      this.open();
    });
  }

  private open(): void {
    this.sizeOverlay();
    this.container.style.top = (window.scrollY + window.innerHeight / 10) + 'px';
    this.imgEl.style.display = 'none';
    this.container.querySelector<HTMLElement>('.lb-nav')!.style.display = 'none';
    this.dataContainer.style.display = 'none';

    this.fadeIn(this.overlay, this.FADE_MS);
    this.fadeIn(this.container, this.FADE_MS);
    this.loadImage();
  }

  private close(): void {
    this.fadeOut(this.overlay, this.FADE_MS);
    this.fadeOut(this.container, this.FADE_MS);
  }

  private navigate(dir: number): void {
    this.currentIndex = (this.currentIndex + dir + this.images.length) % this.images.length;
    this.loadImage();
  }

  private loadImage(): void {
    this.loader.style.display = 'block';
    this.imgEl.style.display = 'none';
    this.container.querySelector<HTMLElement>('.lb-nav')!.style.display = 'none';
    this.dataContainer.style.display = 'none';

    const { src } = this.images[this.currentIndex];

    const tmp = new Image();
    tmp.onload = () => {
      this.imgEl.src = src;

      let w = tmp.width;
      let h = tmp.height;
      const p = this.CONTAINER_PADDING;
      const maxW = window.innerWidth  - p * 2 - 20;
      const maxH = window.innerHeight - p * 2 - 110;

      if (w > maxW || h > maxH) {
        if (w / maxW > h / maxH) {
          h = Math.round(h / (w / maxW));
          w = maxW;
        } else {
          w = Math.round(w / (h / maxH));
          h = maxH;
        }
      }

      this.imgEl.style.width  = w + 'px';
      this.imgEl.style.height = h + 'px';
      this.sizeContainer(w, h);
    };
    tmp.onerror = () => { this.loader.style.display = 'none'; };
    tmp.src = src;
  }

  private sizeContainer(imgW: number, imgH: number): void {
    const p = this.CONTAINER_PADDING;
    const newW = imgW + p * 2;
    const newH = imgH + p * 2;

    this.outerContainer.style.transition = `width ${this.RESIZE_MS}ms, height ${this.RESIZE_MS}ms`;
    this.outerContainer.style.width  = newW + 'px';
    this.outerContainer.style.height = newH + 'px';

    setTimeout(() => {
      this.dataContainer.style.width = newW + 'px';
      this.showImage();
    }, this.RESIZE_MS);
  }

  private showImage(): void {
    this.loader.style.display = 'none';
    this.outerContainer.style.transition = '';

    this.fadeIn(this.imgEl, 200);

    const nav  = this.container.querySelector<HTMLElement>('.lb-nav')!;
    const prev = this.container.querySelector<HTMLElement>('.lb-prev')!;
    const next = this.container.querySelector<HTMLElement>('.lb-next')!;

    if (this.images.length > 1) {
      nav.style.display  = 'block';
      prev.style.display = this.currentIndex > 0 ? 'block' : 'none';
      next.style.display = this.currentIndex < this.images.length - 1 ? 'block' : 'none';
    }

    const { title } = this.images[this.currentIndex];
    this.caption.textContent = title ?? '';
    this.number.textContent  = this.images.length > 1
      ? `Image ${this.currentIndex + 1} of ${this.images.length}`
      : '';

    this.fadeIn(this.dataContainer, this.RESIZE_MS);

    if (this.currentIndex + 1 < this.images.length) new Image().src = this.images[this.currentIndex + 1].src;
    if (this.currentIndex - 1 >= 0)                  new Image().src = this.images[this.currentIndex - 1].src;
  }
}
