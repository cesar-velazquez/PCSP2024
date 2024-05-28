document.addEventListener("DOMContentLoaded", function () {

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    var getPageNext = function () {
        location.href = './index.html';
        // window.open("https://github.com/TalAter/annyang", '_blank');
    }

    var getPageNext1 = function () {
        location.href = './info-gral.html';
    }

    var getPageNext2 = function () {
        location.href = './modulo-1.html';
    }
    let activity = function () {
        location.href = './actividad.html';
    }

    let option1 = function () {
        console.log("annyang-2")
        let btnOpction1 = document.getElementById("activity4-1");
        btnOpction1.click();
    }

    var abrirMenuPrincipal = function () {
        // Obtener el elemento al que deseas agregar la clase
        var elemento = document.getElementById("menu-item"); // Ejemplo: Obtener el elemento con ID "menu-item"
        // Agregar la clase "active" al elemento
        elemento.classList.add("active");

        var elemento = document.querySelector(".overlay"); // Ejemplo: Obtener el elemento con ID "menu-item"
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
        window.scrollBy(0, 200);

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
        window.scrollBy(0, -200);

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

    let abrirModalEsquema = function () {
        let modal = document.getElementById("modal-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "block";
        backdrop.style.display = "block";
        document.body.classList.add("modal-open");
    }

    let cerrarmodalEsquema = function () {
        let modal = document.getElementById("modal-1");
        let backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.style.display = "none";
        backdrop.style.display = "none";
        document.body.classList.add("close-modal");
    }

    let abrirfaq1 = function () {
        let abrirfaquno = document.getElementById("faq1");
        abrirfaquno.classList.remove('collapsed');
        abrirfaquno.setAttribute('aria-expanded', 'true');
        abrirfaquno.nextElementSibling.classList.add('show');
    }
    let cerrarfaq1 = function () {
        let cerrarfaq = document.getElementById("faq1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show');
    }

    let nextarget = function () {
        let pasar = document.getElementById("swip1");
        pasar.style.zIndex = "2";
        pasar.style.transform = "translate3d(calc(-7.25% + 0px), 0px, -100px) rotateZ(-2deg) scale(1)";
        pasar.style.transitionDuration = "0.5s"
    }

    let nexttarget2 = function () {
        let swip1 = document.getElementById("swip1");
        let swip2 = document.getElementById("swip2");
        let swip3 = document.getElementById("swip3");
        //  width: 888px; 
        //  z-index: 1; 
        //  transform: translate3d(calc(-13% + 0px), 0px, -200px) rotateZ(-4deg) scale(1); 
        //  transition-duration: 0ms;
        // swip1.style.width = "888px";
        swip1.style.zIndex = "1";
        swip1.style.transform = "translate3d(calc(-13% + 0px), 0px, -200px) rotateZ(-4deg) scale(1)";
        swip1.style.transitionDuration = "0.5s";

        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(-7.25% - 888px), 0px, -100px) rotateZ(-2deg) scale(1); 
        // transition-duration: 0ms;
        // swip2.style.width = "888px"
        swip2.style.zIndex = "2";
        swip2.style.transform = "translate3d(calc(-7.25% - 888px), 0px, -100px) rotateZ(-2deg) scale(1)";
        swip2.style.transitionDuration = "0.5s"

        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(-1776px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip3.style.zIndex = "3";
        swip3.style.transform = "translate3d(-1776px, 0px, 0px) rotateZ(0deg) scale(1)";
        swip3.style.transitionDuration = "0.5s";
    }

    // Regresar tarjetas

    let previoustarget = function () {
        let swip3 = document.getElementById("swip3");
        let swip2 = document.getElementById("swip2");
        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(7.25% - 1776px), 0px, -100px) rotateZ(2deg) scale(1); 
        // transition-duration: 0ms;
        swip3.style.zIndex = "2";
        swip3.style.transform = "translate3d(calc(7.25% - 1776px), 0px, -100px) rotateZ(2deg) scale(1)";
        swip3.style.transitionDuration = "0.5s";
        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(-888px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip2.style.zIndex = "3";
        swip2.style.transform = "translate3d(-888px, 0px, 0px) rotateZ(0deg) scale(1)";
        swip2.style.transitionDuration = ".5s";
    }

    let previoustarget1 = function () {
        let swip1 = document.getElementById("swip1");
        let swip2 = document.getElementById("swip2");
        let swip3 = document.getElementById("swip3");
        // width: 888px; 
        // z-index: 3; 
        // transform: translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1); 
        // transition-duration: 0ms;
        swip1.style.zIndex = "3";
        swip1.style.transform = "translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1)"
        swip1.style.transitionDuration = ".5s"

        // width: 888px; 
        // z-index: 2; 
        // transform: translate3d(calc(7.25% - 888px), 0px, -100px) rotateZ(2deg) scale(1); 
        // transition-duration: 0ms;
        swip2.style.zIndex = "2";
        swip2.style.transform = "translate3d(calc(7.25% - 888px), 0px, -100px) rotateZ(2deg) scale(1)";
        swip2.style.transitionDuration = "0.5s";
    }

    let secondtab = function () {
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firsttab")
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        firstab.classList.remove("active");
        secondtab.classList.add("active");
        parrafo2.classList.add("active");
        parrafo1.classList.remove("active");
    }

    let firstab = function () {
        let firstab = document.getElementById("firsttab")
        let secondtab = document.getElementById("secondtab");
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");

        firstab.classList.add("active");
        secondtab.classList.remove("active");
        parrafo1.classList.add("active");
        parrafo2.classList.remove("active");
    }

    let PositionTop = function (element) {
        if (element) {
            // Calcula la posición del elemento en relación con la parte superior de la página
            let offsetTop = element.offsetTop;

            // Ajusta la posición para subir un poco más (por ejemplo, 50 píxeles adicionales)
            let scrollToPosition = offsetTop - 50;

            // Realiza el scroll suavemente hacia la posición ajustada
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }

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


    let section6 = function () {
        let element = document.getElementById('ident6_p');
        PositionTop100(element);
    }

    let section7_ig = function () {
        let element = document.getElementById('section7_ig');
        PositionTop100(element);
    }

    let section10 = function () {
        let element = document.getElementById('section10');
        PositionTop100(element);
    }

    let section11 = function () {
        let element = document.getElementById('section11');
        PositionTop100(element);
    }

    let section12 = function () {
        let element = document.getElementById("ident12_v");
        PositionTop100(element);
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

    let volver_Arriba = document.getElementById("volver_Arr");
    let volverA = function () {
        volver_Arriba.click();
    }

    var commands = {

        '0': abrirAyuda,
        'cero': abrirAyuda,

        '1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,

        '2': cerrarMenuPrincipal,
        'Dos': cerrarMenuPrincipal,

        '3': getPageNext,
        'tres': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,

        '6': section6,
        'seis': section6,

        '7': section7_ig,
        'Siete': section7_ig,

        "8": firstab,
        "ocho": firstab,

        "9": secondtab,
        "nueve": secondtab,

        '10': section10,
        'Diez': section10,

        '11': section11,
        'once': section11,

        '12': section12,
        'doce': section12,

        // '13': function () {
        //     console.log("Comando 'trece' reconocido.");
        //     var player = document.getElementById('video');
        //     if (player && player.tagName === 'IFRAME') {
        //         var iframe = player.contentWindow || player.contentDocument;
        //         if (iframe.document) {
        //             iframe = iframe.document;
        //         }
        //         var videoElement = iframe.querySelector('video');
        //         if (videoElement && typeof videoElement.pause === 'function') {
        //             if (videoElement.paused) {
        //                 videoElement.play();
        //             } else {
        //                 videoElement.pause();
        //             }
        //         } else {
        //             console.error('No se pudo encontrar un elemento de video válido dentro del iframe.');
        //         }
        //     } else {
        //         console.error('No se pudo encontrar el elemento de video o no es un iframe.');
        //     }
        // },



        // 'Trece': playvideo,

        '14': volverA,
        'catorce': volverA,

        'cerrar': cerrarAyuda,

        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        //         
        'Abrir modal esquema': abrirModalEsquema,
        "Cerrar modal esquema": cerrarmodalEsquema,
        "abrir botón colapsado uno": abrirfaq1,
        "cerrar botón colapsado uno": cerrarfaq1,
        "Pasar tarjeta 1": nextarget,
        "Pasar tarjeta 2": nexttarget2,
        "Volver a tarjeta 2": previoustarget,
        "Volver a tarjeta 1": previoustarget1,
        "Actividad": activity,
        "Abrir opción 1": option1
    };

    annyang.addCommands(commands);

    annyang.addCallback("result", frases => {
        console.log("Usted a dicho: ", frases);
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted a dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });

    annyang.setLanguage("es-MX");

    annyang.start();

});
const btn_access = document.getElementById('btn-access');
let contenedor_notas = document.getElementById("container_notes");
let num1_h = document.getElementById("ident1_h");
let cerrar = document.getElementById("identcerrar");
let microfono = document.getElementById("micro");

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

btn_access.addEventListener('click', function () {
    contenedor_notas.style.display = "flex";
    contenedor_notas.style.flexDirection = "column";
    contenedor_notas.style.justifyContent = "center";
    contenedor_notas.style.alignItems = "center";
    contenedor_notas.style.padding = "2rem";
    contenedor_notas.style.zIndex = "53";

    microfono.classList.add("activeMicro");
    microfono.style.transitionDuration = "1s";


    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');
    num1.style.display = "flex";
    num1.style.transitionDuration = "3s";
    num1.style.animationDuration = "3s";
    num1.classList.add('animate__animated', 'animate__heartBeat');
    num2.style.display = "inline-flex";
    num3.style.display = "inline-flex";
    num4.style.display = "inline-flex";
    num5.style.display = "inline-flex";
    num6.classList.add("ident_Universal");
    num7.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num8.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num9.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num10.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num11.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');

    num6.classList.add('animate__animated', 'animate__heartBeat');
    // num12.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    // num13.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num14.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');

    cerrar.style.display = "inline-flex";
    num1_h.style.display = "inline-flex";
})

