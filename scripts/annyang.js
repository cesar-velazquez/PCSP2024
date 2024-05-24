document.addEventListener("DOMContentLoaded", function () {

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    let refreshPage = function () {
        location.reload();
    }

    var getPageNext = function () {
        location.href = './index.html';
        // window.open("https://github.com/TalAter/annyang", '_blank');
    }

    var getPageNext1 = function () {
        location.href = './informaciongeneral.html';
    }

    var getPageNext2 = function () {
        location.href = './modulo-1.html';
    }

    var abrirMenuPrincipal = function () {
        var elemento = document.getElementById("menu-item");
        elemento.classList.add("active");
        var elemento = document.querySelector(".overlay");
        elemento.classList.add("active");
    }

    let abrirModal1 = function () {
        let modal = document.getElementById("methods-uno");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
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


    let cerrarmodal1 = function () {
        let modal = document.getElementById("methods-uno");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal2 = function () {
        let modal = document.getElementById("methods-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal2 = function () {
        let modal = document.getElementById("methods-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal3 = function () {
        let modal = document.getElementById("methods-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarmodal3 = function () {
        let modal = document.getElementById("methods-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalAbierto1 = false;
    let modalAbierto2 = false;
    let modalAbierto3 = false;
    let modalAbierto4 = false;

    function abrirModal11() {
        if (modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true) {
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirModal1();
        modalAbierto1 = true;
        document.body.classList.add("modal-open");
    }

    function abrirModal22() {
        if (modalAbierto1 == true || modalAbierto3 == true || modalAbierto4 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirmodal2();
        modalAbierto2 = true;
    }

    function abrirModal33() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto4 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirmodal3();
        modalAbierto3 = true;
    }

    function abrirModalAyuda() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
        }
        abrirAyuda();
        modalAbierto4 = true;
    }
    // prueba faq    

    let abrirfaqBasicaP = function () {
        let abrirfaq = document.getElementById("basic1");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');

    }

    let cerrarfaqBasicP = function () {
        let cerrarfaq = document.getElementById("basic1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let faqAbierto = false;

    function abrirCerrarfaq() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP();
            faqAbierto = true;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP();
            faqAbierto = false;
        }
    }

    // segundo faq
    let abrirfaqBasicaP2 = function () {
        let abrirfaq = document.getElementById("basic2");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');

    }

    let cerrarfaqBasicP2 = function () {
        let cerrarfaq = document.getElementById("basic2");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let faqAbierto2 = false;

    function abrirCerrarfaq2() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto2) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP2();
            faqAbierto2 = true;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP2();
            faqAbierto2 = false;
        }
    }

    // prueba faq fin

    // let abrirfaqBasic = function () {
    //     let abrirfaq = document.getElementById("basicas-1");
    //     abrirfaq.classList.remove('collapsed');
    //     abrirfaq.setAttribute('aria-expanded', 'true');
    //     // abrirfaq.nextElementSibling.classList.add('show');
    // }

    // let abrirfaqBasic2 = function () {
    //     let abrirfaq = document.getElementById("basicas-2");
    //     abrirfaq.classList.remove('collapsed');
    //     abrirfaq.setAttribute('aria-expanded', 'true');
    //     abrirfaq.nextElementSibling.classList.add('show');
    // }

    // let cerrarfaqBasic = function () {
    //     let cerrarfaq = document.getElementById("basicas-1");
    //     cerrarfaq.classList.add('collapsed');
    //     cerrarfaq.setAttribute('aria-expanded', 'false');
    //     cerrarfaq.nextElementSibling.classList.remove('show')
    // }

    // let cerrarfaqBasic2 = function () {
    //     let cerrarfaq = document.getElementById("basicas-2");
    //     cerrarfaq.classList.add('collapsed');
    //     cerrarfaq.setAttribute('aria-expanded', 'false');
    //     cerrarfaq.nextElementSibling.classList.remove('show')
    // }




    // let descargarlecturafacil = function () {
    //     location.href = '#btnLectura';
    //     let descargar = document.getElementById("btnLectura");
    //     descargar.click();
    // }

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

    // let section6 = function () {
    //     let element = document.getElementById('ident1_6');
    //     PositionTop(element);
    // }


    // let section7 = function () {
    //     let element = document.getElementById('ident1_7');
    //     PositionTop(element);
    // }

    // let section8 = function () {
    //     let element = document.getElementById('ident1_8');
    //     PositionTop100(element);
    // }

    // let section9 = function () {
    //     let element = document.getElementById('ident1_9');
    //     PositionTop(element);
    // }

    let section11 = function () {
        let element = document.getElementById('section11');
        PositionTop100(element);
    }

    let section16 = function () {
        let element = document.getElementById("section16");
        PositionTop100(element);
    }

    let section17 = function () {
        let element = document.getElementById("section17");
        PositionTop100(element);
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

    let volverArriba = document.getElementById("btnVolver_Arriba");
    let volverA = function () {
        volverArriba.click();
    }

    let videoOn = false;
    let VideoPlay = document.getElementById("video1");
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

    let fullScreenVideo = function () {
        videoOn = true;
        VideoPlay.requestFullscreen();
    }

    let fullScreenVideoExit = function () {
        videoOn = false;
        if (videoOn == false) {
            document.exitFullscreen();
        }
    }

    let fullScreenVideo1 = function () {
        fullScreenVideo();
        // if (fullScreenVideo()) {
        //     fullScreenVideoExit();
        // }
    }

    let btn19 = document.getElementById("ident42");
    let downloadbtnLectura = function () {
        btn19.click();
    }

    var commands = {
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        // 'Descargar lectura fácil': descargarlecturafacil,
        'Inicio': inicioPagina,

        '1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,
        'uuuno': abrirMenuPrincipal,

        'dos': cerrarMenuPrincipal,
        '2': cerrarMenuPrincipal,

        '3': getPageNext,
        'tres': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,

        // '6': section6,
        // 'seis': section6,

        // '7': section7,
        // 'siete': section7,

        // '8': section8,
        // 'ocho': section8,

        // '9': section9,
        // 'nueve': section9,

        '10': abrirModal11,
        'Diez': abrirModal11,

        // '11': cerrarmodal1,
        // 'Once': cerrarmodal1,

        '11': section11,
        'Once': section11,

        '12': playVideo1,
        'Doce': playVideo1,


        '13': fullScreenVideo1,
        'Trece': fullScreenVideo1,

        '14': abrirModal33,
        'catorce': abrirModal33,

        '15': cerrarmodal3,
        'Quince': cerrarmodal3,

        '16': section16,
        'Dieciséis': section16,

        '17': section17,
        'Diecisiete': section17,

        abrirCerrarfaq,

        '18': abrirCerrarfaq2,
        'Dieciocho': abrirCerrarfaq2,

        '42': downloadbtnLectura,
        'cuarenta y dos': downloadbtnLectura,

        '43': volverA,
        'cuarenta y tres': volverA,

        '0': abrirModalAyuda,
        'cero': abrirModalAyuda,

        'cerrar': cerrarAyuda,

        'F5': refreshPage,
        'efe cinco': refreshPage,
    };

    annyang.addCommands(commands);
    annyang.addCallback("result", frases => {
        console.log("usted ha dicho: " + frases);
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted ha dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });
    annyang.setLanguage("es-MX");
});

let iconComandoVoz = document.getElementById("icon_comando_voz");
let icon_comandovoz_Active = document.getElementById("icon_comandovoz_activo");

let iconLink = document.getElementById("icon_Link");
let iconLinkActive = document.getElementById("icon_Link_Active");


let btn_Cursor = document.getElementById("cursorBig");
let iconCursor = document.getElementById("icon_Cursor");
let iconCursorActive = document.getElementById("icon_Cursor_Active");

let lineaLectura = document.getElementById("lineaLectura");
let iconLectura = document.getElementById("icon_Linea_Lectura");
let iconLecturaActive = document.getElementById("icon_Linea_Lectura_Active");

let LectorInmersivo = document.getElementById("btn_lectorInmersivo");
let iconLectorInmersivo = document.getElementById("icon_lector_inmersivo");
let iconLectorInmersivoActive = document.getElementById("icon_lector_inmersivo_active");
let cerrarLectorIn = document.getElementById("cerrarLectorIn");

let enlaceaLecturaF = document.getElementById("enlaceaLecturaF");
let btnLectura = document.getElementById("btnLectura");


let microfono = document.getElementById("micro");
const btn_access = document.getElementById('btn-access');
let btn_tamFuente = document.getElementById('font_size');
let link_resaltar = document.getElementById('link_resaltar');
let contenedor_notas = document.getElementById("container_notes");
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
let num18 = document.getElementById("ident18");
let num20 = document.getElementById("ident20");
let num22 = document.getElementById("ident22");
let num24 = document.getElementById("ident24");
let num25 = document.getElementById("ident25");
let num26 = document.getElementById("ident26");
let num27 = document.getElementById("ident27");
let num28 = document.getElementById("ident28");
let num30 = document.getElementById("ident30");
let num32 = document.getElementById("ident32");
let num34 = document.getElementById("ident34");
let num36 = document.getElementById("ident36");
let num38 = document.getElementById("ident38");
let num40 = document.getElementById("ident40");
let num42 = document.getElementById("ident42");
let num43 = document.getElementById("ident43");
// botones cerrar modal 0
let num11_1 = document.getElementById("ident1_1");
// botones cerrar modal 10
let num1_h = document.getElementById("ident1_h");
let cerrar = document.getElementById("identcerrar");
// botones cerrar modal 12
let num13_1 = document.getElementById("ident1_2");
// let num14 = document.getElementById("ident14");
// botones cerrar modal 14

let num15_3 = document.getElementById("ident15_3");
// 

enlaceaLecturaF.addEventListener('click', function () {
    btnLectura.classList.add('animate__animated', 'animate__shakeX', 'animate__slow', 'animate__delay-1s');
});

let LectorIn = false;
LectorInmersivo.addEventListener('click', function () {
    if (!LectorIn) {
        LectorIn = true;
        iconLectorInmersivo.style.display = "none";
        iconLectorInmersivoActive.style.display = "inline-flex";
        LectorInmersivo.classList.add("HerramientaActivada");
    }
});

cerrarLectorIn.addEventListener('click', function () {
    LectorIn = false;
    iconLectorInmersivo.style.display = "inline-flex";
    iconLectorInmersivoActive.style.display = "none";
    LectorInmersivo.classList.remove("HerramientaActivada");
});

let lineaSelect = false;
lineaLectura.addEventListener('click', function () {
    if (!lineaSelect) {
        lineaSelect = true;
        iconLectura.style.display = "none";
        iconLecturaActive.style.display = "inline-flex";
        lineaLectura.classList.add("HerramientaActivada");
    } else {
        lineaSelect = false;
        iconLectura.style.display = "inline-flex";
        iconLecturaActive.style.display = "none";
        lineaLectura.classList.remove("HerramientaActivada");
        lineaLectura.style.transitionDuration = ".5s";
    }
});


let cursor = false;
btn_Cursor.addEventListener('click', function () {
    if (!cursor) {
        cursor = true;
        iconCursor.style.display = "none";
        iconCursorActive.style.display = "inline-flex";
        btn_Cursor.classList.add("HerramientaActivada");
    } else {
        cursor = false;
        iconCursor.style.display = "inline-flex";
        iconCursorActive.style.display = "none";
        btn_Cursor.classList.remove("HerramientaActivada");
        btn_Cursor.style.transitionDuration = ".5s";
    }
});

let linkactivo = false;
link_resaltar.addEventListener('click', function () {
    if (!linkactivo) {
        linkactivo = true;
        iconLink.style.display = "none";
        iconLinkActive.style.display = "inline-flex";
        link_resaltar.classList.add("HerramientaActivada");
    } else {
        linkactivo = false;
        iconLink.style.display = "inline-flex";
        iconLinkActive.style.display = "none";
        link_resaltar.classList.remove("HerramientaActivada");
        link_resaltar.style.transitionDuration = ".5s";
    }
});

let menuactivo = false;
btn_access.addEventListener('click', function () {
    if (!menuactivo) {
        menuactivo = true;
        const parrafos = document.querySelectorAll('.section-comandos');
        parrafos.forEach(parrafo => parrafo.style.display = 'block');
        annyang.start();
        console.log("Inicio Reconocimiento de voz");

        microfono.classList.remove("bxs-microphone-off", "bx-flip-horizontal");
        microfono.classList.add("activeMicro", "bx-microphone", "bx-flip-horizontal");
        microfono.style.transitionDuration = "1s";
        contenedor_notas.classList.add('contenedorActivo');
        btn_access.classList.add("HerramientaActivada");
        // btn_tamFuente.classList.add("HerramientaActivada");
        iconComandoVoz.style.display = "none";
        icon_comandovoz_Active.style.display = "inline-flex";
        // iconComandoVoz.style.backgroundImage= ""        

        num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');
        num1.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
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
        num15.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num16.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num17.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num18.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num20.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num22.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num24.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num25.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num26.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num27.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num28.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num30.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num32.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num34.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num36.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num38.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num40.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num42.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num43.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');

        // btones cerrar modales :
        // modal etiqueta 0
        // cerrar.style.display = "inline-flex";
        // num1_h.style.display = "inline-flex";
        // modal etqueta 10        
        // num11_1.style.display = "inline-flex";
        // modal etiqueta 12
        // num13_1.style.display = "inline-flex";
        // num13.style.display = "inline-flex";
        // modal etiqueta 14:
        // num15.style.display = "inline-flex";
        // num15_3.style.display = "inline-flex";
    } else if (menuactivo) {
        menuactivo = false;
        annyang.abort();
        console.log("Fin Reconocimiento de voz");

        microfono.classList.add("bx", "bxs-microphone-off", "bx-flip-horizontal");
        microfono.classList.remove("activeMicro", "bx-microphone", "bx-flip-horizontal");
        microfono.style.transitionDuration = "1s";
        contenedor_notas.classList.remove('contenedorActivo');
        // btn_access.style.backgroundColor = "white";
        iconComandoVoz.style.display = "inline-flex";
        icon_comandovoz_Active.style.display = "none";
        btn_access.classList.remove("HerramientaActivada");
        btn_access.style.transitionDuration = "1s";


        num0.classList.remove('ident_Cero', 'animate__animated', 'animate__heartBeat');
        num1.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
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
        num15.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num16.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num17.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num18.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num20.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num22.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num24.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num25.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num26.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num27.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num28.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num30.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num32.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num34.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num36.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num38.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num40.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num42.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num43.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        // btones cerrar modales:
        // modal etiqueta 0
        // cerrar.style.display = "none";
        // num1_h.style.display = "none";
        // modal etqueta 10
        // num11.style.display = "none";
        // num11_1.style.display = "none";
        // modal etiqueta 12
        // num13_1.style.display = "none";
        // num13.style.display = "none";
        // modal etiqueta 14:
        // num15.style.display = "none";
        // num15_3.style.display = "none";
    }
});
