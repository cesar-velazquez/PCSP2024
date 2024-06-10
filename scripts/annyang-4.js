document.addEventListener("DOMContentLoaded", function () {
    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    var getPageNext = function () {
        location.href = '../index.html';
    }

    let refreshPage = function () {
        location.reload();
    }

    var getPageNext1 = function () {
        location.href = '../informaciongeneral.html';
    }

    var getPageNext2 = function () {
        location.href = '../modulo-1.html';
    }

    var getPageNext3 = function () {
        location.href = '../modulo-1/actividad.html';
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
        window.scrollBy(0, 500);

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
        window.scrollBy(0, -500);

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
        let element = document.getElementById('section11');
        PositionTop100(element);
    }

    // let section12 = function () {
    //     let element = document.getElementById("section12");
    //     PositionTop100(element);
    // }
    let videoOn = false;
    let VideoPlay = document.getElementById("video2");
    let playVideo = function () {
        videoOn = true;
        VideoPlay.play();
        // VideoPlay.requestFullscreen();
        num12.style.backgroundColor = "#f8c5fd3d";
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo = function () {
        videoOn = false;
        if (videoOn == false) {
            VideoPlay.pause();
        }
    }

    let playVideo1 = function () {
        if (!videoOn) {
            playVideo();
        } else {
            videoOn = true;
            offVideo();
        }
    }

    // let section13 = function () {
    //     let element = document.getElementById("section13");
    //     PositionTop100(element);
    // }

    let section14 = function () {
        let element = document.getElementById("section14");
        PositionTop100(element);
    }

    let section15 = function () {
        let element = document.getElementById("section15");
        PositionTop100(element);
    }

    function download16() {
        let btn = document.getElementById("btnLectura");
        btn.click();
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
        'cerrar': cerrarAyuda,

        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,

        '1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,
        'uuno': abrirMenuPrincipal,
        'menú': abrirMenuPrincipal,
        'abrir menú': abrirMenuPrincipal,

        '2': cerrarMenuPrincipal,
        'Dos': cerrarMenuPrincipal,
        'cerrar menú': cerrarMenuPrincipal,

        '3': getPageNext,
        'tres': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,

        '6': getPageNext3,
        'Seis': getPageNext3,

        '11': section11,
        'once': section11,

        '12': playVideo1,
        'Doce': playVideo1,

        // '13': section13,
        // 'trece': section13,

        '14': section14,
        'catorce': section14,

        '15': section15,
        'quince': section15,

        '16': download16,
        'dieciséis': download16,

        '17': volverA,
        'diecisiete': volverA,

        'F5': refreshPage,
        'efe cinco': refreshPage,

    };

    annyang.addCommands(commands);

    annyang.addCallback("result", frases => {
        console.log("Usted ha dicho: ", frases);
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted ha dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });

    annyang.setLanguage("es-MX");

});
const btn_access = document.getElementById('btn-access');
let num1_h = document.getElementById("ident1_h");
let cerrar = document.getElementById("identcerrar");


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
let num17 = document.getElementById("ident17");
let num19 = document.getElementById("ident19");
let num21 = document.getElementById("ident21");
let num23 = document.getElementById("ident23");
let num25 = document.getElementById("ident25");
let num27 = document.getElementById("ident27");
let num29 = document.getElementById("ident29");
let num30 = document.getElementById("ident30");
let num31 = document.getElementById("ident31");
let num32 = document.getElementById("ident32");
let num33 = document.getElementById("ident33");
let num34 = document.getElementById("ident34");
let num35 = document.getElementById("ident35");
let num36 = document.getElementById("ident36");
let num37 = document.getElementById("ident37");
let num38 = document.getElementById("ident38");
let num39 = document.getElementById("ident39");
let num40 = document.getElementById("ident40");
let num41 = document.getElementById("ident41");
let num42 = document.getElementById("ident42");
let num43 = document.getElementById("ident43");
let num44 = document.getElementById("ident44");
let num45 = document.getElementById("ident45");
let num46 = document.getElementById("ident46");
let num47 = document.getElementById("ident47");
let num48 = document.getElementById("ident48");
let num49 = document.getElementById("ident49");
let num50 = document.getElementById("ident50");

// BTNS PARA CERRAR MODALES
let num18 = document.getElementById("ident18");
let num18_1 = document.getElementById("ident18_1");

let num20 = document.getElementById("ident20");
let num20_1 = document.getElementById("ident20_1");

let num22 = document.getElementById("ident22");
let num22_1 = document.getElementById("ident22_1");

let num24 = document.getElementById("ident24");
let num24_1 = document.getElementById("ident24_1");

let num26 = document.getElementById("ident26");
let num26_1 = document.getElementById("ident26_1");

let num28 = document.getElementById("ident28");
let num28_1 = document.getElementById("ident28_1");

let activoNumberIndex = localStorage.getItem("NumberAnnyang_1");
console.log(activoNumberIndex);



let menuactivo = activoNumberIndex === "activado";
if (activoNumberIndex === "activado") {
    menuactivo = true;
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
    num14.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num15.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num16.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num17.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num19.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num21.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num23.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num25.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num27.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num29.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num30.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num31.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num32.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num33.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num34.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num35.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num36.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num37.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num38.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num39.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num40.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num41.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num42.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num43.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num44.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num45.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num46.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num47.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num48.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num49.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num50.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');

    // cerrar modales:
    num18.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num18_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    num20.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num20_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    num22.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num22_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    num24.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num24_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    num26.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num26_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    num28.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num28_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

    annyang.setLanguage('es-MX');
    annyang.start();
}


btn_access.addEventListener('click', function () {
    if (!menuactivo) {
        menuactivo = true;
        annyang.start();
        console.log("Inicio Reconocimiento de voz");

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
        num14.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num15.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num16.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num17.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num19.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num21.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num23.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num25.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num27.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num29.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num30.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num31.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num32.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num33.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num34.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num35.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num36.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num37.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num38.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num39.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num40.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num41.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num42.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num43.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num44.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num45.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num46.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num47.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num48.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num49.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num50.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');

        // modales btn cerrar
        num18.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num18_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num20.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num20_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num22.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num22_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num24.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num24_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num26.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num26_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num28.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num28_1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');


        localStorage.setItem("NumberAnnyang_1", "activado");
    } else if (menuactivo) {
        menuactivo = false;
        annyang.abort();
        console.log("Fin Reconocimiento de voz");


        num0.classList.remove('ident_Cero', 'animate__animated', 'animate__heartBeat');
        num1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

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
        num14.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num15.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num16.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num17.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num19.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num21.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num23.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num25.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num27.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num29.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num30.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num31.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num32.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num33.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num34.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num35.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num36.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num37.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num38.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num39.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num40.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num41.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num42.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num43.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num44.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num45.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num46.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num47.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num48.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num49.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num50.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');

        // btns cerra modal:
        num18.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num18_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num20.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num20_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num22.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num22_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num24.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num24_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num26.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num26_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num28.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num28_1.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        localStorage.setItem("NumberAnnyang_1", "desactivado");
    }
});
