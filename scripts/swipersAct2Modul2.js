let btnTamFuente = document.getElementById("font_size");
const ActualContainerSw2 = document.getElementById('altura_swipper');
let AlturaPrimerNivelAct2 = localStorage.getItem("PrimerNivelSwip");
let AlturaSegundoNivelAct2 = localStorage.getItem("SegundoNivelSwip");
let contenidoAltura = document.getElementsByClassName("contenido_altura");

if (AlturaPrimerNivelAct2 === "activado") {
    ActualContainerSw2.style.height = "640px";
    ActualContainerSw2.style.transitionDuration = "1s";
}

if (AlturaSegundoNivelAct2 === "activado") {
    ActualContainerSw2.style.height = "750px";
    ActualContainerSw2.style.transitionDuration = "1s";
}

function ajustarAlturaContenedorAct2() {
    let contadorActualSw2 = localStorage.getItem("contador");
    console.log("Actual Act1: " + contadorActualSw2);

    if (window.matchMedia("(min-width: 1200px)").matches) {
        // console.log("mayor a 1200");
        if (contadorActualSw2 == 2) {
            ActualContainerSw2.style.height = "600px";
            ActualContainerSw2.style.transitionDuration = "1s";
            ActualContainerSw2.style.backgroundColor = "green";
            localStorage.setItem("AlturaPrimerNivelAct2", "activado");
        } else if (contadorActualSw2 == 3) {
            ActualContainerSw2.style.height = "660px";
            ActualContainerSw2.style.transitionDuration = "1s";
            ActualContainerSw2.style.backgroundColor = "orange";
            localStorage.setItem("AlturaPrimerNivelAct2", "desactivado");
            localStorage.setItem("AlturaSegundoNivelAct2", "activado");
        } else if (contadorActualSw2 == 1) {
            ActualContainerSw2.style.height = "530px";
            // contenidoAltura.style.backgroundColor = "yellow";
            // contenidoAltura.style.height = "335px";
            ActualContainerSw2.style.transitionDuration = "1s";
            ActualContainerSw2.style.backgroundColor = "pink";
            localStorage.setItem("AlturaSegundoNivelAct2", "desactivado");
        }
    } else if (window.matchMedia("(min-width: 991px)").matches) {
        // console.log("es menor, menor 1200 y mayor 991px");
        if (contadorActualSw2 == 2) {
            ActualContainerSw2.style.backgroundColor = "red";
            ActualContainerSw2.style.height = "470px";
        } else if (contadorActualSw2 == 3) {
            ActualContainerSw2.style.backgroundColor = "pink";
            ActualContainerSw2.style.height = "638px";
        } else if (contadorActualSw2 == 1) {
            ActualContainerSw2.style.backgroundColor = "green";
            ActualContainerSw2.style.height = "365px";
        }
    } else {
        // console.log("es menor");
        if (contadorActualSw2 == 2) {
            ActualContainerSw2.style.backgroundColor = "orange";
            ActualContainerSw2.style.height = "690px";
        } else if (contadorActualSw2 == 3) {
            ActualContainerSw2.style.backgroundColor = "gray";
            ActualContainerSw2.style.height = "900px";
        } else if (contadorActualSw2 == 1) {
            ActualContainerSw2.style.backgroundColor = "cyan";
            ActualContainerSw2.style.height = "475px";
        }
    }
}

ajustarAlturaContenedorAct2();

window.addEventListener('resize', ajustarAlturaContenedorAct2);

btnTamFuente.addEventListener('click', function () {
    ajustarAlturaContenedorAct2();
});