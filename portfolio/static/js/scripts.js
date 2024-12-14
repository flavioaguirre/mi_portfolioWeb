// Efecto navegador Responsive
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});


// Inicializar ScrollReveal
ScrollReveal().reveal('.reveal-top', {
    distance: '25px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'top',
    reset: true
});

ScrollReveal().reveal('.reveal-right', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'right',
    reset: true
});

ScrollReveal().reveal('.reveal-left', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'left',
    reset: true
})

ScrollReveal().reveal('.reveal-bottom', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    reset: true
})


// Efecto maquina de escribir infinito "Header"
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const h1 = entry.target;
            if (entry.isIntersecting) {
                h1.classList.remove('hidden');
                h1.classList.add('h1_leyenda');
            } else {
                h1.classList.remove('h1_leyenda');
                h1.classList.add('hidden');
            }
        });
    }, { threshold: 0.5 });

    const h1Leyenda = document.querySelector('.h1_leyenda');
    observer.observe(h1Leyenda);
});


// Filtro de proyectos
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.project').forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});