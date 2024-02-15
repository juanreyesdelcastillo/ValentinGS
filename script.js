document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Función para mostrar elementos con animación
    function revealElement(element) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    }

    // Función para manejar el desplazamiento de la página
    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                revealElement(section);
            }
        });
    }

    // Agregar evento de clic para los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            revealElement(targetSection);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Agregar evento de desplazamiento para revelar secciones cuando se desplaza hacia abajo
    window.addEventListener("scroll", handleScroll);
});
