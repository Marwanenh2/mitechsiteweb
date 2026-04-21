// Barre écologie : fermeture au clic sur la croix
document.querySelectorAll('.eco-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.eco-bar').style.display = 'none';
    });
});
// Année dynamique
document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Animation reveal au scroll
const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));