/**
 * lightbox.js
 * ───────────
 * Vanilla JS image lightbox for gallery pages.
 * Clicking any .portfolio-card opens a fullscreen overlay with:
 *   - Prev / Next navigation (wraps around)
 *   - Keyboard support: Escape (close), ArrowLeft/ArrowRight (navigate)
 *   - Click outside image to close
 *   - Body-scroll lock while open
 *
 * Usage — HTML:
 * Each gallery item must have class .portfolio-card and contain an <img>.
 * Add the lightbox overlay markup to the page (once, outside any container):
 *
 *   <div id="lightbox" class="lightbox">
 *     <button class="lightbox-close" aria-label="Close">&times;</button>
 *     <button class="lightbox-prev"  aria-label="Previous">&#8249;</button>
 *     <button class="lightbox-next"  aria-label="Next">&#8250;</button>
 *     <div class="lightbox-content">
 *       <img class="lightbox-img" src="" alt="" />
 *       <p class="lightbox-caption"></p>
 *     </div>
 *   </div>
 *
 * Usage — JS:
 *   initLightbox();
 *   // or with custom card selector:
 *   initLightbox({ cardSelector: '.gallery-item' });
 *
 * Required CSS — add to your stylesheet:
 *   .lightbox { display:none; position:fixed; inset:0; background:rgba(0,0,0,0.92);
 *               z-index:9999; align-items:center; justify-content:center; }
 *   .lightbox.active { display:flex; }
 *   .lightbox-img { max-width:90vw; max-height:85vh; object-fit:contain; border-radius:8px; }
 *   .lightbox-close, .lightbox-prev, .lightbox-next { position:absolute; background:none;
 *               border:none; color:#fff; font-size:2rem; cursor:pointer; padding:0.5rem 1rem; }
 *   .lightbox-close { top:1rem; right:1rem; }
 *   .lightbox-prev  { left:1rem;  top:50%; transform:translateY(-50%); font-size:3rem; }
 *   .lightbox-next  { right:1rem; top:50%; transform:translateY(-50%); font-size:3rem; }
 *   .lightbox-caption { color:#ccc; text-align:center; margin-top:0.75rem; font-size:0.9rem; }
 *
 * Source: extracted from PreSchool Website Builder project
 */

/**
 * @param {object} [options]
 * @param {string} [options.cardSelector='.portfolio-card'] - CSS selector for gallery items
 * @param {string} [options.lightboxId='lightbox']          - ID of the lightbox overlay element
 */
function initLightbox({
  cardSelector  = '.portfolio-card',
  lightboxId    = 'lightbox',
} = {}) {
  const galleryItems = document.querySelectorAll(cardSelector);
  const lightbox     = document.getElementById(lightboxId);
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg     = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose   = lightbox.querySelector('.lightbox-close');
  const lightboxPrev    = lightbox.querySelector('.lightbox-prev');
  const lightboxNext    = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  const images = [];

  galleryItems.forEach((item, i) => {
    const img = item.querySelector('img');
    if (img) {
      images.push({ src: img.src, alt: img.alt });
      item.addEventListener('click', () => openLightbox(i));
      item.style.cursor = 'pointer';
    }
  });

  function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showImage(index) {
    if (!images[index]) return;
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    if (lightboxCaption) lightboxCaption.textContent = images[index].alt;
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft'  && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });
}
