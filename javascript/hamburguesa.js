document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('hamburguesa');
    const navbar = document.getElementById('navbar');

    toggleButton.addEventListener('click', function() {
    console.log('Botón de hamburguesa clicado.');
    navbar.classList.toggle('show-nav');
    });

});