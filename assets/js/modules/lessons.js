const Lessons = {
    showTab(name) {
        document.querySelectorAll('.tab-panel').forEach((panel) => {
            panel.classList.toggle('hidden', panel.id !== 'tab-' + name);
        });

        document.querySelectorAll('.tab-btn').forEach((btn) => {
            if (btn.dataset.target === name) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const titleEl = document.querySelector('.progress-copy .title-box strong');
        const progressBox = document.querySelector('.progress-box');

        if (titleEl) {
            const selectedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
            
            if (name === 'matematica') {
                titleEl.setAttribute('data-translate', 'lessons.progress.math');
                if (selectedLang === 'en-US') {
                    titleEl.textContent = 'Progress in Mathematics';
                } else if (selectedLang === 'es-ES') {
                    titleEl.textContent = 'Progreso en Matemáticas';
                } else if (selectedLang === 'fr-FR') {
                    titleEl.textContent = 'Progrès en Mathématiques';
                } else if (selectedLang === 'de-DE') {
                    titleEl.textContent = 'Fortschritt in Mathematik';
                } else if (selectedLang === 'it-IT') {
                    titleEl.textContent = 'Progresso in Matematica';
                } else if (selectedLang === 'zh-CN') {
                    titleEl.textContent = '数学进度';
                } else if (selectedLang === 'ja-JP') {
                    titleEl.textContent = '数学の進捗';
                } else if (selectedLang === 'ko-KR') {
                    titleEl.textContent = '수학 진행률';
                } else {
                    titleEl.textContent = 'Progresso em Matemática';
                }
            } else {
                titleEl.setAttribute('data-translate', 'lessons.progress');
                if (selectedLang === 'en-US') {
                    titleEl.textContent = 'Progress in Portuguese';
                } else if (selectedLang === 'es-ES') {
                    titleEl.textContent = 'Progreso en Portugués';
                } else if (selectedLang === 'fr-FR') {
                    titleEl.textContent = 'Progrès en Portugais';
                } else if (selectedLang === 'de-DE') {
                    titleEl.textContent = 'Fortschritt in Portugiesisch';
                } else if (selectedLang === 'it-IT') {
                    titleEl.textContent = 'Progresso in Portoghese';
                } else if (selectedLang === 'zh-CN') {
                    titleEl.textContent = '葡萄牙语进度';
                } else if (selectedLang === 'ja-JP') {
                    titleEl.textContent = 'ポルトガル語の進捗';
                } else if (selectedLang === 'ko-KR') {
                    titleEl.textContent = '포르투갈어 진행률';
                } else {
                    titleEl.textContent = 'Progresso em Português';
                }
            }
        }

        if (progressBox) {
            if (name === 'matematica') {
                progressBox.classList.add('math');
            } else {
                progressBox.classList.remove('math');
            }
        }
    },

    handleTabClick(e) {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;

        e.preventDefault();
        const target = btn.dataset.target;
        if (target) {
            this.showTab(target);
        }
    },

    createVideoModal(src) {
        const overlay = document.createElement('div');
        overlay.className = 'video-modal';

        const inner = document.createElement('div');
        inner.className = 'modal-inner';

        const video = document.createElement('video');
        video.controls = true;
        video.src = src || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
        video.autoplay = true;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        
        const selectedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
        if (selectedLang === 'en-US') {
            closeBtn.textContent = 'Close';
        } else if (selectedLang === 'es-ES') {
            closeBtn.textContent = 'Cerrar';
        } else if (selectedLang === 'fr-FR') {
            closeBtn.textContent = 'Fermer';
        } else if (selectedLang === 'de-DE') {
            closeBtn.textContent = 'Schließen';
        } else if (selectedLang === 'it-IT') {
            closeBtn.textContent = 'Chiudi';
        } else if (selectedLang === 'zh-CN') {
            closeBtn.textContent = '关闭';
        } else if (selectedLang === 'ja-JP') {
            closeBtn.textContent = '閉じる';
        } else if (selectedLang === 'ko-KR') {
            closeBtn.textContent = '닫기';
        } else {
            closeBtn.textContent = 'Fechar';
        }

        closeBtn.addEventListener('click', () => {
            video.pause();
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                video.pause();
                document.body.removeChild(overlay);
            }
        });

        inner.appendChild(video);
        inner.appendChild(closeBtn);
        overlay.appendChild(inner);

        return overlay;
    },

    handlePlayClick(e) {
        const playBtn = e.target.closest('.play-btn');
        if (!playBtn) return;

        e.stopPropagation();
        e.preventDefault();

        const card = playBtn.closest('.video-card');
        let src = null;

        if (card && card.dataset && card.dataset.videoSrc) {
            src = card.dataset.videoSrc;
        }

        const modal = this.createVideoModal(src);
        document.body.appendChild(modal);
    },

    init() {
        document.addEventListener('click', (e) => this.handleTabClick(e));
        document.addEventListener('click', (e) => this.handlePlayClick(e), { capture: true });
    }
};

Lessons.init();
