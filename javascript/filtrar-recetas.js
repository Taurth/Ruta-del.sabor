document.addEventListener("DOMContentLoaded", function() {
    const categoriaSelect = document.getElementById("categoria-select");
    const recetasCartas = document.querySelectorAll(".card");  // Cambiado a ".card" en lugar de ".carta"

    categoriaSelect.addEventListener("change", function() {
    const categoriaSeleccionada = categoriaSelect.value;

    recetasCartas.forEach(function(carta) {
        const categoriaReceta = carta.getAttribute("data-categoria");

        if (categoriaSeleccionada === "todas" || categoriaSeleccionada === categoriaReceta) {
        carta.style.display = "block";
        } else {
        carta.style.display = "none";
        }
    });
});

    // Mostrar todas las recetas al cargar la página
    categoriaSelect.value = "todas";
    recetasCartas.forEach(function(carta) {
    carta.style.display = "block";
    });
});