document.addEventListener('DOMContentLoaded', () => {

    // 🔥 Met en surbrillance la page actuelle dans le menu
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((a) => {
        if (a.getAttribute('href') === path) {
            a.classList.add('active');
        }
    });

    // ✨ Animation au scroll (fade + montée)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12
    });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // 📅 Année automatique dans le footer
    document.querySelectorAll('[data-year]').forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

});