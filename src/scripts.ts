// src/script.ts

document.addEventListener('DOMContentLoaded', () => {


    //Desplazamiento para los enlaces de navegacion
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (targetId) {
                document.querySelector(targetId)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animacion de aparacion de las secciones
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
