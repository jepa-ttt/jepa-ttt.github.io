/* Adapted from the Academic Project Page Template, CC BY-SA 4.0. */
'use strict';

const scrollButton = document.querySelector('.scroll-to-top');
const copyButton = document.querySelector('.copy-bibtex-btn');
const copyStatus = document.querySelector('.copy-status');
let copyFeedbackTimeout;

if (scrollButton) {
  const updateScrollButton = () => {
    scrollButton.classList.toggle('visible', window.scrollY > 300);
  };

  window.addEventListener('scroll', updateScrollButton, { passive: true });
  updateScrollButton();
  scrollButton.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
    document.getElementById('page-title').focus({ preventScroll: true });
  });
}

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const citation = document.getElementById('bibtex-code').textContent;
    const label = copyButton.querySelector('.copy-text');
    clearTimeout(copyFeedbackTimeout);

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error('Clipboard is unavailable');
      }
      await navigator.clipboard.writeText(citation);
      label.textContent = 'Copied!';
      copyButton.classList.add('copied');
      copyStatus.textContent = 'Citation copied to clipboard.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('bibtex-code'));
      selection.removeAllRanges();
      selection.addRange(range);
      label.textContent = 'Selected';
      copyStatus.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy, or use the download link.';
    }

    copyFeedbackTimeout = setTimeout(() => {
      label.textContent = 'Copy';
      copyButton.classList.remove('copied');
    }, 2500);
  });
}
