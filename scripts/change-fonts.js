
const btnAumentarFuente = document.getElementById('font_size');
const pleca = document.getElementById('pleca_uv');
const subtitulos = document.querySelectorAll("h2");
const parrafos = document.querySelectorAll("p");
const listas = document.querySelectorAll("ul");

let tamFuenteParrafos = 1.3; // Tamaño de fuente parrrafos
let tamFuenteSubtitulos = 1.5; // Tamaño de fuente subtitulos
let tamFuentePleca = 1; // Tamaño de fuente pleca
let tamLista = 1.3; //Tamaño de fuente de listas

btnAumentarFuente.addEventListener('click', function () {

    tamFuenteParrafos += 0.25; // Aumentar 0.25 rem en cada click
    tamFuenteSubtitulos += 0.25;
    tamFuentePleca += 0.25;
    tamLista += 0.25;    

    if (tamFuenteParrafos > 1.8) {
        tamFuenteParrafos = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
    }

    if (tamFuenteSubtitulos > 2) {
        tamFuenteSubtitulos = 1.5; // Restablecer a 1.5 rem si se supera 2 rem
    }

    if (tamFuentePleca > 1.5) {
        tamFuentePleca = 1; // Restablecer a 1.5 rem si se supera 2 rem
    }

    if (tamLista > 1.8) {
        tamLista = 1.3; //Restablecer a 1.3 rem si se supera 1.8rem
    }

    listas.forEach(lista => {
        lista.style.fontSize = tamLista + 'rem';
        lista.style.transitionDuration = "1s";
    })

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
        parrafo.style.transitionDuration = "1s";
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
        subtitulo.style.transitionDuration = "1s";
    });

    pleca.style.fontSize = tamFuentePleca + 'rem';
    pleca.style.transitionDuration = "1s";

});

//const parrafo = document.querySelector('.parrafo');