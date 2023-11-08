

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileMenuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    