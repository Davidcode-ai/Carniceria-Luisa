document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SMOOTH SCROLL CON COMPENSACIÓN (EL ARREGLO) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el salto brusco
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Altura de tu barra de navegación + un poco de aire (aprox 85px)
                const headerOffset = 85; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 2. ANIMACIONES DE ENTRADA (FADE UP) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.menu-item, .img-wrapper, .text-wrapper, .fade-up, .cut-card');
    
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // --- 3. MENÚ MÓVIL ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Aquí puedes añadir una clase para mostrar el menú en móvil si lo deseas
            // Por ahora, mensaje de demo:
            alert("Menú móvil desplegado");
        });
    }
});