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
        let element = document.getElementById('section11');
        PositionTop100(element);
    }

    // let section12 = function () {
    //     let element = document.getElementById("section12");
    //     PositionTop100(element);
    // }
    let videoOn = false;
    let VideoPlay = document.getElementById("video2");
    let positionV = document.getElementById("vid2");
    let playVideo = function () {
        videoOn = true;
        VideoPlay.play();
        PositionTop100(positionV);
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo = function () {
        videoOn = false;
        if (videoOn == false) {
            VideoPlay.pause();
            PositionTop100(positionV);
        }
    }

    let playVideo1 = function () {
        if (!videoOn) {
            playVideo();
            let ocultar = document.getElementById("ident12");
            let mostrar = document.getElementById("pausa12");
            ocultar.classList.remove("ident_Universal");
            mostrar.classList.add("ident_Universal");
        } else {
            videoOn = true;
            offVideo();
            let mostrar = document.getElementById("ident12");
            let ocultar = document.getElementById("pausa12");
            mostrar.classList.add("ident_Universal");
            ocultar.classList.remove("ident_Universal");
        }
    }

    function screenFullVid() {
        VideoPlay.requestFullscreen();
    }

    let abrirfaqBasicaP = function () {
        let abrirfaq = document.getElementById("basic1");

        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.setAttribute('open', '');
        PositionTop100(abrirfaq);
    }

    let cerrarfaqBasicP = function () {
        let cerrarfaq = document.getElementById("basic1");
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.removeAttribute('open', '');
        cerrarfaq.setAttribute('close', '');
        PositionTop100(cerrarfaq);
    }

    let faqAbierto = false;

    function faqGuionVideo() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP();
            faqAbierto = true;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP();
            faqAbierto = false;
        }
    }

    let section15 = function () {
        let element = document.getElementById("section15Act1");
        PositionTop100(element);
    }

    // function download16() {
    //     let btn = document.getElementById("btnLectura");
    //     btn.click();
    // }
    let section16 = function () {
        let element = document.getElementById("section16Act1");
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

    let abrirModal17 = function () {
        let modal = document.getElementById("habilidad-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal17 = function () {
        let modal = document.getElementById("habilidad-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal19 = function () {
        let modal = document.getElementById("habilidad-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal19 = function () {
        let modal = document.getElementById("habilidad-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal21 = function () {
        let modal = document.getElementById("habilidad-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal21 = function () {
        let modal = document.getElementById("habilidad-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal23 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal23 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal25 = function () {
        let modal = document.getElementById("habilidad-5");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal25 = function () {
        let modal = document.getElementById("habilidad-5");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal27 = function () {
        let modal = document.getElementById("habilidad-6");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal27 = function () {
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

    function abrirModal_17() {
        if (modalAyuda0 == true || modalAbierto19 == true ||
            modalAbierto21 == true || modalAbierto23 == true ||
            modalAbierto25 == true || modalAbierto27 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
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
        abrirModal17();
        modalAbierto17 = true;
    }

    function abrirModal_19() {
        if (modalAyuda0 == true || modalAbierto17 == true ||
            modalAbierto21 == true || modalAbierto23 == true ||
            modalAbierto25 == true || modalAbierto27 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
            cerrarModal17();
            modalAbierto17 = false;
            cerrarModal21();
            modalAbierto21 = false;
            cerrarModal23();
            modalAbierto23 = false;
            cerrarModal25();
            modalAbierto25 = false;
            cerrarModal27();
            modalAbierto27 = false;
        }
        abrirModal19();
        modalAbierto19 = true;
    }

    function abrirModal_21() {
        if (modalAyuda0 == true || modalAbierto17 == true ||
            modalAbierto19 == true || modalAbierto23 == true ||
            modalAbierto25 == true || modalAbierto27 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
            cerrarModal17();
            modalAbierto17 = false;
            cerrarModal19();
            modalAbierto19 = false;
            cerrarModal23();
            modalAbierto23 = false;
            cerrarModal25();
            modalAbierto25 = false;
            cerrarModal27();
            modalAbierto27 = false;
        }
        abrirModal21();
        modalAbierto21 = true;
    }

    function abrirModal_23() {
        if (modalAyuda0 == true || modalAbierto17 == true ||
            modalAbierto19 == true || modalAbierto21 == true ||
            modalAbierto25 == true || modalAbierto27 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
            cerrarModal17();
            modalAbierto17 = false;
            cerrarModal19();
            modalAbierto19 = false;
            cerrarModal21();
            modalAbierto21 = false;
            cerrarModal25();
            modalAbierto25 = false;
            cerrarModal27();
            modalAbierto27 = false;
        }
        abrirModal23();
        modalAbierto23 = true;
    }

    function abrirModal_25() {
        if (modalAyuda0 == true || modalAbierto17 == true ||
            modalAbierto19 == true || modalAbierto21 == true ||
            modalAbierto23 == true || modalAbierto27 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
            cerrarModal17();
            modalAbierto17 = false;
            cerrarModal19();
            modalAbierto19 = false;
            cerrarModal21();
            modalAbierto21 = false;
            cerrarModal23();
            modalAbierto23 = false;
            cerrarModal27();
            modalAbierto27 = false;
        }
        abrirModal25();
        modalAbierto25 = true;
    }

    function abrirModal_27() {
        if (modalAyuda0 == true || modalAbierto17 == true ||
            modalAbierto19 == true || modalAbierto21 == true ||
            modalAbierto23 == true || modalAbierto25 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false
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
        }
        abrirModal27();
        modalAbierto27 = true;
    }

    function section29() {
        let element = document.getElementById("section29Act1");
        PositionTop100(element);
    }

    function section30() {
        let element = document.getElementById("section30Act1");
        PositionTop100(element);
    }

    function download31() {
        let download = document.getElementById("download31");
        download.click();
    }

    function click32() {
        let abrir = document.getElementById("click32");
        abrir.click();
    }

    function section33() {
        let element = document.getElementById("section33Act1");
        PositionTop100(element);
    }

    function click34() {
        let element = document.getElementById("download34");
        element.click();
    }

    function section35() {
        let element = document.getElementById("sectionAct35");
        PositionTop100(element)
    }

    function download36() {
        let element = document.getElementById("download36");
        element.click();
    }

    function section37() {
        let element = document.getElementById("sectionAct37");
        PositionTop100(element)
    }

    let AbrirFaq38 = function () {
        let abrirfaqL1 = document.getElementById("faq38");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq38 = function () {
        let cerrarfaqL1 = document.getElementById("faq38");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let faqAbierto38 = false;

    function abrirCerrarfaq38() {
        let sectionLineamiento = document.getElementById("sectionAct38");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto38) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq38();
            faqAbierto38 = true;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq38();
            faqAbierto38 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq2
    let AbrirFaq39 = function () {
        let abrirfaqL2 = document.getElementById("faq39");
        abrirfaqL2.setAttribute('aria-expanded', 'true');
        abrirfaqL2.setAttribute('open', '');
    }

    let CerrarFaq39 = function () {
        let cerrarfaqL2 = document.getElementById("faq39");
        cerrarfaqL2.setAttribute('aria-expanded', 'false');
        cerrarfaqL2.removeAttribute('open', '');
    }

    let faqAbierto39 = false;
    function abrirCerrarfaq39() {
        let sectionLineamiento = document.getElementById("sectionAct38");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto39) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq39();
            faqAbierto39 = true;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq39();
            faqAbierto39 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq3
    let AbrirFaq40 = function () {
        let abrirfaqL3 = document.getElementById("faq40");
        abrirfaqL3.setAttribute('aria-expanded', 'true');
        abrirfaqL3.setAttribute('open', '');
    }

    let CerrarFaq40 = function () {
        let cerrarfaqL3 = document.getElementById("faq40");
        cerrarfaqL3.setAttribute('aria-expanded', 'false');
        cerrarfaqL3.removeAttribute('open', '');
    }

    let faqAbierto40 = false;
    function abrirCerrarfaq40() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto40) {
            let section38 = document.getElementById("sectionAct38");
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq40();
            faqAbierto40 = true;

            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(section38);
        } else {
            let section38 = document.getElementById("sectionAct38");
            CerrarFaq40();
            faqAbierto40 = false;
            PositionTop100(section38);
        }
    }
    // fin faq
    function section41() {
        let element = document.getElementById("section41Act1");
        PositionTop100(element);
    }

    function section42() {
        let element = document.getElementById("section42Act1");
        PositionTop100(element);
    }

    function section43() {
        let element = document.getElementById("section43Act1");
        PositionTop100(element);
    }

    function section44() {
        let element = document.getElementById("section44Act1");
        PositionTop100(element);
    }

    function download45() {
        let element = document.getElementById("download45Act1");
        element.click();
    }

    function download46() {
        let element = document.getElementById("download46Act1");
        element.click();
    }

    function section47() {
        let element = document.getElementById("section47Act1");
        PositionTop100(element);
    }

    function click48() {
        let abrir = document.getElementById("click48");
        abrir.click();
    }
    function click49() {
        let abrir = document.getElementById("click49");
        abrir.click();
    }
    function click50() {
        let abrir = document.getElementById("click50");
        abrir.click();
    }
    function click51() {
        let abrir = document.getElementById("click51");
        abrir.click();
    }

    function section52() {
        let element = document.getElementById("section52Act1");
        PositionTop100(element);
    }

    function section53() {
        let element = document.getElementById("section53Act1");
        PositionTop100(element);
    }
    // download54
    function download54() {
        let element = document.getElementById("download54");
        element.click();
    }

    function section55() {
        let element = document.getElementById("section55Act1");
        PositionTop100(element);
    }
    // Inicio Faqs 56, 57, 58

    let AbrirFaq56 = function () {
        let abrirfaqL1 = document.getElementById("faq56");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq56 = function () {
        let cerrarfaqL1 = document.getElementById("faq56");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let faqAbierto56 = false;

    function abrirCerrarfaq56() {
        let sectionLineamiento = document.getElementById("sectionFaqs55");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto56) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq56();
            faqAbierto56 = true;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq56();
            faqAbierto56 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq2
    let AbrirFaq57 = function () {
        let abrirfaqL2 = document.getElementById("faq57");
        abrirfaqL2.setAttribute('aria-expanded', 'true');
        abrirfaqL2.setAttribute('open', '');
    }

    let CerrarFaq57 = function () {
        let cerrarfaqL2 = document.getElementById("faq57");
        cerrarfaqL2.setAttribute('aria-expanded', 'false');
        cerrarfaqL2.removeAttribute('open', '');
    }

    let faqAbierto57 = false;
    function abrirCerrarfaq57() {
        let sectionLineamiento = document.getElementById("sectionFaqs55");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto57) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq57();
            faqAbierto57 = true;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq57();
            faqAbierto57 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq3
    let AbrirFaq58 = function () {
        let abrirfaqL3 = document.getElementById("faq58");
        abrirfaqL3.setAttribute('aria-expanded', 'true');
        abrirfaqL3.setAttribute('open', '');
    }

    let CerrarFaq58 = function () {
        let cerrarfaqL3 = document.getElementById("faq58");
        cerrarfaqL3.setAttribute('aria-expanded', 'false');
        cerrarfaqL3.removeAttribute('open', '');
    }

    let faqAbierto58 = false;
    function abrirCerrarfaq58() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto58) {
            let section58 = document.getElementById("sectionFaqs55");
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq58();
            faqAbierto58 = true;
            PositionTop100(section58);

            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(section58);
        } else {
            let section58 = document.getElementById("sectionAct58");
            CerrarFaq58();
            faqAbierto58 = false;
            PositionTop100(section58);
        }
    }
    // fin faq
    // fin faqs 56, 57, 58
    let section59 = function () {
        let element = document.getElementById('section59Act1');
        PositionTop100(element);
    }

    let section60 = function () {
        let element = document.getElementById('ident57');
        PositionTop100(element);
    }

    function section61() {
        let element = document.getElementById("ident58");
        PositionTop100(element);
    }

    let tab64 = function () {
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab")
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");

        firstab.classList.remove("active");
        secondtab.classList.remove("active");
        thirdtab.classList.add("active")
        parrafo1.classList.remove("active");
        parrafo2.classList.remove("active");
        parrafo3.classList.add("active");
    }

    let tab63 = function () {
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab")
        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");

        firstab.classList.remove("active");
        thirdtab.classList.remove("active");
        secondtab.classList.add("active");

        parrafo2.classList.add("active");
        parrafo1.classList.remove("active");
        parrafo3.classList.remove("active");
    }

    let tab62 = function () {
        let thirdtab = document.getElementById("thirdtab");
        let firstab = document.getElementById("firstTab")
        let secondtab = document.getElementById("secondtab");

        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");

        firstab.classList.add("active");
        secondtab.classList.remove("active");
        thirdtab.classList.remove("active");

        parrafo1.classList.add("active");
        parrafo2.classList.remove("active");
        parrafo3.classList.remove("active");
    }

    function section65() {
        let element = document.getElementById("ident62");
        PositionTop100(element);
    }

    function section66() {
        let element = document.getElementById("section66Act1");
        PositionTop100(element);
    }

    function download67() {
        let download = document.getElementById("download67");
        download.click();
    }

    function download68() {
        let download = document.getElementById("download68");
        download.click();
    }

    function section69() {
        let element = document.getElementById("section69Act1");
        PositionTop100(element);
    }

    function download70() {
        let download = document.getElementById("download70");
        download.click();
    }

    function download71() {
        let download = document.getElementById("download71");
        download.click();
    }

    function section72() {
        let element = document.getElementById("section72Act1");
        PositionTop100(element);
    }

    function section73() {
        let element = document.getElementById("section73Act1");
        PositionTop100(element);
    }

    function download74() {
        let download = document.getElementById("download74");
        download.click();
    }

    function section75() {
        let element = document.getElementById("section75Act1");
        PositionTop100(element);
    }

    // Inicio Faqs 76, 77, 78
    let AbrirFaq76 = function () {
        let abrirfaq76 = document.getElementById("faq76");
        abrirfaq76.setAttribute('aria-expanded', 'true');
        abrirfaq76.setAttribute('open', '');
    }

    let CerrarFaq76 = function () {
        let cerrarfaq76 = document.getElementById("faq76");
        cerrarfaq76.setAttribute('aria-expanded', 'false');
        cerrarfaq76.removeAttribute('open', '');
    }

    //section sectionFaq76
    let faqAbierto76 = false;

    function abrirCerrarfaq76() {
        let sectionLineamiento = document.getElementById("sectionFaq76");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto76) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq76();
            faqAbierto76 = true;

            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq76();
            faqAbierto76 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq2
    let AbrirFaq77 = function () {
        let abrirfaqL2 = document.getElementById("faq77");
        abrirfaqL2.setAttribute('aria-expanded', 'true');
        abrirfaqL2.setAttribute('open', '');
    }

    let CerrarFaq77 = function () {
        let cerrarfaqL2 = document.getElementById("faq77");
        cerrarfaqL2.setAttribute('aria-expanded', 'false');
        cerrarfaqL2.removeAttribute('open', '');
    }

    let faqAbierto77 = false;
    function abrirCerrarfaq77() {
        let sectionLineamiento = document.getElementById("sectionFaq76");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto77) {
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq77();
            faqAbierto77 = true;

            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq78();
            faqAbierto78 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq77();
            faqAbierto77 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    // faq3
    let AbrirFaq78 = function () {
        let abrirfaqL3 = document.getElementById("faq78");
        abrirfaqL3.setAttribute('aria-expanded', 'true');
        abrirfaqL3.setAttribute('open', '');
    }

    let CerrarFaq78 = function () {
        let cerrarfaqL3 = document.getElementById("faq78");
        cerrarfaqL3.setAttribute('aria-expanded', 'false');
        cerrarfaqL3.removeAttribute('open', '');
    }

    let faqAbierto78 = false;
    function abrirCerrarfaq78() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto78) {
            let section78 = document.getElementById("sectionFaq76");
            // Si el FAQ está cerrado, ábrelo
            AbrirFaq78();
            faqAbierto78 = true;

            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            CerrarFaq38();
            faqAbierto38 = false;
            CerrarFaq39();
            faqAbierto39 = false;
            CerrarFaq40();
            faqAbierto40 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq57();
            faqAbierto57 = false;
            CerrarFaq58();
            faqAbierto58 = false;
            PositionTop100(section78);
        } else {
            let section78 = document.getElementById("sectionFaq76");
            CerrarFaq78();
            faqAbierto78 = false;
            PositionTop100(section78);
        }
    }
    // fin faq 76, 77, 78
    function section79() {
        let element = document.getElementById("section79Act1");
        PositionTop100(element);
    }

    function download80() {
        let download = document.getElementById("btnLectura");
        download.click();
    }

    let volver_Arriba = document.getElementById("btnVolver_Arriba");
    let volverA = function () {
        volver_Arriba.click();
    }

    var commands = {

        '0': abrirModalAyuda,
        'número 0': abrirModalAyuda,
        'cero': abrirModalAyuda,
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

        '12': playVideo1,
        'número 12': playVideo1,
        'Doce': playVideo1,
        'Pausa': playVideo1,
        'Play': playVideo1,

        // '13': screenFullVid,
        // 'trece': screenFullVid,

        '13': faqGuionVideo,
        'número 13': faqGuionVideo,
        'trece': faqGuionVideo,

        '14': section16,
        'número 14': section16,
        'catorce': section16,

        '15': abrirModal_17,
        'número 15': abrirModal_17,
        'quince': abrirModal_17,

        '16': cerrarModal17,
        'número 16': cerrarModal17,
        'dieciséis': cerrarModal17,

        '17': abrirModal_19,
        'número 17': abrirModal_19,
        'diecisiete': abrirModal_19,

        '18': cerrarModal19,
        'número 18': cerrarModal19,
        'dieciocho': cerrarModal19,

        '19': abrirModal_21,
        'número 19': abrirModal_21,
        'diecinueve': abrirModal_21,

        '20': cerrarModal21,
        'número 20': cerrarModal21,
        'veinte': cerrarModal21,

        '21': abrirModal_23,
        'número 21': abrirModal_23,
        'veintiuno': abrirModal_23,

        '22': cerrarModal23,
        'número 22': cerrarModal23,
        'veintidos': cerrarModal23,

        '23': abrirModal_25,
        'número 23': abrirModal_25,
        'veintitres': abrirModal_25,

        '24': cerrarModal25,
        'número 24': cerrarModal25,
        'veinticuatro': cerrarModal25,

        '25': abrirModal_27,
        'número 25': abrirModal_27,
        'veinticinco': abrirModal_27,

        '26': cerrarModal27,
        'número 26': cerrarModal27,
        'veintiséis': cerrarModal27,

        '27': section29,
        'número 27': section29,
        'veintisiete': section29,

        '28': section30,
        'número 28': section30,

        '29': download31,
        'número 29': download31,
        'treinta y uno': download31,

        '30': click32,
        'número 30': click32,
        'treinta': click32,

        '31': section33,
        'número 31': section33,
        'treinta y uno': section33,

        '32': click34,
        'número 32': click34,
        'treinta y dos': click34,

        '33': section35,
        'número 33': section35,
        'treinta y tres': section35,

        '34': download36,
        'número 34': download36,
        'treinta y cuatro': download36,

        '35': section37,
        'número 35': section37,
        'treinta y cinco': section37,

        '36': abrirCerrarfaq38,
        'número 36': abrirCerrarfaq38,
        'treinta y seis': abrirCerrarfaq38,

        '37': abrirCerrarfaq39,
        'número 37': abrirCerrarfaq39,
        'treinta y siete': abrirCerrarfaq39,

        '38': abrirCerrarfaq40,
        'número 38': abrirCerrarfaq40,
        'treinta y ocho': abrirCerrarfaq40,

        '39': section41,
        'número 39': section41,
        'treinta y nueve': section41,

        '40': section42,
        'cuarenta': section42,


        '41': section44,
        'número 41': section44,
        'cuarenta y uno': section44,

        '42': download45,
        'número 42': download45,
        'cuarenta y dos': download45,

        '43': download46,
        'número 43': download46,
        'cuarenta y tres': download46,

        '44': section47,
        'número 44': section47,
        'cuarenta y cuatro': section47,

        '45': click48,
        'cuarenta y cinco': click48,

        '46': click49,
        'cuarenta y seis': click49,

        '47': click50,
        'número 47': click50,
        'cuanrenta y siete': click50,

        '48': click51,
        'número 48': click51,
        'cuarenta y ocho': click51,

        '49': section52,
        'número 49': section52,
        'cuarenta y nueve': section52,

        '50': section53,
        'número 50': section53,
        'cincuenta': section53,

        '51': download54,
        'número 51': download54,
        'cincuenta y uno': download54,

        '52': section55,
        'número 52': section55,
        'cincuenta y dos': section55,

        '53': abrirCerrarfaq56,
        'número 53': abrirCerrarfaq56,
        'cincuenta y tres': abrirCerrarfaq56,

        '54': abrirCerrarfaq57,
        'número 54': abrirCerrarfaq57,
        'cincuenta y cuatro': abrirCerrarfaq57,

        '55': abrirCerrarfaq58,
        'número 55': abrirCerrarfaq58,
        'cincuenta y cinco': abrirCerrarfaq58,

        '56': section59,
        'número 56': section59,
        'cincuenta y seis': section59,

        '57': section60,
        'número 57': section60,
        'cincuenta y siete': section60,

        '58': section61,
        'número 58': section61,
        'cincuenta y ocho': section61,

        '59': tab62,
        'número 59': tab62,
        'cincuenta y nueve': tab62,

        '60': tab63,
        'número 60': tab63,
        'sesenta': tab63,

        '61': tab64,
        'número 61': tab64,
        'sesenta y uno': tab64,

        '62': section65,
        'número 62': section65,
        'sesenta y dos': section65,

        '63': section66,
        'número 63': section66,
        'sesenta y tres': section66,

        '64': download67,
        'número 64': download67,
        'sesenta y cuatro': download67,

        '65': download68,
        'número 65': download68,
        'sesenta y cinco': download68,

        '66': section69,
        'número 66': section69,
        'sesenta y seis': section69,

        '67': download70,
        'número 67': download70,
        'sesenta y siete': download70,

        '68': download71,
        'sesenta y ocho': download71,

        '69': section72,
        'número 69': section72,
        'sesenta y nueve': section72,

        '70': section73,
        'número 70': section73,
        'setenta': section73,

        '71': download74,
        'número 71': download74,
        'setenta y uno': download74,

        '72': section75,
        'número 72': section75,
        'setenta y dos': section75,

        '73': abrirCerrarfaq76,
        'número 73': abrirCerrarfaq76,
        'setenta y tres': abrirCerrarfaq76,

        '74': abrirCerrarfaq77,
        'número 74': abrirCerrarfaq77,
        'setenta y cuatro': abrirCerrarfaq77,

        '75': abrirCerrarfaq78,
        'número 75': abrirCerrarfaq78,
        'setenta y cinco': abrirCerrarfaq78,

        '76': section79,
        'número 76': section79,
        'setenta y seis': section79,

        '77': download80,
        'número 77': download80,
        'setenta y siete': download80,

        '78': volverA,
        'número 78': volverA,
        'setenta y ocho': volverA,

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
let num17 = document.getElementById("ident17");
let num19 = document.getElementById("ident19");
let num21 = document.getElementById("ident21");
let num23 = document.getElementById("ident23");
let num25 = document.getElementById("ident25");
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

// BTNS PARA CERRAR MODALES
let num16 = document.getElementById("ident16");
let num16_1 = document.getElementById("ident16_1");

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

let activoNumberIndex = localStorage.getItem("NumberAnnyang_1");

function numbersActives() {
    menuactivo = true;
    annyang.setLanguage('es-MX');
    annyang.start();
    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');

    // Código para texto plano
    const elementsToAnimateUniversal = [
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12,
        num14, num27, num28, num29, num30, num31, num32, num33, num35,
        num39, num40, num41, num42, num43, num44, num45, num46, num47, num48,
        num49, num50, num52, num56, num57, num58, num62, num63, num64, num65,
        num66, num67, num68, num69, num70, num72, num76,
    ];

    elementsToAnimateUniversal.forEach(element => {
        element.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // Código para botones y faqs    
    const elementsToAnimateFaqs = [
        cerrar_help, cerrarAyudaM, num1, num13,
        num15, num16, num16_1, num17, num18, num18_1, num19,
        num20, num20_1, num21, num22, num22_1, num23, num24,
        num24_1, num25, num26, num26_1, num34, num36, num37, num38,
        num51, num53, num54, num55, num59, num60, num61, num71, num73,
        num74, num75, num77, num78,


    ]
    elementsToAnimateFaqs.forEach(elementFaq => {
        elementFaq.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    })
    localStorage.setItem("NumberAnnyang_1", "activado");
}
// fin función numbersActivos

// inicio
function removeNumbers() {
    num0.classList.remove('ident_Cero', 'animate__animated', 'animate__heartBeat');

    // CODIGO PARA TEXTO PLANO
    const elementToRemoveUniversal = [
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num12,
        num14, num27, num28, num29, num30, num31, num32, num33, num35,
        num39, num40, num41, num42, num43, num44, num45, num46, num47, num48,
        num49, num50, num52, num56, num57, num58, num62, num63, num64, num65,
        num66, num67, num68, num69, num70, num72, num76,
    ]

    elementToRemoveUniversal.forEach(elementUniversal => {
        elementUniversal.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // CÓDIGO PARA FAQS Y BOTONES    
    const elementsToRemoveFaqs = [
        cerrar_help, cerrarAyudaM, num1, num13,
        num15, num16, num16_1, num17, num18, num18_1, num19,
        num20, num20_1, num21, num22, num22_1, num23, num24,
        num24_1, num25, num26, num26_1, num34, num36, num37, num38,
        num51, num53, num54, num55, num59, num60, num61, num71, num73,
        num74, num75, num77, num78,
    ]

    elementsToRemoveFaqs.forEach(elementToRemove => {
        elementToRemove.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat')
    });
    localStorage.setItem("NumberAnnyang_1", "desactivado");
}

// fin Numbers Remove

let menuactivo = activoNumberIndex === "activado";
if (activoNumberIndex === "activado") {
    numbersActives();
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
