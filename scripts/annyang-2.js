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
        location.href = './info-gral.html';
    }

    var getPageNext2 = function () {
        location.href = './modulo-1.html';
    }
    let activity = function () {
        location.href = './actividad.html';
    }

    let option1 = function () {
        let btnOpction1 = document.getElementById("activity4-1");
        btnOpction1.click();
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

    let section11 = function () {
        let element = document.getElementById('section11');
        PositionTop100(element);
    }

    let section12 = function () {
        let element = document.getElementById("section12");
        PositionTop100(element);
    }

    let section13 = function () {
        let element = document.getElementById("section13");
        PositionTop100(element);
    }

    let section14 = function () {
        let element = document.getElementById("section14");
        PositionTop100(element);
    }

    let btn = document.getElementById("programaEduc1");
    let download15 = function () {
        btn.click();
    }

    function download16() {
        let btn = document.getElementById("programaEduc2");
        btn.click();
    }

    function section17() {
        let element = document.getElementById("section17");
        PositionTop100(element);
    }

    function section18() {
        let element = document.getElementById("section18");
        PositionTop100(element);
    }

    function download19() {
        let btn = document.getElementById("evaluacionActividades");
        PositionTop100(btn)
        btn.click();
    }

    function section20() {
        let section = document.getElementById("section20");
        PositionTop100(section);
    }

    function section21() {
        let section = document.getElementById("section21");
        PositionTop100(section);
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

    function section24() {
        let section = document.getElementById("section24");
        PositionTop100(section);
    }

    // prueba faq    

    let AbrirFaqLineamiento1 = function () {
        let abrirfaqL1 = document.getElementById("faq1");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaqLineamiento1 = function () {
        let cerrarfaqL1 = document.getElementById("faq1");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let faqAbierto = false;

    function abrirCerrarfaq1() {
        let sectionLineamiento = document.getElementById("section24");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaqLineamiento1();
            faqAbierto = true;
            PositionTop100(sectionLineamiento);

            CerrarFaqLineamiento2();
            faqAbierto2 = false;
            CerrarFaqLineamiento3();
            faqAbierto3 = false;

        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaqLineamiento1();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq2
    let AbrirFaqLineamiento2 = function () {
        let abrirfaqL2 = document.getElementById("faq2");
        abrirfaqL2.setAttribute('aria-expanded', 'true');
        abrirfaqL2.setAttribute('open', '');
    }

    let CerrarFaqLineamiento2 = function () {
        let cerrarfaqL2 = document.getElementById("faq2");
        cerrarfaqL2.setAttribute('aria-expanded', 'false');
        cerrarfaqL2.removeAttribute('open', '');
    }

    let faqAbierto2 = false;
    function abrirCerrarfaq2() {
        let sectionLineamiento = document.getElementById("section24");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto2) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaqLineamiento2();
            faqAbierto2 = true;
            PositionTop100(sectionLineamiento);

            CerrarFaqLineamiento1();
            faqAbierto = false;
            CerrarFaqLineamiento3();
            faqAbierto3 = false;
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaqLineamiento2();
            faqAbierto2 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq3
    let AbrirFaqLineamiento3 = function () {
        let abrirfaqL3 = document.getElementById("faq3");
        abrirfaqL3.setAttribute('aria-expanded', 'true');
        abrirfaqL3.setAttribute('open', '');
    }

    let CerrarFaqLineamiento3 = function () {
        let cerrarfaqL3 = document.getElementById("faq3");
        cerrarfaqL3.setAttribute('aria-expanded', 'false');
        cerrarfaqL3.removeAttribute('open', '');
    }

    let faqAbierto3 = false;
    function abrirCerrarfaq3() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto3) {
            let sectionLineamiento = document.getElementById("section24");
            // Si el FAQ está cerrado, ábrelo
            AbrirFaqLineamiento3();
            faqAbierto3 = true;
            PositionTop100(sectionLineamiento);

            CerrarFaqLineamiento1();
            faqAbierto = false;
            CerrarFaqLineamiento2();
            faqAbierto2 = false;
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaqLineamiento3();
            faqAbierto3 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function section28() {
        let section = document.getElementById("section28");
        PositionTop100(section);
    }

    function download29() {
        let btn = document.getElementById("fuentesInf");
        btn.click();
    }

    function download30() {
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

        '11': section11,
        'once': section11,

        '12': section12,
        'doce': section12,

        '13': section13,
        'trece': section13,

        '14': section14,
        'catorce': section14,

        '15': download15,
        'quince': download15,

        '16': download16,
        'dieciséis': download16,

        '17': section17,
        'diecisiete': section17,

        '18': section18,
        'diecisiete': section18,

        '19': download19,
        'diecinueve': download19,

        '20': section20,
        'veinte': section20,

        '21': section21,
        'veintiuno': section21,

        "23": secondtab,
        "veintitrés": secondtab,

        "22": firstab,
        "veintidos": firstab,

        '24': section24,
        'veinticuatro': section24,

        '25': abrirCerrarfaq1,
        'veinticinco': abrirCerrarfaq1,

        '26': abrirCerrarfaq2,
        'veintiséis': abrirCerrarfaq2,

        '27': abrirCerrarfaq3,
        'veintiséis': abrirCerrarfaq3,

        '28': section28,
        'veintiocho': section28,

        '29': download29,
        'veintinueve': download29,

        '30': download30,
        'treinta': download30,

        '31': volverA,
        'treinta y uno': volverA,

        'F5': refreshPage,
        'efe cinco': refreshPage,


        'Abrir modal esquema': abrirModalEsquema,
        "Cerrar modal esquema": cerrarmodalEsquema,
        "Actividad": activity,
        "Abrir opción 1": option1
    };

    annyang.addCommands(commands);
    // inicio
    // prueba
    annyang.addCallback("result", frases => {
        console.log("Usted ha dicho: ", frases);
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted ha dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });
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
    num14.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num15.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num16.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num17.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num18.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num19.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num20.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num21.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num22.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num23.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num24.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num25.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num26.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num27.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num28.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num29.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
    num30.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num31.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    annyang.setLanguage('es-MX');
    annyang.start();
}

btn_access.addEventListener('click', function () {
    if (!menuactivo) {
        menuactivo = true;
        annyang.setLanguage('es-MX');
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
        num14.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num15.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num16.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num17.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num18.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num19.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num20.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num21.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num22.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num23.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num24.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num25.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num26.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num27.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num28.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num29.classList.add("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num30.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num31.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        localStorage.setItem("NumberAnnyang_1", "activado");
    } else if (menuactivo) {
        menuactivo = false;
        annyang.abort();
        console.log("Fin Reconocimiento de voz");
        btn_access.style.transitionDuration = "1s";
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
        num14.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num15.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num16.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num17.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num18.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num19.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num20.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num21.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num22.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num23.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num24.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num25.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num26.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num27.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num28.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num29.classList.remove("ident_Universal", 'animate__animated', 'animate__heartBeat');
        num30.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num31.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        localStorage.setItem("NumberAnnyang_1", "desactivado");
    }
});
