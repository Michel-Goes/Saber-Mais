/**
 * Login module - Handles user authentication and form validation
 */
const Login = {
  // Configuration constants for login behavior
  CONFIG: {
    MIN_PASSWORD_LENGTH: 6,
    LOGIN_DELAY_MS: 2000,
    NAVIGATION_DELAY_MS: 900,
    SPINNER_ANIMATION_DURATION: '1.0s',
    PAUSE_BEFORE_NAV_MS: 80,
    SPINNER_PRE_PAUSE_MS: 80
  },

  // Validation rules and regex patterns
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    NUMBERS_ONLY_REGEX: /^\d+$/
  },

  // Error and status messages
  MESSAGES: {
    INVALID_EMAIL: 'Por favor, insira um e-mail válido',
    INVALID_PASSWORD: `A senha deve ter pelo menos 6 dígitos numéricos`,
    INVALID_PASSWORD_FORMAT: 'A senha deve conter apenas números',
    PAGE_NOT_DEVELOPED: 'Esta página não foi desenvolvida',
    LOADING_TEXT: 'Entrando...'
  },

  // Gets translated message based on current language
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
      'login.error.invalid_password_format': this.MESSAGES.INVALID_PASSWORD_FORMAT,
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
    return password.length >= this.CONFIG.MIN_PASSWORD_LENGTH && 
           this.VALIDATION.NUMBERS_ONLY_REGEX.test(password);
  },

  validatePasswordLength(password) {
    return password.length >= this.CONFIG.MIN_PASSWORD_LENGTH;
  },

  validatePasswordFormat(password) {
    return this.VALIDATION.NUMBERS_ONLY_REGEX.test(password);
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

  enhanceInputBehavior(emailInput, passwordInput) {
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

    passwordInput.addEventListener('input', (e) => {
      const value = e.target.value;
      const numbersOnly = value.replace(/[^0-9]/g, '');
      if (value !== numbersOnly) {
        e.target.value = numbersOnly;
      }
    });

    passwordInput.addEventListener('paste', (e) => {
      e.preventDefault();
      const paste = (e.clipboardData || window.clipboardData).getData('text');
      const numbersOnly = paste.replace(/[^0-9]/g, '');
      e.target.value = numbersOnly;
      
      e.target.dispatchEvent(new Event('input', { bubbles: true }));
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
    spinner.style.cssText = `
      display: block;
      position: fixed;
      top: 16px;
      right: 18px;
      z-index: 99999;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.95);
      border-top-color: rgba(255,255,255,1);
      animation: spin ${this.CONFIG.SPINNER_ANIMATION_DURATION} linear infinite;
      pointer-events: none;
    `;
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

    const password = elements.passwordInput.value;
    
    if (!this.validatePasswordLength(password)) {
      this.showError(elements.passwordInput, this.getTranslation('login.error.invalid_password'));
      isValid = false;
    } else if (!this.validatePasswordFormat(password)) {
      this.showError(elements.passwordInput, this.getTranslation('login.error.invalid_password_format'));
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
        this.enhanceInputBehavior(elements.emailInput, elements.passwordInput);
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

Login.init();
