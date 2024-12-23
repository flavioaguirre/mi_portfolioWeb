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
    distance: '70px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'right',
    reset: true
});

ScrollReveal().reveal('.reveal-left', {
    distance: '70px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'left',
    reset: true
});

ScrollReveal().reveal('.reveal-bottom', {
    distance: '15px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    reset: true
});

// Seccion proyectos
// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTechnologies = document.getElementById('modal-technologies');
const closeModalButton = document.querySelector('.close-btn');
const githubLink = document.getElementById('github-link');
const visitLink = document.getElementById('visit-link');

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        modalTitle.textContent = project.querySelector('h3').textContent;
        modalDescription.textContent = project.getAttribute('data-description');

        // Generate bubbles for technologies
        modalTechnologies.innerHTML = '';
        const technologies = project.getAttribute('data-technologies').split(', ');
        technologies.forEach(tech => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.innerHTML = `<i class="fas fa-code"></i> ${tech}`;
            modalTechnologies.appendChild(bubble);
        });

        // Set GitHub link
        githubLink.href = project.getAttribute('data-github');

        modal.style.display = 'block';
        overlay.style.display = 'block';

        // Set Visit link
        const visitLinkData = project.getAttribute('data-link');
        if (visitLinkData) {
            visitLink.style.display = 'inline-block'; // Mostrar botón
            visitLink.href = visitLinkData;
        } else {
            visitLink.style.display = 'none'; // Ocultar si no existe el enlace
        }

        overlay.style.display = 'block';

        visitLink.href = project.getAttribute('data-link');
    });
});

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closeModal);
closeModalButton.addEventListener('click', closeModal);

// filtro botones 'Proyectos'
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.project').forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Descarga CV
function handleButtonClick() {
    const label = document.querySelector('.label');
    const checkbox = document.getElementById('downloadCheckbox');
    const openText = document.getElementById('openText');

    // Verificar el estado actual
    if (label.getAttribute('data-state') === 'download') {
        // Iniciar descarga
        const link = document.createElement('a');
        link.href = '../static/assets/img/cv/flavio+aguirre_cv.pdf';
        link.download = 'flavio+aguirre_cv.pdf';
        link.click();

        // Sincronizar con la animación (simulando un tiempo de descarga)
        setTimeout(() => {
            // Cambiar estado a "open"
            label.setAttribute('data-state', 'open');
            openText.style.display = 'block';
            checkbox.checked = false; // Reinicia el checkbox visualmente
        }, 15000); // Duración de la animación (3.5s)
    } else {
        // Si ya está en estado "open", no hacer nada más
        checkbox.checked = false; // Reinicia el checkbox visualmente
    }
}

// Modificar el tamaño del textarea en sección de contacto
const input_mensaje = document.getElementById("id_mensaje");
input_mensaje.setAttribute("rows", "3");

// Alertas
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))