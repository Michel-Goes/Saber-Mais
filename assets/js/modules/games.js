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

Games.init();
