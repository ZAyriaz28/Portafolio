// Espera a que todo el contenido del HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Opciones para el Intersection Observer
    // threshold: 0.1 significa que el callback se ejecutará cuando el 10% del elemento sea visible
    const options = {
        threshold: 0.1 
    };

    // Crear el observador
    const observer = new IntersectionObserver((entries, observer) => {
        // entries es un array de todos los elementos que estamos observando
        entries.forEach(entry => {
            // Si el elemento está en la pantalla (intersectando)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación
                entry.target.classList.add('visible');
                // Deja de observar este elemento para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Seleccionar todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.habilidad-card, .experiencia-item, .proyecto-card, .certificacion-card');
    
    // Decirle al observador que empiece a observar cada uno de estos elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ... (El código del Intersection Observer que ya tenías) ...

// Lógica para el menú de hamburguesa
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
    });
});
