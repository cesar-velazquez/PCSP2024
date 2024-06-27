let btnTamFuente = document.getElementById("font_size");
const ActualContainerSw2 = document.getElementById('altura_swipper');
let AlturaPrimerNivelAct2 = localStorage.getItem("PrimerNivelSwip");
let AlturaSegundoNivelAct2 = localStorage.getItem("SegundoNivelSwip");
let contenidoAlturasw1 = document.getElementById("contenido_alturaSw1");
let contenidoAlturasw2 = document.getElementById("contenido_alturaSw2");
let contenidoAlturasw3 = document.getElementById("contenido_alturaSw3");

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
            // contenidoAlturasw1.style.backgroundColor = "beige";
            // contenidoAlturasw2.style.backgroundColor = "beige";
            // contenidoAlturasw3.style.backgroundColor = "beige";
            contenidoAlturasw1.style.height = "495px";
            contenidoAlturasw2.style.height = "495px";
            contenidoAlturasw3.style.height = "495px";
            contenidoAlturasw1.style.transitionDuration = "1s";
            ActualContainerSw2.style.height = "570px";
            ActualContainerSw2.style.transitionDuration = "1s";
            // ActualContainerSw2.style.backgroundColor = "green";
            localStorage.setItem("AlturaPrimerNivelAct2", "activado");
        } else if (contadorActualSw2 == 3) {
            ActualContainerSw2.style.height = "649px";
            // contenidoAlturasw1.style.backgroundColor = "gray";
            // contenidoAlturasw2.style.backgroundColor = "gray";
            // contenidoAlturasw3.style.backgroundColor = "gray";
            contenidoAlturasw1.style.height = "565px";
            contenidoAlturasw2.style.height = "565px";
            contenidoAlturasw3.style.height = "565px";
            contenidoAlturasw1.style.transitionDuration = "1s";
            ActualContainerSw2.style.transitionDuration = "1s";
            // ActualContainerSw2.style.backgroundColor = "orange";
            localStorage.setItem("AlturaPrimerNivelAct2", "desactivado");
            localStorage.setItem("AlturaSegundoNivelAct2", "activado");
        } else if (contadorActualSw2 == 1) {
            console.log("contador Actual 1");
            ActualContainerSw2.style.height = "470px";
            // contenidoAlturasw1.style.backgroundColor = "yellow";
            // contenidoAlturasw2.style.backgroundColor = "yellow";
            // contenidoAlturasw3.style.backgroundColor = "yellow";
            contenidoAlturasw1.style.height = "395px";
            contenidoAlturasw2.style.height = "395px";
            contenidoAlturasw3.style.height = "395px";
            contenidoAlturasw1.style.transitionDuration = "1s";
            ActualContainerSw2.style.transitionDuration = "1s";
            // ActualContainerSw2.style.backgroundColor = "pink";
            localStorage.setItem("AlturaSegundoNivelAct2", "desactivado");
        }
    } else if (window.matchMedia("(min-width: 991px)").matches) {
        // console.log("es menor, menor 1200 y mayor 991px");
        if (contadorActualSw2 == 2) {
            // ActualContainerSw2.style.backgroundColor = "red";
            ActualContainerSw2.style.height = "630px";
            // contenidoAlturasw1.style.backgroundColor = "orange";
            // contenidoAlturasw2.style.backgroundColor = "orange";
            // contenidoAlturasw3.style.backgroundColor = "orange";
            contenidoAlturasw1.style.height = "550px";
            contenidoAlturasw2.style.height = "550px";
            contenidoAlturasw3.style.height = "550px";
        } else if (contadorActualSw2 == 3) {
            // ActualContainerSw2.style.backgroundColor = "pink";
            ActualContainerSw2.style.height = "850px";
            // contenidoAlturasw2.style.backgroundColor = "brown";
            // ActualContainerSw2.style.backgroundColor = "brown";
            // contenidoAlturasw3.style.backgroundColor = "brown";
            contenidoAlturasw1.style.height = "730px";
            contenidoAlturasw2.style.height = "730px";
            contenidoAlturasw3.style.height = "730px";
        } else if (contadorActualSw2 == 1) {
            // ActualContainerSw2.style.backgroundColor = "brown";
            ActualContainerSw2.style.height = "500px";
            // contenidoAlturasw1.style.backgroundColor = "yellow";
            // contenidoAlturasw2.style.backgroundColor = "yellow";
            // contenidoAlturasw3.style.backgroundColor = "yellow";
            contenidoAlturasw1.style.height = "425px";
            contenidoAlturasw2.style.height = "425px";
            contenidoAlturasw3.style.height = "425px";
        }
    } else {
        // console.log("es menor a 991");
        if (contadorActualSw2 == 2) {
            // ActualContainerSw2.style.backgroundColor = "orange";
            ActualContainerSw2.style.height = "840px";
            // contenidoAlturasw1.style.backgroundColor = "brown";
            // contenidoAlturasw2.style.backgroundColor = "brown";
            // contenidoAlturasw3.style.backgroundColor = "brown";
            contenidoAlturasw1.style.height = "740px";
            contenidoAlturasw2.style.height = "740px";
            contenidoAlturasw3.style.height = "740px";
        } else if (contadorActualSw2 == 3) {
            // ActualContainerSw2.style.backgroundColor = "gray";
            ActualContainerSw2.style.height = "1070px";
            // contenidoAlturasw1.style.backgroundColor = "brown";
            // contenidoAlturasw2.style.backgroundColor = "brown";
            // contenidoAlturasw3.style.backgroundColor = "brown";
            contenidoAlturasw1.style.height = "930px";
            contenidoAlturasw2.style.height = "930px";
            contenidoAlturasw3.style.height = "930px";
        } else if (contadorActualSw2 == 1) {
            // ActualContainerSw2.style.backgroundColor = "cyan";
            ActualContainerSw2.style.height = "620px";
            // contenidoAlturasw1.style.backgroundColor = "yellow";
            // contenidoAlturasw2.style.backgroundColor = "yellow";
            // contenidoAlturasw3.style.backgroundColor = "yellow";
            contenidoAlturasw1.style.height = "550px";
            contenidoAlturasw2.style.height = "550px";
            contenidoAlturasw3.style.height = "550px";

        }
    }
}

ajustarAlturaContenedorAct2();

window.addEventListener('resize', ajustarAlturaContenedorAct2);

btnTamFuente.addEventListener('click', function () {
    ajustarAlturaContenedorAct2();
});