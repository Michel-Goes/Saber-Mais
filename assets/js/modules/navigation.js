/**
 * Navigation module - Handles page navigation and user interface elements
 */
const Navigation = {
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setActiveNavLink();
            this.updateUserName();
            this.setupLogout();
        });
    },

    // Highlights the current page link in navigation
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
            userElement.innerHTML = `<span style="font-size: 16px;">Olá, ${userName}</span><img src="${imagePath}" alt="User">`;
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

Navigation.init();
