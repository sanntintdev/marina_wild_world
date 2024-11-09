document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation
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

    const menuLinks = mobileNav.getElementsByTagName('a');
    Array.from(menuLinks).forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) closeMenu();
        }, 250);
    });

    // Navigation links ( new page loader)
    function navigateToPage(page) {
        window.location.href = page + '.html';
    }

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const page = this.getAttribute('href').replace('.html', '');
            navigateToPage(page);
        });
    });
});
