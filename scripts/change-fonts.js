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


document.addEventListener("DOMContentLoaded", function () {
    let tamFuenteParrafos = parseFloat(localStorage.getItem("FuenteActualParrafos")) || 1.3;
    let tamFuenteSubtitulos = parseFloat(localStorage.getItem("FuenteActualSubtitulos")) || 1.5;
    let tamFuentePleca = parseFloat(localStorage.getItem("FuenteActualPleca")) || 1;

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
    });

    pleca.style.fontSize = tamFuentePleca + 'rem';
});