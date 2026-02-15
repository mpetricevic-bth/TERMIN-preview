// ===== Scroll Reveal Animations =====
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Screen showcases
    document.querySelectorAll('.screen-showcase').forEach(el => observer.observe(el));

    // Cards with stagger
    document.querySelectorAll('.feature-card, .suggestion-card, .tech-card').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 0.1}s`;
        observer.observe(el);
    });
});

// ===== Ekipe / Prijatelji Tab Switcher =====
function showTab(tab) {
    const ekipe = document.getElementById('tabEkipe');
    const prijatelji = document.getElementById('tabPrijatelji');

    if (tab === 'ekipe') {
        ekipe.classList.remove('d-none');
        prijatelji.classList.add('d-none');
    } else {
        ekipe.classList.add('d-none');
        prijatelji.classList.remove('d-none');
    }
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
