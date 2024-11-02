document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animate-fade-in', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
