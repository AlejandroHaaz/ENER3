document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remueve "active" de todos los enlaces
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Agrega "active" solo al enlace clicado
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function changeActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });

        // Si estás en la parte superior, asegúrate de que "Inicio" esté activo
        if (window.scrollY < 10) {  // Se cambió === 0 por < 10 para mayor precisión
            navLinks.forEach((link) => link.classList.remove("active"));
            const inicioLink = document.querySelector('.navbar-nav .nav-link[href="#Inicio"]');
            if (inicioLink) {
                inicioLink.classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", changeActiveLink);
    changeActiveLink(); // Llamar una vez al cargar la página
});



document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarBrand = document.querySelector(".navbar-brand");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbarBrand.style.fontSize = "2.8rem"; // Aumenta el tamaño al hacer scroll
        } else {
            navbar.classList.remove("scrolled");
            navbarBrand.style.fontSize = "2.8rem"; // Tamaño más pequeño al inicio
        }
    });
});

