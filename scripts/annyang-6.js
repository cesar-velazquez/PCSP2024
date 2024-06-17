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
        location.href = '../pcsp-2024/modulo-1/actividad.html';
    }

    var getPageNext4 = function () {
        location.href = './modulo-2.html';
    }
    var getPageNext5 = function () {
        location.href = '../pcsp-2024/modulo-2/modulo-2-actividad.html';
    }
    var getPageNext6 = function () {
        location.href = './modulo-3.html';
    }
    var getPageNext7 = function () {
        location.href = '../pcsp-2024/modulo-3/modulo-3-actividad.html';
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
        let element = document.getElementById('section11Act2');
        PositionTop100(element);
    }

    let section12 = function () {
        let element = document.getElementById("section12Act2");
        PositionTop100(element);
    }

    let videoOn = false;
    let VideoPlay = document.getElementById("video3");
    let positionVid1 = document.getElementById("section13Act2");
    let playVideo = function () {
        videoOn = true;
        VideoPlay.play();
        PositionTop100(positionVid1);
        num12.style.backgroundColor = "#f8c5fd3d";
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo = function () {
        videoOn = false;
        if (videoOn == false) {
            VideoPlay.pause();
            PositionTop100(positionVid1);
        }
    }

    let playVideo3 = function () {
        if (!videoOn) {
            playVideo();
        } else {
            videoOn = true;
            offVideo();
        }
    }


    let abrirfaqBasicaP = function () {
        let abrirfaq = document.getElementById("basic1Act2");

        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.setAttribute('open', '');
        PositionTop100(abrirfaq);
    }

    let cerrarfaqBasicP = function () {
        let cerrarfaq = document.getElementById("basic1Act2");
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.removeAttribute('open', '');
        cerrarfaq.setAttribute('close', '');
        PositionTop100(cerrarfaq);
    }

    let faqAbierto = false;

    function GuionVideo1Act2() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP();
            faqAbierto = true;
            // CerrarFaq38();
            // faqAbierto38 = false;
            // CerrarFaq39();
            // faqAbierto39 = false;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP();
            faqAbierto = false;
        }
    }

    let section15 = function () {
        let element = document.getElementById("section15Act2");
        PositionTop100(element);
    }

    // Inicio modales
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

    let abrirModal16 = function () {
        let modal = document.getElementById("modal16");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal16 = function () {
        let modal = document.getElementById("modal16");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal18 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal18 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal20 = function () {
        let modal = document.getElementById("habilidad-5");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal20 = function () {
        let modal = document.getElementById("habilidad-5");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal22 = function () {
        let modal = document.getElementById("habilidad-6");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal22 = function () {
        let modal = document.getElementById("habilidad-6");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalAyuda0 = false;
    let modalAbierto17 = false;
    let modalAbierto19 = false;
    let modalAbierto21 = false;
    let modalAbierto23 = false;
    let modalAbierto25 = false;
    let modalAbierto27 = false;

    function abrirModalAyuda() {
        if (modalAbierto17 == true || modalAbierto19 == true ||
            modalAbierto21 == true || modalAbierto23 == true ||
            modalAbierto25 == true || modalAbierto27 == true
        ) {
            cerrarModal17();
            modalAbierto17 = false;
            cerrarModal19();
            modalAbierto19 = false;
            cerrarModal21();
            modalAbierto21 = false;
            cerrarModal23();
            modalAbierto23 = false;
            cerrarModal25();
            modalAbierto25 = false;
            cerrarModal27();
            modalAbierto27 = false;
        }
        abrirAyuda();
        modalAyuda0 = true;
    }
    // fin modales
    let section16 = function () {
        let element = document.getElementById("sectionM216");
        PositionTop100(element);
    }

    let section17 = function () {
        let element = document.getElementById("sectionM217");
        PositionTop100(element);
    }

    let section18 = function () {
        let element = document.getElementById("sectionM218");
        PositionTop100(element);
    }

    let section19 = function () {
        let element = document.getElementById("sectionM219");
        PositionTop100(element);
    }

    let section20 = function () {
        let element = document.getElementById("sectionM220");
        PositionTop100(element);
    }

    function download21() {
        let btn = document.getElementById("btnLectura");
        btn.click();
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
        'número tres': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,
        'número cuatro': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,
        'número cinco': getPageNext2,

        '6': getPageNext3,
        'seis': getPageNext3,
        'número seis': getPageNext3,

        '7': getPageNext4,
        'siete': getPageNext4,
        'número siete': getPageNext4,

        '8': getPageNext5,
        'ocho': getPageNext5,
        'número ocho': getPageNext5,

        '9': getPageNext6,
        'nueve': getPageNext6,
        'número nueve': getPageNext6,

        '10': getPageNext7,
        'diez': getPageNext7,
        'número diez': getPageNext7,

        '11': section11,
        'once': section11,
        'número once': section11,

        '12': section12,
        'doce': section12,
        'número doce': section12,

        '13': playVideo3,
        'trece': playVideo3,
        'número trece': playVideo3,
        'Pausa': playVideo3,

        '14': GuionVideo1Act2,
        'catorce': GuionVideo1Act2,
        'número catorce': GuionVideo1Act2,

        '15': section15,
        'quince': section15,
        'número quince': section15,

        '16': section16,
        'dieciséis': section16,
        'número dieciséis': section16,

        '17': section17,
        'diecisiete': section17,
        'número diecisiete': section17,

        '18': section18,
        'dieciocho': section18,
        'número dieciocho': section18,

        '19': section19,
        'diecinueve': section19,
        'número diecinueve': section19,

        '20': section20,
        'veinte': section20,
        'número veinte': section20,

        '21': download21,
        'veintiuno': download21,
        'número veintiuno': download21,

        '22': volverA,
        'veintidos': volverA,
        'número veintidos': volverA,

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

    // annyang.setLanguage("es-MX");
});

// INICIO
// FIN

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
let num17 = document.getElementById("ident17");
let num18 = document.getElementById("ident18");
let num19 = document.getElementById("ident19");
let num20 = document.getElementById("ident20");
let num21 = document.getElementById("ident21");
let num22 = document.getElementById("ident22");
let num23 = document.getElementById("ident23");
let num24 = document.getElementById("ident24");
let num25 = document.getElementById("ident25");
let num26 = document.getElementById("ident26");
let num27 = document.getElementById("ident27");
let num28 = document.getElementById("ident28");
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
let num51 = document.getElementById("ident51");
let num52 = document.getElementById("ident52");
let num53 = document.getElementById("ident53");
let num54 = document.getElementById("ident54");
let num55 = document.getElementById("ident55");
let num56 = document.getElementById("ident56");
let num57 = document.getElementById("ident57");
let num58 = document.getElementById("ident58");
let num59 = document.getElementById("ident59");
let num60 = document.getElementById("ident60");
let num61 = document.getElementById("ident61");
let num62 = document.getElementById("ident62");
let num63 = document.getElementById("ident63");
let num64 = document.getElementById("ident64");
let num65 = document.getElementById("ident65");
let num66 = document.getElementById("ident66");
let num67 = document.getElementById("ident67");
let num68 = document.getElementById("ident68");
let num69 = document.getElementById("ident69");
let num70 = document.getElementById("ident70");
let num71 = document.getElementById("ident71");
let num72 = document.getElementById("ident72");
let num73 = document.getElementById("ident73");
let num74 = document.getElementById("ident74");
let num75 = document.getElementById("ident75");
let num76 = document.getElementById("ident76");
let num77 = document.getElementById("ident77");
let num78 = document.getElementById("ident78");
let num79 = document.getElementById("ident79");
let num80 = document.getElementById("ident80");
let num81 = document.getElementById("ident81");
let num82 = document.getElementById("ident82");
let num83 = document.getElementById("ident83");
let num84 = document.getElementById("ident84");
let num85 = document.getElementById("ident85");
let num86 = document.getElementById("ident86");
let num87 = document.getElementById("ident87");
let num88 = document.getElementById("ident88");
let num89 = document.getElementById("ident89");
let num90 = document.getElementById("ident90");
let num91 = document.getElementById("ident91");
let num92 = document.getElementById("ident92");
let num93 = document.getElementById("ident93");
let num94 = document.getElementById("ident94");
let num95 = document.getElementById("ident95");
let num96 = document.getElementById("ident96");
let num97 = document.getElementById("ident97");
let num98 = document.getElementById("ident98");
let num99 = document.getElementById("ident99");
let num100 = document.getElementById("ident100");
let num101 = document.getElementById("ident101");
let num102 = document.getElementById("ident102");
let num103 = document.getElementById("ident103");
let num104 = document.getElementById("ident104");
let num105 = document.getElementById("ident105");
let num106 = document.getElementById("ident106");
let num107 = document.getElementById("ident107");
let num108 = document.getElementById("ident108");
let num109 = document.getElementById("ident109");
let num110 = document.getElementById("ident110");
let num111 = document.getElementById("ident111");
let num112 = document.getElementById("ident112");
let num113 = document.getElementById("ident113");
let num114 = document.getElementById("ident114");
let num115 = document.getElementById("ident115");
let num116 = document.getElementById("ident116");
let num117 = document.getElementById("ident117");
let num118 = document.getElementById("ident118");
let num119 = document.getElementById("ident119");

// cerrar modales
let cerrar17 = document.getElementById("cerrar17");
let cerrar19 = document.getElementById("cerrar19");
let cerrar21 = document.getElementById("cerrar21");
let cerrar23 = document.getElementById("cerrar23");
let cerrar39 = document.getElementById("cerrar39");
let cerrar41 = document.getElementById("cerrar41");
let cerrar43 = document.getElementById("cerrar43");


let activoNumberIndex = localStorage.getItem("NumberAnnyang_1");
console.log("annyang6: " + activoNumberIndex);



// inicio prueba
function numbersActives() {
    menuactivo = true;
    annyang.setLanguage('es-MX');
    annyang.start();
    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');

    // Código para texto plano
    const elementsToAnimateUniversal = [
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num15,
        num24, num25, num26, num27, num28, num29, num30, num31, num32, num33, num37, num44,
        num45, num46, num47, num48, num49, num50, num51, num52, num53, num54, num55, num56,
        num57, num59, num63, num64, num67, num68, num69, num70, num71, num72, num73, num74, num75,
        num76, num77, num78,
        num80, num84, num85, num87, num88, num89, num90, num91, num92, num93, num94, num95, num97, num101,
        num102, num103, num104, num105, num106, num107, num108, num109, num110, num111, num113, num117
    ];

    elementsToAnimateUniversal.forEach(element => {
        element.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // Código para botones y faqs    
    const elementsToAnimateFaqs = [
        cerrar_help, cerrarAyudaM, num1, num14, num16, num17, cerrar17, num18, num19, cerrar19,
        num20, num21, cerrar21, num22, num23, cerrar23, num32, num34, num35, num36, num38,
        cerrar39, num39, num40, cerrar41, num41, num42, num43, cerrar43, num58, num60, num61, num62,
        num65, num66, num79,
        num81, num82, num83, num86, num96, num98, num99, num100, num112, num114, num115, num116, num118, num119

    ]
    elementsToAnimateFaqs.forEach(elementFaq => {
        elementFaq.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    })
    localStorage.setItem("NumberAnnyang_1", "activado");
}

// fin prueba

function removeNumbers() {
    num0.classList.remove('ident_Cero', 'animate__animated', 'animate__heartBeat');

    // CODIGO PARA TEXTO PLANO
    const elementToRemoveUniversal = [
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12, num13, num15,
        num24, num25, num26, num27, num28, num29, num30, num31, num33, num37, num44, num45,
        num46, num47, num48, num49, num50, num51, num52, num53, num54, num55, num56, num57,
        num59, num63, num64, num67, num68, num69, num70, num71, num72, num73, num74, num75,
        num76, num77, num78, num80, num84, num85, num87, num88, num89, num90, num91, num92, num93, num94, num95, num97, num101,
        num102, num103, num104, num105, num106, num107, num108, num109, num110, num111, num113, num117
    ]

    elementToRemoveUniversal.forEach(elementUniversal => {
        elementUniversal.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // CÓDIGO PARA FAQS Y BOTONES    
    const elementsToRemoveFaqs = [
        cerrar_help, cerrarAyudaM, num1, num14, num16, num17, cerrar17, num18, num19, cerrar19,
        num20, num21, cerrar21, num22, num23, cerrar23, num32, num34, num35, num36, num38,
        num39, cerrar39, num40, cerrar41, num41, num42, cerrar43, num43, num58, num60, num61, num62,
        num65, num66, num79, num81, num82, num83, num86, num96, num98, num99, num100, num112, num114,
        num115, num116, num118, num119
    ]

    elementsToRemoveFaqs.forEach(elementToRemove => {
        elementToRemove.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat')
    });
    localStorage.setItem("NumberAnnyang_1", "desactivado");
}


let menuactivo = activoNumberIndex === "activado";
if (activoNumberIndex === "activado") {
    numbersActives();
    // annyang.setLanguage('es-MX');
    // annyang.start();
}


btn_access.addEventListener('click', function () {
    if (!menuactivo) {
        annyang.start();
        console.log("Inicio Reconocimiento de voz");
        numbersActives();
    } else if (menuactivo) {
        menuactivo = false;
        annyang.abort();
        console.log("Fin Reconocimiento de voz");
        removeNumbers();
    }
});




// function numbersActives() {
//     menuactivo = true;
//     cerrar_help.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     cerrarAyudaM.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');
//     num1.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num2.style.display = "flex";
//     num3.style.display = "inline-flex";
//     num4.style.display = "inline-flex";
//     num5.style.display = "inline-flex";
//     num6.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num7.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num8.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num9.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num10.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num11.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num12.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num13.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num14.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num15.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num16.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num17.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num18.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num19.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
//     num20.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num21.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num22.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num23.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
//     num24.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
// }