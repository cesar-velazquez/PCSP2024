const btnAumentarFuente = document.getElementById('font_size');
const pleca = document.getElementById('pleca_uv');
const subtitulos = document.querySelectorAll("h2");
const parrafos = document.querySelectorAll("p");

let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafos")) || 1.3;
let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulos")) || 1.5;
let tamFuentePleca = parseFloat(localStorage.getItem("FuenteActualPleca")) || 1;

btnAumentarFuente.addEventListener('click', function () {
    tamFuenteParrafos += 0.25;
    tamFuenteSubtitulos += 0.25;
    tamFuentePleca += 0.25;

    if (tamFuenteParrafos > 1.8) {
        tamFuenteParrafos = 1.3;
    }

    if (tamFuenteSubtitulos > 2) {
        tamFuenteSubtitulos = 1.5;
    }

    if (tamFuentePleca > 1.5) {
        tamFuentePleca = 1;
    }

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
    });

    pleca.style.fontSize = tamFuentePleca + 'rem';

    localStorage.setItem("FuenteActualParrafos", tamFuenteParrafos.toString());
    localStorage.setItem("FuenteActualSubtitulos", tamFuenteSubtitulos.toString());
    localStorage.setItem("FuenteActualPleca", tamFuentePleca.toString());
});

// const btnAumentarFuente = document.getElementById('font_size');
// const pleca = document.getElementById('pleca_uv');
// const subtitulos = document.querySelectorAll("h2");
// const parrafos = document.querySelectorAll("p");

// let tamFuenteParrafos = 1.3; // Tamaño de fuente parrrafos
// let tamFuenteSubtitulos = 1.5; // Tamaño de fuente subtitulos
// let tamFuentePleca = 1; // Tamaño de fuente pleca

// btnAumentarFuente.addEventListener('click', function () {

//     tamFuenteParrafos += 0.25; // Aumentar 0.25 rem en cada click
//     tamFuenteSubtitulos += 0.25;
//     tamFuentePleca += 0.25;

//     let fuentePAlmacenada = localStorage.getItem("FuenteActual");
//     let fuenteSubAlmacenada = localStorage.getItem("FuenteActualSub");
//     let fuentePlecaAlmacenada = localStorage.getItem("FuenteActualPleca");
//     if (fuentePAlmacenada === "activado"
//         && fuenteSubAlmacenada === "activado"
//         && fuentePlecaAlmacenada === "activado") {
//         tamFuenteParrafos = 1.3;
//         fuenteSubAlmacenada = 1.5;
//         fuentePlecaAlmacenada = 1;
//     }

//     if (tamFuenteParrafos > 1.8
//         && tamFuenteSubtitulos > 2
//         && tamFuentePleca > 1.5
//     ) {
//         tamFuenteParrafos = 1.3;
//         localStorage.setItem("FuenteActual", "activado");
//         tamFuenteSubtitulos = 1.5;
//         localStorage.setItem("FuenteActualSub", "activado");
//         tamFuentePleca = 1;
//         localStorage.setItem("FuenteActualPleca", "activado")
//     }

//     // if (tamFuenteParrafos > 1.8) {
//     //     tamFuenteParrafos = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
//     // }

//     if (tamFuenteSubtitulos > 2) {
//         tamFuenteSubtitulos = 1.5; // Restablecer a 1.5 rem si se supera 2 rem
//         localStorage.setItem("FuenteActualSub", "activado");
//     }

//     if (tamFuentePleca > 1.5) {
//         tamFuentePleca = 1; // Restablecer a 1.5 rem si se supera 2 rem
//         localStorage.setItem("FuenteActualPleca", "activado");
//     }

//     parrafos.forEach(parrafo => {
//         parrafo.style.fontSize = tamFuenteParrafos + 'rem';
//         parrafo.style.transitionDuration = "1s";
//         localStorage.setItem("FuenteActual", "activado");
//     });

//     subtitulos.forEach(subtitulo => {
//         subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
//         subtitulo.style.transitionDuration = "1s";
//         localStorage.setItem("FuenteActualSub", "activado");
//     });

//     pleca.style.fontSize = tamFuentePleca + 'rem';
//     pleca.style.transitionDuration = "1s";
//     localStorage.setItem("FuenteActualPleca", "activado");
// });