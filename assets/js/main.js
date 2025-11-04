


const Navigation = {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setActiveNavLink();
      this.updateUserName();
      this.setupLogout();
    });
  },

  setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a, .navbar nav a');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage ||
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html') ||
        (currentPage === 'dashboard.html' && href === 'dashboard.html') ||
        (currentPage === 'lessons.html' && href === 'lessons.html') ||
        (currentPage === 'games.html' && href === 'games.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  updateUserName() {
    const userName = localStorage.getItem('userName');
    const userElement = document.querySelector('.navbar-user');

    if (userName && userElement) {
      const isInPagesFolder = window.location.pathname.includes('/pages/');
      const imagePath = isInPagesFolder ? '../assets/images/user-icon.png' : 'assets/images/user-icon.png';
      
      const selectedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
      let helloText = 'Olá';
      
      if (typeof translations !== 'undefined' && translations[selectedLang] && translations[selectedLang]['dashboard.nav.hello']) {
        helloText = translations[selectedLang]['dashboard.nav.hello'];
      }
      
      userElement.innerHTML = `<span>${helloText}, ${userName}</span><img src="${imagePath}" alt="User">`;
    }
  },

  setupLogout() {
    document.addEventListener('click', (e) => {
      const userElement = e.target.closest('.navbar-user');
      if (userElement) {
        if (confirm('Deseja sair da sua conta?')) {
          localStorage.removeItem('userName');
          const isInPagesFolder = window.location.pathname.includes('/pages/');
          const loginPath = isInPagesFolder ? '../index.html' : 'index.html';
          window.location.href = loginPath;
        }
      }
    });
  }
};


const Login = {
  CONFIG: {
    MIN_PASSWORD_LENGTH: 6,
    LOGIN_DELAY_MS: 2000,
    NAVIGATION_DELAY_MS: 900,
    SPINNER_ANIMATION_DURATION: '1.0s',
    PAUSE_BEFORE_NAV_MS: 80,
    SPINNER_PRE_PAUSE_MS: 80
  },

  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },

  MESSAGES: {
    INVALID_EMAIL: 'Por favor, insira um e-mail válido',
    INVALID_PASSWORD: `A senha deve ter pelo menos 6 caracteres`,
    PAGE_NOT_DEVELOPED: 'Esta página não foi desenvolvida',
    LOADING_TEXT: 'Entrando...'
  },

  getTranslation(key) {
    if (typeof translations !== 'undefined') {
      const currentLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
      const translation = translations[currentLang];
      if (translation && translation[key]) {
        return translation[key];
      }
    }
    
    const fallbackMessages = {
      'login.error.invalid_email': this.MESSAGES.INVALID_EMAIL,
      'login.error.invalid_password': this.MESSAGES.INVALID_PASSWORD,
      'login.error.page_not_developed': this.MESSAGES.PAGE_NOT_DEVELOPED,
      'login.loading_text': this.MESSAGES.LOADING_TEXT
    };
    
    return fallbackMessages[key] || 'Mensagem não encontrada';
  },

  updateMessages() {
  },

  getElements() {
    return {
      loginForm: document.querySelector('.login-form'),
      emailInput: document.getElementById('email'),
      passwordInput: document.getElementById('password'),
      rememberCheckbox: document.getElementById('remember'),
      togglePasswordBtn: document.querySelector('.toggle-password'),
      eyeIcon: document.querySelector('.eye-icon'),
      forgotPasswordLink: document.querySelector('.forgot-password'),
      signupLink: document.querySelector('.signup-text a'),
      navLinks: document.querySelectorAll('.nav a[href^="#"]')
    };
  },

  validateEmail(email) {
    return this.VALIDATION.EMAIL_REGEX.test(email);
  },

  validatePassword(password) {
    return password.length >= this.CONFIG.MIN_PASSWORD_LENGTH;
  },

  showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.error-message');

    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
    input.classList.add('error');
    formGroup.classList.add('has-error');
  },

  clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      errorElement.remove();
    }

    input.classList.remove('error');
    formGroup.classList.remove('has-error');
  },

  initFloatingLabels() {
    const inputs = document.querySelectorAll('.form-group input');

    inputs.forEach(input => {
      const label = input.previousElementSibling;

      if (input.value.trim() !== '') {
        label.classList.add('floating');
      }

      input.addEventListener('focus', () => {
        label.classList.add('floating');
      });

      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          label.classList.remove('floating');
        }
      });
    });
  },

  resetFloatingLabels() {
    const labels = document.querySelectorAll('.form-group label');
    labels.forEach(label => label.classList.remove('floating'));
  },

  togglePassword() {
    const elements = this.getElements();
    const input = elements.passwordInput;
    const eyeIcon = elements.eyeIcon;
    const currentType = input.getAttribute('type');

    if (currentType === 'password') {
      input.setAttribute('type', 'text');
      eyeIcon.src = 'assets/images/eye-close-image.png';
    } else {
      input.setAttribute('type', 'password');
      eyeIcon.src = 'assets/images/eye-image.png';
    }
  },

  enhanceTabNavigation(emailInput, passwordInput) {
    emailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        setTimeout(() => {
          if (document.activeElement === passwordInput) {
            const passwordLabel = passwordInput.previousElementSibling;
            if (passwordLabel) {
              passwordLabel.classList.add('floating');
            }
          }
        }, 10);
      }
    });

    passwordInput.addEventListener('focus', function () {
      const label = this.previousElementSibling;
      if (label) {
        label.classList.add('floating');
      }
    });
  },

  extractUserNameFromEmail(email) {
    const userName = email.split('@')[0];
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
  },

  saveUserData(email, rememberMe) {
    const capitalizedName = this.extractUserNameFromEmail(email);
    localStorage.setItem('userName', capitalizedName);

    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userEmail');
    }
  },

  createSpinner() {
    const spinner = document.createElement('span');
    spinner.className = 'window-spinner';
    spinner.setAttribute('aria-hidden', 'true');
    spinner.style.animationDuration = this.CONFIG.SPINNER_ANIMATION_DURATION;
    document.body.appendChild(spinner);
    return spinner;
  },

  showLoadingSpinner() {
    let windowSpinner = document.querySelector('.window-spinner');

    if (!windowSpinner) {
      windowSpinner = this.createSpinner();
    } else {
      windowSpinner.style.display = 'block';
      windowSpinner.style.animationPlayState = 'running';
      windowSpinner.style.animationDuration = this.CONFIG.SPINNER_ANIMATION_DURATION;
    }

    try {
      if (windowSpinner && this.CONFIG.NAVIGATION_DELAY_MS > 100) {
        setTimeout(() => {
          windowSpinner.style.animationPlayState = 'paused';
        }, this.CONFIG.NAVIGATION_DELAY_MS - this.CONFIG.SPINNER_PRE_PAUSE_MS);
      }
    } catch (err) {
      console.warn('window spinner error', err);
    }

    if (this.CONFIG.NAVIGATION_DELAY_MS > this.CONFIG.PAUSE_BEFORE_NAV_MS) {
      setTimeout(() => {
        if (windowSpinner) {
          windowSpinner.style.animationPlayState = 'paused';
        }
      }, this.CONFIG.NAVIGATION_DELAY_MS - this.CONFIG.PAUSE_BEFORE_NAV_MS);
    }
  },

  handleFormSubmit(e, elements) {
    e.preventDefault();

    let isValid = true;

    this.clearError(elements.emailInput);
    this.clearError(elements.passwordInput);

    if (!this.validateEmail(elements.emailInput.value.trim())) {
      this.showError(elements.emailInput, this.getTranslation('login.error.invalid_email'));
      isValid = false;
    }

    if (!this.validatePassword(elements.passwordInput.value)) {
      this.showError(elements.passwordInput, this.getTranslation('login.error.invalid_password'));
      isValid = false;
    }

    if (isValid) {
      this.processLogin(elements);
    }
  },

  processLogin(elements) {
    const submitButton = elements.loginForm.querySelector('.btn-login');
    const originalText = submitButton.textContent;

    submitButton.textContent = this.getTranslation('login.loading_text');
    submitButton.disabled = true;

    setTimeout(() => {
      const email = elements.emailInput.value.trim();
      const rememberMe = elements.rememberCheckbox.checked;

      this.saveUserData(email, rememberMe);

      elements.loginForm.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;

      this.resetFloatingLabels();
      this.showLoadingSpinner();

      setTimeout(() => {
        window.location.href = 'pages/dashboard.html';
      }, this.CONFIG.NAVIGATION_DELAY_MS);

    }, this.CONFIG.LOGIN_DELAY_MS);
  },

  setupLinkHandlers(elements) {
    if (elements.forgotPasswordLink) {
      elements.forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert(this.getTranslation('login.error.page_not_developed'));
      });
    }

    if (elements.signupLink) {
      elements.signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert(this.getTranslation('login.error.page_not_developed'));
      });
    }

    elements.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(this.getTranslation('login.error.page_not_developed'));
      });
    });
  },

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const elements = this.getElements();

      if (!elements.loginForm) {
        return;
      }

      this.initFloatingLabels();

      if (elements.togglePasswordBtn) {
        elements.togglePasswordBtn.addEventListener('click', () => this.togglePassword());
      }

      if (elements.emailInput && elements.passwordInput) {
        this.enhanceTabNavigation(elements.emailInput, elements.passwordInput);
      }

      elements.loginForm.addEventListener('submit', (e) => {
        this.handleFormSubmit(e, elements);
      });

      if (elements.rememberCheckbox) {
        elements.rememberCheckbox.checked = false;
      }

      this.setupLinkHandlers(elements);
    });
  }
};


const PageNavigation = {
  DELAY_MS: 900,

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
    const slowDuration = '1.0s';

    if (!windowSpinner) {
      windowSpinner = document.createElement('span');
      windowSpinner.className = 'window-spinner';
      windowSpinner.setAttribute('aria-hidden', 'true');
      windowSpinner.style.animationDuration = slowDuration;
      document.body.appendChild(windowSpinner);
    } else {
      windowSpinner.style.display = 'block';
      windowSpinner.style.animationPlayState = 'running';
      windowSpinner.style.animationDuration = slowDuration;
    }

    try {
      if (windowSpinner && this.DELAY_MS > 100) {
        setTimeout(() => {
          windowSpinner.style.animationPlayState = 'paused';
        }, this.DELAY_MS - 80);
      }
    } catch (err) {
      console.warn('window spinner error', err);
    }

    const PAUSE_BEFORE_NAV = 80;
    if (this.DELAY_MS > PAUSE_BEFORE_NAV) {
      setTimeout(() => {
        if (windowSpinner) {
          windowSpinner.style.animationPlayState = 'paused';
        }
      }, this.DELAY_MS - PAUSE_BEFORE_NAV);
    }
  },

  handleNavigationClick(e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    if (!this.isInternalLink(anchor)) return;

    if (anchor.dataset.navigating === '1') {
      e.preventDefault();
      return;
    }

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




const Games = {
  handleTabClick(e) {
    const btn = e.target.closest('.tab-button');
    if (!btn) return;

    const tabs = btn.closest('.tabs');
    if (!tabs) return;

    tabs.querySelectorAll('.tab-button').forEach((b) => {
      b.classList.remove('active');
    });

    btn.classList.add('active');

    const target = btn.getAttribute('data-target');
    if (!target) return;

    const wrap = document.querySelector('.games-wrap');
    if (!wrap) return;

    wrap.querySelectorAll('.game-grid').forEach((grid) => {
      grid.classList.toggle('hidden', grid.getAttribute('data-category') !== target);
    });
  },

  handlePlayClick(e) {
    const playBtn = e.target.closest('.play-button');
    if (!playBtn) return;

    e.preventDefault();
    e.stopPropagation();

    alert('Esta página ainda não existe');
  },

  init() {
    document.addEventListener('click', (e) => this.handleTabClick(e), { capture: true });
    document.addEventListener('click', (e) => this.handlePlayClick(e), { capture: true });
  }
};


const Accessibility = {
  initializeVLibras() {
    if (document.querySelector('[vw]')) {
      return;
    }

    const container = document.createElement('div');
    container.setAttribute('vw', '');
    container.classList.add('enabled');

    const accessButton = document.createElement('div');
    accessButton.setAttribute('vw-access-button', '');
    accessButton.classList.add('active');
    container.appendChild(accessButton);

    const pluginWrapper = document.createElement('div');
    pluginWrapper.setAttribute('vw-plugin-wrapper', '');
    const topWrapper = document.createElement('div');
    topWrapper.classList.add('vw-plugin-top-wrapper');
    pluginWrapper.appendChild(topWrapper);
    container.appendChild(pluginWrapper);

    document.body.appendChild(container);

    if (!window.VLibras && !document.querySelector('script[src*="vlibras-plugin.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
      };
      document.body.appendChild(script);
    }
  },

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeVLibras();
    });
  }
};


Navigation.init();
Login.init();
PageNavigation.init();
Games.init();
Accessibility.init();
