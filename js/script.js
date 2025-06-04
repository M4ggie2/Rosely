document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para dispositivos móviles
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animación de las barras
            const bars = document.querySelectorAll('.bar');
            bars[0].classList.toggle('rotate-down');
            bars[1].classList.toggle('fade');
            bars[2].classList.toggle('rotate-up');
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                // Restablecer la animación de las barras
                const bars = document.querySelectorAll('.bar');
                bars[0].classList.remove('rotate-down');
                bars[1].classList.remove('fade');
                bars[2].classList.remove('rotate-up');
            }
        });
    });
    
    // Tabs categorías de servicios
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Eliminar clase activa de todos los tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Añadir clase activa al tab clickeado
            this.classList.add('active');
            
            // Aquí se puede añadir lógica para filtrar servicios
        });
    });
    
    // Animación de aparición al hacer scroll
    const animatedElements = document.querySelectorAll('.productos-grid, .servicios-flex, .diseno-content, .valores-container, .contacto-content, .section-title, .section-subtitle');
    
    // Función para verificar si un elemento está visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Función para verificar la visibilidad de los elementos
    function checkVisibility() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }
    
    // Verificar la visibilidad al cargar la página
    checkVisibility();
    
    // Verificar la visibilidad al hacer scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Animación de los iconos
    const icons = document.querySelectorAll('.icon i, .contacto-item i, .social-media a i');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 500);
        });
    });

    // Crear y posicionar elementos decorativos aleatorios
    function createRandomDecorations() {
        // Flores
        const flowerDecorations = document.querySelectorAll('.flower-decoration');
        flowerDecorations.forEach(flower => {
            if (!flower.dataset.positioned) {
                const section = flower.parentElement;
                const sectionHeight = section.offsetHeight;
                const sectionWidth = section.offsetWidth;
                
                const randomTop = Math.random() * (sectionHeight - 100);
                const randomLeft = Math.random() * (sectionWidth - 100);
                
                flower.style.top = `${randomTop}px`;
                flower.style.left = `${randomLeft}px`;
                flower.dataset.positioned = 'true';
            }
        });
        
        // Mariposas
        const butterflyDecorations = document.querySelectorAll('.butterfly-decoration');
        butterflyDecorations.forEach(butterfly => {
            if (!butterfly.dataset.positioned) {
                const section = butterfly.parentElement;
                const sectionHeight = section.offsetHeight;
                const sectionWidth = section.offsetWidth;
                
                const randomTop = Math.random() * (sectionHeight - 60);
                const randomLeft = Math.random() * (sectionWidth - 60);
                
                butterfly.style.top = `${randomTop}px`;
                butterfly.style.left = `${randomLeft}px`;
                butterfly.dataset.positioned = 'true';
                
                // Animación de vuelo
                setInterval(() => {
                    const newTop = parseFloat(butterfly.style.top) + (Math.random() * 10 - 5);
                    const newLeft = parseFloat(butterfly.style.left) + (Math.random() * 10 - 5);
                    
                    butterfly.style.top = `${Math.max(0, Math.min(sectionHeight - 60, newTop))}px`;
                    butterfly.style.left = `${Math.max(0, Math.min(sectionWidth - 60, newLeft))}px`;
                }, 2000);
            }
        });
        
        // Brillos
        const sparkleDecorations = document.querySelectorAll('.sparkle-decoration');
        sparkleDecorations.forEach(sparkle => {
            if (!sparkle.dataset.positioned) {
                const section = sparkle.parentElement;
                const sectionHeight = section.offsetHeight;
                const sectionWidth = section.offsetWidth;
                
                const randomTop = Math.random() * (sectionHeight - 30);
                const randomLeft = Math.random() * (sectionWidth - 30);
                
                sparkle.style.top = `${randomTop}px`;
                sparkle.style.left = `${randomLeft}px`;
                sparkle.dataset.positioned = 'true';
                
                // Animación de parpadeo
                setInterval(() => {
                    sparkle.style.opacity = (Math.random() > 0.5) ? '0.8' : '0.3';
                }, 1000);
            }
        });
    }
    
    // Posicionar elementos decorativos cuando se carga la página
    createRandomDecorations();
    
    // Agregar efecto de brillo aleatorio a elementos
    function createGlitter() {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        
        // Posición aleatoria
        const randomSection = Math.floor(Math.random() * 5);
        const sections = document.querySelectorAll('section');
        
        if (sections[randomSection]) {
            const section = sections[randomSection];
            const sectionRect = section.getBoundingClientRect();
            
            // Asegurarse de que el brillo esté dentro de la sección visible
            const top = Math.random() * (sectionRect.height - 20);
            const left = Math.random() * (sectionRect.width - 20);
            
            glitter.style.top = `${top}px`;
            glitter.style.left = `${left}px`;
            
            // Tamaño aleatorio
            const size = Math.random() * 10 + 5;
            glitter.style.width = `${size}px`;
            glitter.style.height = `${size}px`;
            
            // Color aleatorio (entre primario y secundario)
            const colors = ['#EA527D', '#F9AE00', '#FFD6E7'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            glitter.style.backgroundColor = randomColor;
            
            // Añadir a la sección
            section.appendChild(glitter);
            
            // Eliminar después de la animación
            setTimeout(() => {
                if (glitter.parentNode) {
                    glitter.parentNode.removeChild(glitter);
                }
            }, 1500);
        }
    }
    
    // Crear brillos cada cierto tiempo
    setInterval(createGlitter, 300);
    
    // Validación del formulario
    const contactForm = document.querySelector('.contacto-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Siempre prevenir el envío normal
            
            const formElements = contactForm.elements;
            let isValid = true;
            
            // Validar todos los campos
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].required && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else if (formElements[i].type === 'email' && formElements[i].value) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(formElements[i].value)) {
                        isValid = false;
                        formElements[i].classList.add('error');
                    }
                }
            }
            
            // Si hay errores, no enviar
            if (!isValid) {
                return;
            }
            
            // Si el formulario es válido, enviar con AJAX
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Cambiar texto del botón mientras se envía
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Enviar a Formspree con AJAX
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Éxito: mostrar mensaje y limpiar formulario
                    showSuccessMessage();
                    contactForm.reset();
                } else {
                    // Error del servidor
                    showErrorMessage('Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.');
                }
            })
            .catch(error => {
                // Error de red
                showErrorMessage('Error de conexión. Por favor verifica tu internet e intenta de nuevo.');
            })
            .finally(() => {
                // Restaurar botón
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
        
        // Funciones para mostrar mensajes
        function showSuccessMessage() {
            // Remover mensajes anteriores
            const existingMessages = contactForm.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach(msg => msg.remove());
            
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
            
            contactForm.appendChild(successMessage);
            
            // Remover mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
        
        function showErrorMessage(message) {
            // Remover mensajes anteriores
            const existingMessages = contactForm.querySelectorAll('.success-message, .error-message');
            existingMessages.forEach(msg => msg.remove());
            
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = message;
            
            contactForm.appendChild(errorMessage);
            
            // Remover mensaje después de 5 segundos
            setTimeout(() => {
                errorMessage.remove();
            }, 5000);
        }
        
        // Quitar clase de error al escribir
        const formInputs = contactForm.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
});

// Agregar clases CSS adicionales para las animaciones
const style = document.createElement('style');
style.textContent = `
    /* Animaciones para el menú hamburguesa */
    .bar.rotate-down {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .bar.fade {
        opacity: 0;
    }
    
    .bar.rotate-up {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    /* Animación de aparición */
    .productos-grid, .servicios-flex, .diseno-content, .valores-container, .contacto-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section-title, .section-subtitle {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .productos-grid.animate, .servicios-flex.animate, .diseno-content.animate, 
    .valores-container.animate, .contacto-content.animate, 
    .section-title.animate, .section-subtitle.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Animación de pulso para iconos */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 0.5s ease;
    }
    
    /* Efecto de brillo */
    .glitter {
        position: absolute;
        border-radius: 50%;
        opacity: 0;
        animation: glitter 1.5s ease-in-out;
        z-index: 10;
        pointer-events: none;
    }
    
    @keyframes glitter {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    /* Animación de mariposa */
    .butterfly-decoration {
        transition: top 2s ease-in-out, left 2s ease-in-out;
    }
    
    /* Animación de parpadeo para brillos */
    .sparkle-decoration {
        transition: opacity 0.5s ease;
    }
    
    /* Animación hover para cards */
    .producto-card, .servicio-card, .valor-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .producto-card:hover, .servicio-card:hover, .valor-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(234, 82, 125, 0.15);
    }
    
    /* Estilo para mensajes de error y éxito */
    .error {
        border-color: #ff3860 !important;
    }
    
    .success-message {
        padding: 15px;
        background-color: rgba(46, 204, 113, 0.2);
        color: #2ecc71;
        border-radius: var(--border-radius);
        text-align: center;
        margin-top: 20px;
        font-weight: 500;
    }
    
    .error-message {
        padding: 15px;
        background-color: rgba(255, 56, 96, 0.2);
        color: #ff3860;
        border-radius: var(--border-radius);
        text-align: center;
        margin-top: 20px;
        font-weight: 500;
    }
`;
document.head.appendChild(style); 