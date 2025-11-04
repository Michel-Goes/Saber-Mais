/**
 * Accessibility module - Handles VLibras sign language integration
 */
const Accessibility = {
    // Initializes VLibras accessibility widget for sign language support
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

Accessibility.init();
