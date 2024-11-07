document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animate-fade-in', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('#menuBtn');
    const mobileNav = document.querySelector('#mobileNav');
    const closeBtn = document.querySelector('#closeMenuBtn');
    const menuOverLay = document.querySelector('#menuOverlay');

    function openMenu() {
        mobileNav.classList.remove('-translate-y-full');
        menuOverLay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileNav.classList.add('-translate-y-full');
        menuOverLay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    menuOverLay.addEventListener('click', closeMenu);

    // Close menu on link click
    const menuLinks = mobileNav.getElementsByTagName('a');
    Array.from(menuLinks).forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Close menu on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) closeMenu();
        }, 250);
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
