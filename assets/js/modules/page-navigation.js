/**
 * Page navigation module - Handles smooth page transitions with loading states
 */
const PageNavigation = {
  DELAY_MS: 900,

  // Checks if link is internal (not external or anchor)
  isInternalLink(anchor) {
    const href = anchor.getAttribute('href');
    if (!href) return false;
    return !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:');
  },

  showLoadingSpinner() {
    let windowSpinner = document.querySelector('.window-spinner');

    if (!windowSpinner) {
      windowSpinner = document.createElement('span');
      windowSpinner.className = 'window-spinner';
      windowSpinner.setAttribute('aria-hidden', 'true');
      document.body.appendChild(windowSpinner);
    }

    requestAnimationFrame(() => {
      windowSpinner.classList.add('visible');
    });

    return windowSpinner;
  },

  handleNavigationClick(e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    if (!this.isInternalLink(anchor)) return;

    e.preventDefault();
    anchor.dataset.navigating = '1';
    anchor.classList.add('loading');

    this.showLoadingSpinner();

    setTimeout(() => {
      window.location.href = anchor.getAttribute('href');
    }, this.DELAY_MS);
  },

  init() {
    document.addEventListener('click', (e) => this.handleNavigationClick(e), { capture: true });
  }
};

PageNavigation.init();
