document.addEventListener("DOMContentLoaded", function () {
    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    var getPageNext = function () {
        location.href = './index.html';
    }

    let refreshPage = function () {
        location.reload();
    }

    var getPageNext1 = function () {
        location.href = './informaciongeneral.html';
    }

    var getPageNext2 = function () {
        location.href = './modulo-1.html';
    }

    var getPageNext3 = function () {
        location.href = './actividad.html';
    }

    var getPageNext4 = function () {
        location.href = './modulo-2.html';
    }
    var getPageNext5 = function () {
        location.href = './modulo-2-actividad.html';
    }
    var getPageNext6 = function () {
        location.href = './modulo-3.html';
    }
    var getPageNext7 = function () {
        location.href = './modulo-3-actividad.html';
    }

    var abrirMenuPrincipal = function () {
        var elemento = document.getElementById("menu-item");
        elemento.classList.add("active");
        var elemento = document.querySelector(".overlay");
        elemento.classList.add("active");
    }

    var cerrarMenuPrincipal = function () {
        var cerrarmenu = document.getElementById("menu-item");
        cerrarmenu.classList.remove("active");

        var elemento = document.querySelector(".overlay"); // Ejemplo: Obtener el elemento con ID "menu-item"
        elemento.classList.remove("active");
    }

    var inicioPagina = function () {
        // Desplazar la ventana al inicio de la página (coordenada Y = 0)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animación suave
        });
    }

    var scrollBottom = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia abajo la cantidad especificada
        window.scrollBy(0, 350);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al final de la página
        if (scrollTopNuevo + window.innerHeight >= document.documentElement.scrollHeight) {
            // Si llegó al final, ajustar el scroll a la altura máxima del documento
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });
        }

    };

    var scrollTo = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia arriba la cantidad especificada
        window.scrollBy(0, -350);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al inicio de la página
        if (scrollTopNuevo <= 0) {
            // Si llegó al inicio, ajustar el scroll a la parte superior
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    };

    let PositionTop100 = function (element) {
        if (element) {
            // Calcula la posición del elemento en relación con la parte superior de la página
            let offsetTop = element.offsetTop;

            // Ajusta la posición para subir un poco más (por ejemplo, 50 píxeles adicionales)
            let scrollToPosition = offsetTop - 100;

            // Realiza el scroll suavemente hacia la posición ajustada
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }

    let section11 = function () {
        let element = document.getElementById('section11M2');
        PositionTop100(element);
    }

    let section12 = function () {
        let element = document.getElementById("section12M2");
        PositionTop100(element);
    }

    let section13 = function () {
        let element = document.getElementById("section13M2");
        PositionTop100(element);
    }

    let section14 = function () {
        let element = document.getElementById("section14M2");
        PositionTop100(element);
    }

    let download15 = function () {
        let element = document.getElementById("btnLectura");
        element.click();
    }



    let abrirAyuda = function () {
        let modal = document.getElementById("methods-help");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarAyuda = function () {
        let modal = document.getElementById("methods-help");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let volver_Arriba = document.getElementById("btnVolver_Arriba");
    let volverA = function () {
        volver_Arriba.click();
    }

    var commands = {

        '0': abrirAyuda,
        'cero': abrirAyuda,
        'número 0': abrirAyuda,
        'número cero': abrirAyuda,

        'cerrar': cerrarAyuda,

        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,

        '1': abrirMenuPrincipal,
        'número 1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,
        'uuno': abrirMenuPrincipal,
        'menú': abrirMenuPrincipal,
        'abrir menú': abrirMenuPrincipal,

        '2': cerrarMenuPrincipal,
        'número 2': cerrarMenuPrincipal,
        'Dos': cerrarMenuPrincipal,
        'cerrar menú': cerrarMenuPrincipal,

        '3': getPageNext,
        'número 3': getPageNext,
        'tres': getPageNext,
        'número tres': getPageNext,

        '4': getPageNext1,
        'número 4': getPageNext1,
        'cuatro': getPageNext1,
        'número cuatro': getPageNext1,

        '5': getPageNext2,
        'número 5': getPageNext2,
        'cinco': getPageNext2,
        'número cinco': getPageNext2,

        '6': getPageNext3,
        'número 6': getPageNext3,
        'seis': getPageNext3,
        'número seis': getPageNext3,

        '7': getPageNext4,
        'número 7': getPageNext4,
        'siete': getPageNext4,
        'número siete': getPageNext4,

        '8': getPageNext5,
        'número 8': getPageNext5,
        'ocho': getPageNext5,
        'número ocho': getPageNext5,

        '9': getPageNext6,
        'número 9': getPageNext6,
        'nueve': getPageNext6,
        'número nueve': getPageNext6,

        '10': getPageNext7,
        'número 10': getPageNext7,
        'diez': getPageNext7,
        'número diez': getPageNext7,

        '11': section11,
        'número 11': section11,
        'once': section11,
        'número once': section11,

        '12': section12,
        'número 12': section12,
        'doce': section12,
        'número doce': section12,

        '13': section13,
        'número 13': section13,
        'trece': section13,
        'número trece': section13,

        '14': section14,
        'número 14': section14,
        'catorce': section14,
        'número catorce': section14,

        '15': download15,
        'número 15': download15,
        'quince': download15,
        'número quince': download15,

        '16': volverA,
        'número 16': volverA,
        'dieciséis': volverA,
        'número dieciséis': volverA,

        'F5': refreshPage,
        'efe cinco': refreshPage,
        'Recargar': refreshPage,
    };

    annyang.addCommands(commands);

    annyang.addCallback("result", frases => {
        console.log("Usted ha dicho: ", frases);
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted ha dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });
});

const btn_access = document.getElementById('btn-access');
let cerrar_help = document.getElementById("cerrar");
let cerrarAyudaM = document.getElementById("btnCerrarv2");


let num0 = document.getElementById("ident0");
let num1 = document.getElementById("ident1");
let num2 = document.getElementById("ident2");
let num3 = document.getElementById("ident3");
let num4 = document.getElementById("ident4");
let num5 = document.getElementById("ident5");
let num6 = document.getElementById("ident6");
let num7 = document.getElementById("ident7");
let num8 = document.getElementById("ident8");
let num9 = document.getElementById("ident9");
let num10 = document.getElementById("ident10");
let num11 = document.getElementById("ident11");
let num12 = document.getElementById("ident12");
let num13 = document.getElementById("ident13");
let num14 = document.getElementById("ident14");
let num15 = document.getElementById("ident15");
let num16 = document.getElementById("ident16");

let activoNumberIndex = localStorage.getItem("NumberAnnyang_1");
console.log(activoNumberIndex);

function numbersActives() {
    menuactivo = true;
    cerrar_help.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    cerrarAyudaM.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');
    num1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num2.style.display = "flex";
    num3.style.display = "inline-flex";
    num4.style.display = "inline-flex";
    num5.style.display = "inline-flex";
    num6.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num7.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num8.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num9.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num10.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num11.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num12.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num13.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num14.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num15.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num16.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
}

function removeNumbers() {
    cerrar_help.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    cerrarAyudaM.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num0.classList.remove('ident_Cero', 'animate__animated', 'animate__heartBeat');
    num1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    localStorage.setItem("NumberAnnyang_1", "desactivado");
    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num5.style.display = "none";
    num6.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num7.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num8.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num9.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num10.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num11.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num12.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num13.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num14.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num15.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num16.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
}


let menuactivo = activoNumberIndex === "activado";
if (activoNumberIndex === "activado") {
    numbersActives();
    annyang.setLanguage('es-MX');
    annyang.start();
}


btn_access.addEventListener('click', function () {
    if (!menuactivo) {
        annyang.start();
        console.log("Inicio Reconocimiento de voz");
        numbersActives();
        localStorage.setItem("NumberAnnyang_1", "activado");
    } else if (menuactivo) {
        menuactivo = false;
        annyang.abort();
        console.log("Fin Reconocimiento de voz");
        removeNumbers();
    }
});

