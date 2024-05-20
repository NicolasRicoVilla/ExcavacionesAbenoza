"use strict";
// src/script.ts
document.addEventListener('DOMContentLoaded', function () {
    //Desplazamiento para los enlaces de navegacion
    document.querySelectorAll('nav ul li a').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            var targetId = e.currentTarget.getAttribute('href');
            if (targetId) {
                (_a = document.querySelector(targetId)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Animacion de aparacion de las secciones
    var sections = document.querySelectorAll('section');
    var options = {
        threshold: 0.1
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(function (section) {
        observer.observe(section);
    });
});
