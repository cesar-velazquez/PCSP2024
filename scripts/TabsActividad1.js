let btnTamFuente = document.getElementById("font_size");
const ActualContainer = document.getElementById('tam_content');
let AlturaPrimerNivelAct1 = localStorage.getItem("PrimerNivel");
let AlturaSegundoNivelAct1 = localStorage.getItem("SegundoNivel");

if (AlturaPrimerNivelAct1 === "activado") {
    ActualContainer.style.height = "340px";
    ActualContainer.style.transitionDuration = "1s";
}

if (AlturaSegundoNivelAct1 === "activado") {
    ActualContainer.style.height = "450px";
    ActualContainer.style.transitionDuration = "1s";
}

function ajustarAlturaContenedorAct1() {
    const contadorActual = localStorage.getItem("contador");
    console.log("Actual Act1: " + contadorActual);

    if (window.matchMedia("(min-width: 1200px)").matches) {
        // console.log("mayor a 1200");
        if (contadorActual == 2) {
            ActualContainer.style.height = "423px";
            ActualContainer.style.transitionDuration = "1s";
            localStorage.setItem("AlturaPrimerNivelAct1", "activado");
        } else if (contadorActual == 3) {
            ActualContainer.style.height = "535px";
            ActualContainer.style.transitionDuration = "1s";

            localStorage.setItem("AlturaPrimerNivelAct1", "desactivado");
            localStorage.setItem("AlturaSegundoNivelAct1", "activado");
        } else if (contadorActual == 1) {
            ActualContainer.style.height = "330px";
            ActualContainer.style.transitionDuration = "1s";
            localStorage.setItem("AlturaSegundoNivelAct1", "desactivado");
        }
    } else if (window.matchMedia("(min-width: 991px)").matches) {
        // console.log("es menor, menor 1200 y mayor 991px");
        if (contadorActual == 2) {
            // ActualContainer.style.backgroundColor = "red";
            ActualContainer.style.height = "470px";
        } else if (contadorActual == 3) {
            // ActualContainer.style.backgroundColor = "pink";
            ActualContainer.style.height = "638px";
        } else if (contadorActual == 1) {
            // ActualContainer.style.backgroundColor = "green";
            ActualContainer.style.height = "365px";
        }
    } else {
        // console.log("es menor");
        if (contadorActual == 2) {
            // ActualContainer.style.backgroundColor = "orange";
            ActualContainer.style.height = "690px";
        } else if (contadorActual == 3) {
            // ActualContainer.style.backgroundColor = "gray";
            ActualContainer.style.height = "900px";
        } else if (contadorActual == 1) {
            // ActualContainer.style.backgroundColor = "cyan";
            ActualContainer.style.height = "475px";
        }
    }
}

ajustarAlturaContenedorAct1();

window.addEventListener('resize', ajustarAlturaContenedorAct1);

btnTamFuente.addEventListener('click', function () {
    ajustarAlturaContenedorAct1();
});