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
        location.href = '../pcsp-2024/modulo-1/actividad.html';
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
    let positionV = document.getElementById("vid2");
    let playVideo = function () {
        videoOn = true;
        VideoPlay.play();
        PositionTop100(positionV);
        // VideoPlay.requestFullscreen();
        num12.style.backgroundColor = "#f8c5fd3d";
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
            // let position = document.getElementById("video2");
            playVideo();
            // PositionTop100(position);
        } else {
            let position = document.getElementById("video2");
            videoOn = true;
            offVideo();
            // PositionTop100(position);
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
        let element = document.getElementById('ident60');
        PositionTop100(element);
    }

    function section61() {
        let element = document.getElementById("ident61");
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
        let element = document.getElementById("ident65");
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
        'cero': abrirModalAyuda,
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
        'Seis': getPageNext3,
        'seis': getPageNext3,
        'número seis': getPageNext3,

        '11': section11,
        'once': section11,

        '12': playVideo1,
        'Doce': playVideo1,
        'Pausa': playVideo1,
        'Play': playVideo1,

        '13': screenFullVid,
        'trece': screenFullVid,

        '14': faqGuionVideo,
        'catorce': faqGuionVideo,

        '15': section15,
        'quince': section15,

        '16': section16,
        'dieciséis': section16,

        '17': abrirModal_17,
        'diecisiete': abrirModal_17,

        '18': cerrarModal17,
        'dieciocho': cerrarModal17,

        '19': abrirModal_19,
        'diecinueve': abrirModal_19,

        '20': cerrarModal19,
        'veinte': cerrarModal19,

        '21': abrirModal_21,
        'veintiuno': abrirModal_21,

        '22': cerrarModal21,
        'veintidos': cerrarModal21,

        '23': abrirModal_23,
        'veintitres': abrirModal_23,

        '24': cerrarModal23,
        'veinticuatro': cerrarModal23,

        '25': abrirModal_25,
        'veinticinco': abrirModal_25,

        '26': cerrarModal25,
        'veintiséis': cerrarModal25,

        '27': abrirModal_27,
        'veintisiete': abrirModal_27,

        '28': cerrarModal27,
        'veintiocho': cerrarModal27,

        '29': section29,
        'veintinueve': section29,

        '30': section30,
        'treinta': section30,

        '31': download31,
        'treinta y uno': download31,

        '32': click32,
        'treinta y dos': click32,

        '33': section33,
        'treinta y tres': section33,

        '34': click34,
        'treinta y cuatro': click34,

        '35': section35,
        'treinta y cinco': section35,

        '36': download36,
        'treinta y seis': download36,

        '37': section37,
        'treinta y siete': section37,

        '38': abrirCerrarfaq38,
        'treinta y ocho': abrirCerrarfaq38,

        '39': abrirCerrarfaq39,
        'treinta y nueve': abrirCerrarfaq39,

        '40': abrirCerrarfaq40,
        'Cuarenta': abrirCerrarfaq40,

        '41': section41,
        'cuarenta y uno': section41,

        '42': section42,
        'cuarenta y dos': section42,

        '43': section43,
        'cuarenta y tres': section43,

        '44': section44,
        'cuarenta y cuatro': section44,

        '45': download45,
        'cuarenta y cinco': download45,

        '46': download46,
        'cuarenta y seis': download46,

        '47': section47,
        'cuarenta y siete': section47,

        '48': click48,
        'cuarenta y ocho': click48,

        '49': click49,
        'cuarenta y nueve': click49,

        '50': click50,
        'cincuenta': click50,

        '51': click51,
        'cincuenta y uno': click51,

        '52': section52,
        'cincuenta y dos': section52,

        '53': section53,
        'cincuenta y tres': section53,

        '54': download54,
        'cincuenta y cuatro': download54,

        '55': section55,
        'cincuenta y cinco': section55,

        '56': abrirCerrarfaq56,
        'cincuenta y seis': abrirCerrarfaq56,

        '57': abrirCerrarfaq57,
        'cincuenta y siete': abrirCerrarfaq57,

        '58': abrirCerrarfaq58,
        'cincuenta y ocho': abrirCerrarfaq58,

        '59': section59,
        'cincuenta y nueve': section59,

        '60': section60,
        'sesenta': section60,

        '61': section61,
        'sesenta y uno': section61,

        '62': tab62,
        'sesenta y dos': tab62,

        '63': tab63,
        'sesenta y tres': tab63,

        '64': tab64,
        'sesenta y cuatro': tab64,

        '65': section65,
        'sesenta y cinco': section65,

        '66': section66,
        'sesenta y seis': section66,

        '67': download67,
        'sesenta y siete': download67,

        '68': download68,
        'sesenta y ocho': download68,

        '69': section69,
        'sesenta y nueve': section69,

        '70': download70,
        'setenta': download70,

        '71': download71,
        'setenta y uno': download71,

        '72': section72,
        'setenta y dos': section72,

        '73': section73,
        'setenta y tres': section73,

        '74': download74,
        'setenta y cuatro': download74,

        '75': section75,
        'setenta y cinco': section75,

        '76': abrirCerrarfaq76,
        'setenta y seis': abrirCerrarfaq76,

        '77': abrirCerrarfaq77,
        'setenta y siete': abrirCerrarfaq77,

        '78': abrirCerrarfaq78,
        'setenta y ocho': abrirCerrarfaq78,

        '79': section79,
        'setenta y nueve': section79,

        '80': download80,
        'Ochenta': download80,

        '81': volverA,
        'Ochenta y Uno': volverA,

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
    num51.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num52.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');


    num53.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num54.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num55.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num56.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num57.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num58.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num59.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num60.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num61.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num62.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num63.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num64.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num65.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num66.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num67.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num68.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num69.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num70.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num71.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num72.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num73.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num74.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num75.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num76.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num77.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num78.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num79.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    num80.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    num81.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

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
        num51.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num52.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');

        num53.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num54.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num55.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num56.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num57.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num58.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num59.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num60.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num61.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num62.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num63.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num64.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num65.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num66.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num67.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num68.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num69.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num70.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num71.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num72.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num73.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num74.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num75.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num76.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num77.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num78.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num79.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num80.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num81.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');

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

        cerrar_help.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        cerrarAyudaM.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

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
        num51.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num52.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');

        num53.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num54.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num55.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num56.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num57.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num58.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num59.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num60.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num61.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num62.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num63.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num64.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

        num65.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num66.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num67.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num68.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num69.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num70.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num71.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num72.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num73.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num74.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num75.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num76.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num77.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num78.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num79.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
        num80.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');
        num81.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat');

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
