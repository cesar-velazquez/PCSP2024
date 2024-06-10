let btnTamFuente = document.getElementById("font_size");
const ActualContainer = document.getElementById('content_tabs');
let AlturaPrimerNivel = localStorage.getItem("PrimerNivel");
let AlturaSegundoNivel = localStorage.getItem("SegundoNivel");

if (AlturaPrimerNivel === "activado") {
    // ActualContainer.style.backgroundColor = "red";
    ActualContainer.style.height = "710px";
    ActualContainer.style.transitionDuration = "1s";
}

if (AlturaSegundoNivel === "activado") {
    // ActualContainer.style.backgroundColor = "darkgreen";
    ActualContainer.style.height = "917px";
    ActualContainer.style.transitionDuration = "1s";
}


btnTamFuente.addEventListener('click', function () {
    if (cont == 2) {
        // console.log("Contenedor" + cont);
        // ActualContainer.style.backgroundColor = "red";
        ActualContainer.style.height = "710px";
        ActualContainer.style.transitionDuration = "1s";
        localStorage.setItem("PrimerNivel", "activado");
    } else if (cont == 3) {
        // ActualContainer.style.backgroundColor = "darkgreen";
        ActualContainer.style.height = "917px";
        ActualContainer.style.transitionDuration = "1s";
        localStorage.setItem("PrimerNivel", "desactivado");
        localStorage.setItem("SegundoNivel", "activado");
        // console.log("Contenedor" + cont);
    } else if (cont == 1) {
        // ActualContainer.style.backgroundColor = "#FAEBDD";
        ActualContainer.style.height = "600px";
        ActualContainer.style.transitionDuration = "1s";
        localStorage.setItem("SegundoNivel", "desactivado");
        // console.log("Contenedor" + cont);
    }
});

