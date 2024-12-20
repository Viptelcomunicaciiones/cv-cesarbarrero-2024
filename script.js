document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Calcular el offset correcto considerando el header fijo y el nav container
        const navContainer = document.querySelector('header');
        const navHeight = navContainer ? navContainer.offsetHeight : 0;
        
        window.scrollTo({
            top: targetSection.offsetTop - navHeight, // Usa altura total del nav container
            behavior: 'smooth'
        });
    });
});