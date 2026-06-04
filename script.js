document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const closeBtn = document.getElementById('close-menu');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    // Función para abrir el menú
    const openMenu = () => {
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita hacer scroll en el fondo
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura el scroll
    };

    // Eventos
    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Cerrar el menú al hacer clic en un enlace (para navegar)
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
