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
        let element = document.getElementById('section11M3A');
        PositionTop100(element);
    }

    let section12 = function () {
        let element = document.getElementById("section12Act2");
        PositionTop100(element);
    }

    let videoOn = false;
    let VideoPlay = document.getElementById("video58");
    let positionVid1 = document.getElementById("section58Act3");
    let playVideo = function () {
        videoOn = true;
        VideoPlay.play();
        PositionTop100(positionVid1);
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo = function () {
        videoOn = false;
        if (videoOn == false) {
            VideoPlay.pause();
            PositionTop100(positionVid1);
        }
    }

    let playVideo58 = function () {
        if (!videoOn) {
            playVideo();
            let ocultar = document.getElementById("ident58");
            let mostrar = document.getElementById("pausa58");
            ocultar.classList.remove("ident_Universal");
            mostrar.classList.add("ident_Universal");
        } else {
            videoOn = true;
            offVideo();
            let mostrar = document.getElementById("ident58");
            let ocultar = document.getElementById("pausa58");
            mostrar.classList.add("ident_Universal");
            ocultar.classList.remove("ident_Universal");
        }
    }

    // video 2:
    let videoOn90 = false;
    let VideoPlay90 = document.getElementById("video90");
    let positionVid2 = document.getElementById("SectionVideo90");
    let playVideo2 = function () {
        videoOn90 = true;
        VideoPlay90.play();
        PositionTop100(positionVid2);
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo2 = function () {
        videoOn90 = false;
        if (videoOn90 == false) {
            VideoPlay90.pause();
            PositionTop100(positionVid2);
        }
    }

    let playVideo90 = function () {
        if (!videoOn90) {
            let ocultar = document.getElementById("ident90");
            let mostrar = document.getElementById("pausa90");
            ocultar.classList.remove("ident_Universal");
            mostrar.classList.add("ident_Universal");
            playVideo2();
        } else {
            let mostrar = document.getElementById("ident90");
            let ocultar = document.getElementById("pausa90");
            mostrar.classList.add("ident_Universal");
            ocultar.classList.remove("ident_Universal");
            videoOn90 = true;
            offVideo2();
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

    function abrircerrarfaqAyuda() {
        let sectionLineamiento = document.getElementById("faqGuionVideo14");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo            
            abrirfaqBasicaP();
            faqAbierto = true;

            CerrarFaq31();
            faqAbierto31 = false;
            AbrirFaq32();
            faqAbierto32 = true;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
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

    let abrirModal12 = function () {
        let modal = document.getElementById("modelo-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal12 = function () {
        let modal = document.getElementById("modelo-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal14 = function () {
        let modal = document.getElementById("modelo-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal14 = function () {
        let modal = document.getElementById("modelo-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal16 = function () {
        let modal = document.getElementById("modelo-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal16 = function () {
        let modal = document.getElementById("modelo-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    // let abrirModal22 = function () {
    //     let modal = document.getElementById("habilidad-4");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "block";
    //     modal.style.paddingRight = "14px"
    //     modal.classList.add("show");
    //     document.body.classList.add("modal-open");
    //     backdrop.style.display = "block";
    // }

    // let cerrarModal22 = function () {
    //     let modal = document.getElementById("habilidad-4");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "none";
    //     document.body.classList.remove("modal-open");
    //     backdrop.style.display = "none";
    // }
    // let abrirModal38 = function () {
    //     let modal = document.getElementById("modelo-1");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "block";
    //     modal.style.paddingRight = "14px"
    //     modal.classList.add("show");
    //     document.body.classList.add("modal-open");
    //     backdrop.style.display = "block";
    // }

    // let cerrarModal38 = function () {
    //     let modal = document.getElementById("modelo-1");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "none";
    //     document.body.classList.remove("modal-open");
    //     backdrop.style.display = "none";
    // }
    // let abrirModal40 = function () {
    //     let modal = document.getElementById("modelo-2");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "block";
    //     modal.style.paddingRight = "14px"
    //     modal.classList.add("show");
    //     document.body.classList.add("modal-open");
    //     backdrop.style.display = "block";
    // }

    // let cerrarModal40 = function () {
    //     let modal = document.getElementById("modelo-2");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "none";
    //     document.body.classList.remove("modal-open");
    //     backdrop.style.display = "none";
    // }
    // let abrirModal42 = function () {
    //     let modal = document.getElementById("modelo-3");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "block";
    //     modal.style.paddingRight = "14px"
    //     modal.classList.add("show");
    //     document.body.classList.add("modal-open");
    //     backdrop.style.display = "block";
    // }

    // let cerrarModal42 = function () {
    //     let modal = document.getElementById("modelo-3");
    //     let backdrop = document.getElementById("modal-backdrop");
    //     modal.style.display = "none";
    //     document.body.classList.remove("modal-open");
    //     backdrop.style.display = "none";
    // }

    let modalAyuda0 = false;
    let modalAbierto12 = false;
    let modalAbierto14 = false;
    let modalAbierto16 = false;
    // let modalAbierto22 = false;
    // let modalAbierto38 = false;
    // let modalAbierto40 = false;
    // let modalAbierto42 = false;


    function abrirModalAyuda() {
        if (modalAbierto16 == true || modalAbierto12 == true ||
            modalAbierto14 == true
        ) {
            cerrarModal12();
            modalAbierto12 = false;
            cerrarModal14();
            modalAbierto14 = false;
            cerrarModal16();
            modalAbierto16 = false;
        }
        abrirAyuda();
        modalAyuda0 = true;
    }

    function abrirModal12Act3() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto14 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal14();
            modalAbierto14 = false;
            cerrarModal16();
            modalAbierto16 = false;
        }
        abrirModal12();
        modalAbierto12 = true;
    }

    function abrirModal14Act3() {
        if (modalAyuda0 == true || modalAbierto12 == true ||
            modalAbierto16 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal12();
            modalAbierto12 = false;
            cerrarModal16();
            modalAbierto16 = false;
        }
        abrirModal14();
        modalAbierto14 = true;
    }

    function abrirModal16Act3() {
        if (modalAyuda0 == true || modalAbierto12 == true ||
            modalAbierto14 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal12();
            modalAbierto12 = false;
            cerrarModal14();
            modalAbierto14 = false;
        }
        abrirModal16();
        modalAbierto16 = true;
    }

    function section18() {
        let element = document.getElementById("section18Act3");
        PositionTop100(element)
    }

    function section19() {
        let element = document.getElementById("section19Act3");
        PositionTop100(element)
    }

    function download20() {
        let btn = document.getElementById("download20");
        btn.click();
    }

    function download21() {
        let btn = document.getElementById("download21");
        btn.click();
    }

    function download22() {
        let element = document.getElementById("download22");
        element.click();
    }

    function section23() {
        let btn = document.getElementById("section23Act3");
        PositionTop100(btn);
    }

    function visit24() {
        let btn = document.getElementById("visit24");
        btn.click();
    }

    function visit25() {
        let btn = document.getElementById("visit25");
        btn.click();
    }

    function visit26() {
        let btn = document.getElementById("visit26");
        btn.click();
    }

    function visit27() {
        let btn = document.getElementById("visit27");
        btn.click();
    }

    function section28() {
        let element = document.getElementById("section28Act3");
        PositionTop100(element)
    }

    function download29() {
        let btn = document.getElementById("download29");
        btn.click();
    }
    function section30() {
        let element = document.getElementById("section30Act3");
        PositionTop100(element)
    }
    // Inicio Faqs 31, 32, 33
    let AbrirFaq31 = function () {
        let abrirfaqL1 = document.getElementById("faq31Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq31 = function () {
        let cerrarfaqL1 = document.getElementById("faq31Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq32 = function () {
        let abrirfaqL1 = document.getElementById("faq32Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq32 = function () {
        let cerrarfaqL1 = document.getElementById("faq32Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq33 = function () {
        let abrirfaqL1 = document.getElementById("faq33Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq33 = function () {
        let cerrarfaqL1 = document.getElementById("faq33Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq42 = function () {
        let abrirfaqL1 = document.getElementById("faq42Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq42 = function () {
        let cerrarfaqL1 = document.getElementById("faq42Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq43 = function () {
        let abrirfaqL1 = document.getElementById("faq43Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq43 = function () {
        let cerrarfaqL1 = document.getElementById("faq43Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq44 = function () {
        let abrirfaqL1 = document.getElementById("faq44Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq44 = function () {
        let cerrarfaqL1 = document.getElementById("faq44Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq54 = function () {
        let abrirfaqL1 = document.getElementById("faq54Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq54 = function () {
        let cerrarfaqL1 = document.getElementById("faq54Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq55 = function () {
        let abrirfaqL1 = document.getElementById("faq55Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq55 = function () {
        let cerrarfaqL1 = document.getElementById("faq55Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq56 = function () {
        let abrirfaqL1 = document.getElementById("faq56Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq56 = function () {
        let cerrarfaqL1 = document.getElementById("faq56Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq59 = function () {
        let abrirfaqL1 = document.getElementById("faq59Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq59 = function () {
        let cerrarfaqL1 = document.getElementById("faq59Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq65 = function () {
        let abrirfaqL1 = document.getElementById("faq65Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq65 = function () {
        let cerrarfaqL1 = document.getElementById("faq65Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq66 = function () {
        let abrirfaqL1 = document.getElementById("faq66Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq66 = function () {
        let cerrarfaqL1 = document.getElementById("faq66Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq67 = function () {
        let abrirfaqL1 = document.getElementById("faq67Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq67 = function () {
        let cerrarfaqL1 = document.getElementById("faq67Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 72
    let AbrirFaq72 = function () {
        let abrirfaqL1 = document.getElementById("faq72Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq72 = function () {
        let cerrarfaqL1 = document.getElementById("faq72Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 73
    let AbrirFaq73 = function () {
        let abrirfaqL1 = document.getElementById("faq73Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq73 = function () {
        let cerrarfaqL1 = document.getElementById("faq73Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 76
    let AbrirFaq76 = function () {
        let abrirfaqL1 = document.getElementById("faq76Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq76 = function () {
        let cerrarfaqL1 = document.getElementById("faq76Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 77
    let AbrirFaq77 = function () {
        let abrirfaqL1 = document.getElementById("faq77Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq77 = function () {
        let cerrarfaqL1 = document.getElementById("faq77Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 79
    let AbrirFaq79 = function () {
        let abrirfaqL1 = document.getElementById("faq79Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq79 = function () {
        let cerrarfaqL1 = document.getElementById("faq79Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 81
    let AbrirFaq81 = function () {
        let abrirfaqL1 = document.getElementById("faq81Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq81 = function () {
        let cerrarfaqL1 = document.getElementById("faq81Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 82
    let AbrirFaq82 = function () {
        let abrirfaqL1 = document.getElementById("faq82Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq82 = function () {
        let cerrarfaqL1 = document.getElementById("faq82Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 86
    let AbrirFaq86 = function () {
        let abrirfaqL1 = document.getElementById("faq86Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq86 = function () {
        let cerrarfaqL1 = document.getElementById("faq86Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 87
    let AbrirFaq87 = function () {
        let abrirfaqL1 = document.getElementById("faq87Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq87 = function () {
        let cerrarfaqL1 = document.getElementById("faq87Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 88
    let AbrirFaq88 = function () {
        let abrirfaqL1 = document.getElementById("faq88Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq88 = function () {
        let cerrarfaqL1 = document.getElementById("faq88Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 91
    let AbrirFaq91 = function () {
        let abrirfaqL1 = document.getElementById("faq91Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq91 = function () {
        let cerrarfaqL1 = document.getElementById("faq91Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 93
    let AbrirFaq93 = function () {
        let abrirfaqL1 = document.getElementById("faq93Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq93 = function () {
        let cerrarfaqL1 = document.getElementById("faq93Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 95
    let AbrirFaq95 = function () {
        let abrirfaqL1 = document.getElementById("faq95Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq95 = function () {
        let cerrarfaqL1 = document.getElementById("faq95Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 96
    let AbrirFaq96 = function () {
        let abrirfaqL1 = document.getElementById("faq96Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq96 = function () {
        let cerrarfaqL1 = document.getElementById("faq96Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 98
    let AbrirFaq98 = function () {
        let abrirfaqL1 = document.getElementById("faq98Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq98 = function () {
        let cerrarfaqL1 = document.getElementById("faq98Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 99
    let AbrirFaq99 = function () {
        let abrirfaqL1 = document.getElementById("faq99Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq99 = function () {
        let cerrarfaqL1 = document.getElementById("faq99Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 103
    let AbrirFaq103 = function () {
        let abrirfaqL1 = document.getElementById("faq103Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq103 = function () {
        let cerrarfaqL1 = document.getElementById("faq103Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 104
    let AbrirFaq104 = function () {
        let abrirfaqL1 = document.getElementById("faq104Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq104 = function () {
        let cerrarfaqL1 = document.getElementById("faq104Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 105
    let AbrirFaq105 = function () {
        let abrirfaqL1 = document.getElementById("faq105Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq105 = function () {
        let cerrarfaqL1 = document.getElementById("faq105Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 116
    let AbrirFaq116 = function () {
        let abrirfaqL1 = document.getElementById("faq116Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq116 = function () {
        let cerrarfaqL1 = document.getElementById("faq116Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 117
    let AbrirFaq117 = function () {
        let abrirfaqL1 = document.getElementById("faq117Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq117 = function () {
        let cerrarfaqL1 = document.getElementById("faq117Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    // 118
    let AbrirFaq118 = function () {
        let abrirfaqL1 = document.getElementById("faq118Act3");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }
    let CerrarFaq118 = function () {
        let cerrarfaqL1 = document.getElementById("faq118Act3");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let faqAbierto31 = false;
    let faqAbierto32 = false;
    let faqAbierto33 = false;
    let faqAbierto42 = false;
    let faqAbierto43 = false;
    let faqAbierto44 = false;
    let faqAbierto54 = false;
    let faqAbierto55 = false;
    let faqAbierto56 = false;
    let faqAbierto59 = false;
    let faqAbierto65 = false;
    let faqAbierto66 = false;
    let faqAbierto67 = false;
    let faqAbierto72 = false;
    let faqAbierto73 = false;
    let faqAbierto76 = false;
    let faqAbierto77 = false;
    let faqAbierto79 = false;
    let faqAbierto81 = false;
    let faqAbierto82 = false;
    let faqAbierto86 = false;
    let faqAbierto87 = false;
    let faqAbierto88 = false;
    let faqAbierto91 = false;
    let faqAbierto93 = false;
    let faqAbierto95 = false;
    let faqAbierto96 = false;
    let faqAbierto98 = false;
    let faqAbierto99 = false;
    let faqAbierto103 = false;
    let faqAbierto104 = false;
    let faqAbierto105 = false;
    let faqAbierto116 = false;
    let faqAbierto117 = false;
    let faqAbierto118 = false;



    function abrircerrarfaq31() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto31) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq31();
            faqAbierto31 = true;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            // CerrarFaq81();
            // faqAbierto81 = false;
            // CerrarFaq82();
            // faqAbierto82 = false;
            // CerrarFaq83();
            // faqAbierto83 = false;
            // CerrarFaq98();
            // faqAbierto98 = false;
            // CerrarFaq99();
            // faqAbierto99 = false;
            // CerrarFaq100();
            // faqAbierto100 = false;
            // CerrarFaq114();
            // faqAbierto114 = false;
            // CerrarFaq115();
            // faqAbierto115 = false;
            // CerrarFaq116();
            // faqAbierto116 = false;
            // cerrarfaqBasicP();
            // faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq31();
            faqAbierto31 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq32() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto32) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq32();
            faqAbierto32 = true;
            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            // CerrarFaq81();
            // faqAbierto81 = false;
            // CerrarFaq82();
            // faqAbierto82 = false;
            // CerrarFaq83();
            // faqAbierto83 = false;
            // CerrarFaq98();
            // faqAbierto98 = false;
            // CerrarFaq99();
            // faqAbierto99 = false;
            // CerrarFaq100();
            // faqAbierto100 = false;
            // CerrarFaq114();
            // faqAbierto114 = false;
            // CerrarFaq115();
            // faqAbierto115 = false;
            // CerrarFaq116();
            // faqAbierto116 = false;
            // cerrarfaqBasicP();
            // faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq32();
            faqAbierto32 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq33() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto33) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq33();
            faqAbierto33 = true;
            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            // CerrarFaq81();
            // faqAbierto81 = false;
            // CerrarFaq82();
            // faqAbierto82 = false;
            // CerrarFaq83();
            // faqAbierto83 = false;
            // CerrarFaq98();
            // faqAbierto98 = false;
            // CerrarFaq99();
            // faqAbierto99 = false;
            // CerrarFaq100();
            // faqAbierto100 = false;
            // CerrarFaq114();
            // faqAbierto114 = false;
            // CerrarFaq115();
            // faqAbierto115 = false;
            // CerrarFaq116();
            // faqAbierto116 = false;
            // cerrarfaqBasicP();
            // faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq33();
            faqAbierto33 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq42() {
        let sectionLineamiento = document.getElementById("sectionFaqs40s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto42) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq42();
            faqAbierto42 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq42();
            faqAbierto42 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq43() {
        let sectionLineamiento = document.getElementById("sectionFaqs40s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto43) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq43();
            faqAbierto43 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq43();
            faqAbierto43 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq44() {
        let sectionLineamiento = document.getElementById("sectionFaqs40s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto44) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq44();
            faqAbierto44 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            // CerrarFaq81();
            // faqAbierto81 = false;
            // CerrarFaq82();
            // faqAbierto82 = false;
            // CerrarFaq83();
            // faqAbierto83 = false;
            // CerrarFaq98();
            // faqAbierto98 = false;
            // CerrarFaq99();
            // faqAbierto99 = false;
            // CerrarFaq100();
            // faqAbierto100 = false;
            // CerrarFaq114();
            // faqAbierto114 = false;
            // CerrarFaq115();
            // faqAbierto115 = false;
            // CerrarFaq116();
            // faqAbierto116 = false;
            // cerrarfaqBasicP();
            // faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq44();
            faqAbierto44 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq54() {
        let sectionLineamiento = document.getElementById("sectionFaqs50s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto54) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq54();
            faqAbierto54 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq54();
            faqAbierto54 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq55() {
        let sectionLineamiento = document.getElementById("sectionFaqs50s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto55) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq55();
            faqAbierto55 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq55();
            faqAbierto55 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq56() {
        let sectionLineamiento = document.getElementById("sectionFaqs50s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto56) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq56();
            faqAbierto56 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq56();
            faqAbierto56 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq59() {
        let sectionLineamiento = document.getElementById("faq59Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto59) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq59();
            faqAbierto59 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq59();
            faqAbierto59 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 65
    function abrircerrarfaq65() {
        let sectionLineamiento = document.getElementById("faq65Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto65) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq65();
            faqAbierto65 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq65();
            faqAbierto65 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 66
    function abrircerrarfaq66() {
        let sectionLineamiento = document.getElementById("faq66Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto66) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq66();
            faqAbierto66 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq66();
            faqAbierto66 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 67
    function abrircerrarfaq67() {
        let sectionLineamiento = document.getElementById("faq67Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto67) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq67();
            faqAbierto67 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq67();
            faqAbierto67 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 72
    function abrircerrarfaq72() {
        let sectionLineamiento = document.getElementById("faq72Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto72) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq72();
            faqAbierto72 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq72();
            faqAbierto72 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 73
    function abrircerrarfaq73() {
        let sectionLineamiento = document.getElementById("faq73Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto73) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq73();
            faqAbierto73 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq73();
            faqAbierto73 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 76
    function abrircerrarfaq76() {
        let sectionLineamiento = document.getElementById("faq76Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto76) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq76();
            faqAbierto76 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq76();
            faqAbierto76 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 77
    function abrircerrarfaq77() {
        let sectionLineamiento = document.getElementById("faq77Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto77) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq77();
            faqAbierto77 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq77();
            faqAbierto77 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 79
    function abrircerrarfaq79() {
        let sectionLineamiento = document.getElementById("faq79Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto79) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq79();
            faqAbierto79 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq79();
            faqAbierto79 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 81
    function abrircerrarfaq81() {
        let sectionLineamiento = document.getElementById("faq81Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto81) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq81();
            faqAbierto81 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq81();
            faqAbierto81 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 82
    function abrircerrarfaq82() {
        let sectionLineamiento = document.getElementById("faq82Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto82) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq82();
            faqAbierto82 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq82();
            faqAbierto82 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 86
    function abrircerrarfaq86() {
        let sectionLineamiento = document.getElementById("faq86Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto86) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq86();
            faqAbierto86 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq86();
            faqAbierto86 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 87
    function abrircerrarfaq87() {
        let sectionLineamiento = document.getElementById("faq87Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto87) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq87();
            faqAbierto87 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq87();
            faqAbierto87 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 88
    function abrircerrarfaq88() {
        let sectionLineamiento = document.getElementById("faq88Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto88) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq88();
            faqAbierto88 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq88();
            faqAbierto88 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 91
    function abrircerrarfaq91() {
        let sectionLineamiento = document.getElementById("faq91Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto91) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq91();
            faqAbierto91 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq91();
            faqAbierto91 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 93
    function abrircerrarfaq93() {
        let sectionLineamiento = document.getElementById("faq93Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto93) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq93();
            faqAbierto93 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq93();
            faqAbierto93 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 95
    function abrircerrarfaq95() {
        let sectionLineamiento = document.getElementById("faq95Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto95) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq95();
            faqAbierto95 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq95();
            faqAbierto95 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 96
    function abrircerrarfaq96() {
        let sectionLineamiento = document.getElementById("faq96Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto96) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq96();
            faqAbierto96 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq96();
            faqAbierto96 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 98
    function abrircerrarfaq98() {
        let sectionLineamiento = document.getElementById("faq98Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto98) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq98();
            faqAbierto98 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq98();
            faqAbierto98 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 99
    function abrircerrarfaq99() {
        let sectionLineamiento = document.getElementById("faq99Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto99) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq99();
            faqAbierto99 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq99();
            faqAbierto99 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 103
    function abrircerrarfaq103() {
        let sectionLineamiento = document.getElementById("faq103Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto103) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq103();
            faqAbierto103 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq103();
            faqAbierto103 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 104                
    function abrircerrarfaq104() {
        let sectionLineamiento = document.getElementById("faq104Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto104) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq104();
            faqAbierto104 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq104();
            faqAbierto104 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 105                
    function abrircerrarfaq105() {
        let sectionLineamiento = document.getElementById("faq105Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto105) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq105();
            faqAbierto105 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq105();
            faqAbierto105 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 116
    function abrircerrarfaq116() {
        let sectionLineamiento = document.getElementById("faq116Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto116) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq116();
            faqAbierto116 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq116();
            faqAbierto116 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 117
    function abrircerrarfaq117() {
        let sectionLineamiento = document.getElementById("faq117Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto117) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq117();
            faqAbierto117 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq117();
            faqAbierto117 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // 118
    function abrircerrarfaq118() {
        let sectionLineamiento = document.getElementById("faq118Act3");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto118) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq118();
            faqAbierto118 = true;

            CerrarFaq31();
            faqAbierto31 = false;
            CerrarFaq32();
            faqAbierto32 = false;
            CerrarFaq33();
            faqAbierto33 = false;
            CerrarFaq42();
            faqAbierto42 = false;
            CerrarFaq43();
            faqAbierto43 = false;
            CerrarFaq44();
            faqAbierto44 = false;
            CerrarFaq54();
            faqAbierto54 = false;
            CerrarFaq55();
            faqAbierto55 = false;
            CerrarFaq56();
            faqAbierto56 = false;
            CerrarFaq59();
            faqAbierto59 = false;
            CerrarFaq65();
            faqAbierto65 = false;
            CerrarFaq66();
            faqAbierto66 = false;
            CerrarFaq67();
            faqAbierto67 = false;
            CerrarFaq72();
            faqAbierto72 = false;
            CerrarFaq73();
            faqAbierto73 = false;
            CerrarFaq76();
            faqAbierto76 = false;
            CerrarFaq77();
            faqAbierto77 = false;
            CerrarFaq79();
            faqAbierto79 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq86();
            faqAbierto86 = false;
            CerrarFaq87();
            faqAbierto87 = false;
            CerrarFaq88();
            faqAbierto88 = false;
            CerrarFaq91();
            faqAbierto91 = false;
            CerrarFaq95();
            faqAbierto95 = false;
            CerrarFaq96();
            faqAbierto96 = false;
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq93();
            faqAbierto93 = false;
            CerrarFaq103();
            faqAbierto103 = false;
            CerrarFaq104();
            faqAbierto104 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq116();
            faqAbierto116 = false;
            CerrarFaq117();
            faqAbierto117 = false;
            CerrarFaq105();
            faqAbierto105 = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq118();
            faqAbierto118 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // Fin faqs 34, 35, 36
    // section37Act2
    function section34() {
        let element = document.getElementById("section34Act3");
        PositionTop100(element);
    }

    function section35() {
        let element = document.getElementById("section35Act3");
        PositionTop100(element);
    }

    function section36() {
        let element = document.getElementById("section36Act3");
        PositionTop100(element);
    }

    function section37() {
        let btn = document.getElementById("section37Act3");
        PositionTop100(btn);
    }

    function section38() {
        let btn = document.getElementById("section38Act3");
        PositionTop100(btn);
    }

    function section39() {
        let element = document.getElementById("section39Act3");
        PositionTop100(element);
    }

    function download40() {
        let element = document.getElementById("download40");
        element.click();
        PositionTop100(element);
    }

    function section41() {
        let element = document.getElementById("section41Act3");
        PositionTop100(element);
    }

    function section45() {
        let element = document.getElementById("section45Act3");
        PositionTop100(element);
    }

    function section46() {
        let element = document.getElementById("section46Act3");
        PositionTop100(element);
    }

    function section47() {
        let element = document.getElementById("section47Act3");
        PositionTop100(element);
    }

    function section48() {
        let element = document.getElementById("section48Act3");
        PositionTop100(element);
    }
    function section49() {
        let element = document.getElementById("section49Act3");
        PositionTop100(element);
    }
    function download50() {
        let element = document.getElementById("download50");
        element.click();
        PositionTop100(element);
    }

    function section51() {
        let element = document.getElementById("section51Act3");
        element.click();
        PositionTop100(element);
    }
    function download52() {
        let element = document.getElementById("download52");
        element.click();
        PositionTop100(element);
    }
    function section53() {
        let element = document.getElementById("section53Act3");
        element.click();
        PositionTop100(element);
    }
    function visit54() {
        let element = document.getElementById("visit54");
        element.click();
        PositionTop100(element);
    }
    function section57() {
        let element = document.getElementById("section57Act3");
        PositionTop100(element);
    }

    function section60() {
        let element = document.getElementById("section60Act3");
        PositionTop100(element);
    }

    function section61() {
        let element = document.getElementById("section61Act3");
        PositionTop100(element);
    }
    function section62() {
        let element = document.getElementById("section62Act3");
        PositionTop100(element);
    }
    function download63() {
        let element = document.getElementById("donwload63");
        element.click();
        PositionTop100(element);
    }
    function section64() {
        let element = document.getElementById("section64Act3");
        PositionTop100(element);
    }

    function click66() {
        let element = document.getElementById("clic66");
        let position = document.getElementById("section64Act2");
        element.click();
        PositionTop100(position);
    }
    function section67() {
        let element = document.getElementById("section67Act2");
        PositionTop100(element)
    }
    function section68() {
        let element = document.getElementById("section68Act3");
        PositionTop100(element)
    }

    function slider69() {
        let element = document.getElementById("click69");
        let position = document.getElementById("section70Act3");
        element.click();
        PositionTop100(position);
    }
    function slider70() {
        let element = document.getElementById("click70");
        let position = document.getElementById("section70Act3");
        element.click();
        PositionTop100(position);
    }
    function section71() {
        let element = document.getElementById("section71Act3");
        PositionTop100(element)
    }
    function download72() {
        let btn = document.getElementById("download72");
        btn.click();
    }
    function download73() {
        let btn = document.getElementById("download73");
        btn.click();
    }
    function download74() {
        let btn = document.getElementById("download74");
        btn.click();
    }
    function download75() {
        let element = document.getElementById("download75");
        element.click();
    }
    function section76() {
        let element = document.getElementById("section76Act2");
        PositionTop100(element)
    }
    function download78() {
        let btn = document.getElementById("download78");
        btn.click();
    }
    function section78() {
        let element = document.getElementById("section78Act2");
        PositionTop100(element)
    }
    function download80() {
        let btn = document.getElementById("download80");
        btn.click();
    }
    function section83() {
        let element = document.getElementById("section83Act3");
        PositionTop100(element)
    }
    function download84() {
        let btn = document.getElementById("download84");
        btn.click();
    }

    function section85() {
        let element = document.getElementById("section85Act3");
        PositionTop100(element)
    }
    function section89() {
        let element = document.getElementById("section89Act3");
        PositionTop100(element)
    }

    function section92() {
        let element = document.getElementById("section92Act3");
        PositionTop100(element)
    }
    function download94() {
        let btn = document.getElementById("download94");
        btn.click();
    }
    function section95() {
        let element = document.getElementById("section95Act2");
        PositionTop100(element)
    }
    function download97() {
        let element = document.getElementById("donwload97");
        element.click();
        PositionTop100(element)
    }
    function section100() {
        let element = document.getElementById("section100Act3");
        PositionTop100(element)
    }
    function download101() {
        let element = document.getElementById("download101");
        element.click();
    }
    function section102() {
        let element = document.getElementById("section102Act3");
        PositionTop100(element)
    }
    function section106() {
        let element = document.getElementById("section106Act3");
        PositionTop100(element)
    }

    function section107() {
        let element = document.getElementById("section107Act3");
        PositionTop100(element)
    }

    // tabs inicio
    let tab112 = function () {
        let fourthtab = document.getElementById("fourthtab");
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab");

        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");
        let parrafo4 = document.getElementById("ppaso-4");

        firstab.classList.remove("active");
        secondtab.classList.remove("active");
        thirdtab.classList.remove("active");
        fourthtab.classList.add("active");

        parrafo1.classList.remove("active");
        parrafo2.classList.remove("active");
        parrafo3.classList.remove("active");
        parrafo4.classList.add("active");
    }

    let tab110 = function () {
        let fourthtab = document.getElementById("fourthtab");
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab")

        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");
        let parrafo4 = document.getElementById("ppaso-4");

        firstab.classList.remove("active");
        secondtab.classList.remove("active");
        fourthtab.classList.remove("active");
        thirdtab.classList.add("active");


        parrafo3.classList.add("active");
        parrafo1.classList.remove("active");
        parrafo2.classList.remove("active");
        parrafo4.classList.remove("active");
    }

    let tab109 = function () {
        let fourthtab = document.getElementById("fourthtab");
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab");

        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");
        let parrafo4 = document.getElementById("ppaso-4");

        firstab.classList.remove("active");
        secondtab.classList.add("active");
        thirdtab.classList.remove("active");
        fourthtab.classList.remove("active");

        parrafo1.classList.remove("active");
        parrafo2.classList.add("active");
        parrafo3.classList.remove("active");
        parrafo4.classList.remove("active");
    }
    let tab108 = function () {
        let fourthtab = document.getElementById("fourthtab");
        let thirdtab = document.getElementById("thirdtab");
        let secondtab = document.getElementById("secondtab");
        let firstab = document.getElementById("firstTab");

        let parrafo1 = document.getElementById("ppaso-1");
        let parrafo2 = document.getElementById("ppaso-2");
        let parrafo3 = document.getElementById("ppaso-3");
        let parrafo4 = document.getElementById("ppaso-4");

        firstab.classList.add("active");
        secondtab.classList.remove("active");
        thirdtab.classList.remove("active");
        fourthtab.classList.remove("active");

        parrafo1.classList.add("active");
        parrafo2.classList.remove("active");
        parrafo3.classList.remove("active");
        parrafo4.classList.remove("active");
    }
    // tabs fin
    function download111() {
        let btn = document.getElementById("download111");
        btn.click();
    }
    function section113() {
        let element = document.getElementById("section113Act3");
        PositionTop100(element);
    }
    function download114() {
        let btn = document.getElementById("donwload114");
        btn.click();
        PositionTop100(btn);
    }
    function section115() {
        let element = document.getElementById("section115Act3");
        PositionTop100(element);
    }
    function section119() {
        let element = document.getElementById("section119Act3");
        PositionTop100(element);
    }
    function download120() {
        let btn = document.getElementById("btnLectura");
        btn.click();
        PositionTop100(btn);
    }
    function volverArriba121() {
        let btn = document.getElementById("volverArriba");
        btn.click();        
    }

    var commands = {
        'F5': refreshPage,
        'efe cinco': refreshPage,
        'Recargar': refreshPage,

        '0': abrirModalAyuda,
        'cero': abrirModalAyuda,
        'número cero': abrirModalAyuda,
        'número 0': abrirModalAyuda,
        'cerrar': cerrarAyuda,

        'Inicio': inicioPagina,
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,

        '1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,
        'número uno': abrirMenuPrincipal,
        'número 1': abrirMenuPrincipal,
        'uuno': abrirMenuPrincipal,
        'menú': abrirMenuPrincipal,
        'abrir menú': abrirMenuPrincipal,

        '2': cerrarMenuPrincipal,
        'Dos': cerrarMenuPrincipal,
        'número dos': cerrarMenuPrincipal,
        'número 2': cerrarMenuPrincipal,
        'cerrar menú': cerrarMenuPrincipal,

        '3': getPageNext,
        'tres': getPageNext,
        'número tres': getPageNext,
        'número 3': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,
        'número cuatro': getPageNext1,
        'número 4': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,
        'número cinco': getPageNext2,
        'número 5': getPageNext2,

        '6': getPageNext3,
        'seis': getPageNext3,
        'número seis': getPageNext3,
        'número 6': getPageNext3,

        '7': getPageNext4,
        'siete': getPageNext4,
        'número siete': getPageNext4,
        'número 7': getPageNext4,

        '8': getPageNext5,
        'ocho': getPageNext5,
        'número ocho': getPageNext5,
        'número 8': getPageNext5,

        '9': getPageNext6,
        'nueve': getPageNext6,
        'número nueve': getPageNext6,
        'número 9': getPageNext6,

        '10': getPageNext7,
        'diez': getPageNext7,
        'número diez': getPageNext7,
        'número 10': getPageNext7,

        '11': section11,
        'once': section11,
        'número once': section11,
        'número 11': section11,

        '12': abrirModal12Act3,
        'doce': abrirModal12Act3,
        'número doce': abrirModal12Act3,
        'número 12': abrirModal12Act3,

        // playVideo3,
        '13': cerrarModal12,
        'trece': cerrarModal12,
        'número trece': cerrarModal12,
        'número 13': cerrarModal12,
        'Pausa': cerrarModal12,

        '14': abrirModal14Act3,
        'catorce': abrirModal14Act3,
        'número catorce': abrirModal14Act3,
        'número 14': abrirModal14Act3,

        '15': cerrarModal14,
        'quince': cerrarModal14,
        'número quince': cerrarModal14,
        'número 15': cerrarModal14,

        '16': abrirModal16Act3,
        'dieciséis': abrirModal16Act3,
        'número dieciséis': abrirModal16Act3,
        'número 16': abrirModal16Act3,

        '17': cerrarModal16,
        'diecisiete': cerrarModal16,
        'número diecisiete': cerrarModal16,
        'número 17': cerrarModal16,

        '18': section18,
        'dieciocho': section18,
        'número dieciocho': section18,
        'número 18': section18,

        '19': section19,
        'diecinueve': section19,
        'número diecinueve': section19,
        'número 19': section19,

        '20': download20,
        'veinte': download20,
        'número veinte': download20,
        'número 20': download20,

        '21': download21,
        'veintiuno': download21,
        'número veintiuno': download21,
        'número 21': download21,

        '22': download22,
        'veintidos': download22,
        'número veintidos': download22,
        'número 22': download22,

        '23': section23,
        'veintitres': section23,
        'número veintitres': section23,
        'número 23': section23,

        '24': visit24,
        'veinticuatro': visit24,
        'número veinticuatro': visit24,
        'número 24': visit24,

        '25': visit25,
        'veinticinco': visit25,
        'número veinticinco': visit25,
        'número 25': visit25,

        '26': visit26,
        'veintiseis': visit26,
        'número veintiseis': visit26,
        'número 26': visit26,

        '27': visit27,
        'veintisiete': visit27,
        'número veintisiete': visit27,
        'número 27': visit27,

        '28': section28,
        'veintiocho': section28,
        'número veintiocho': section28,
        'número 28': section28,

        '29': download29,
        'veintinueve': download29,
        'número veintinueve': download29,
        'número 29': download29,

        '30': section30,
        'treinta': section30,
        'número treinta': section30,
        'número 30': section30,

        '31': abrircerrarfaq31,
        'treinta y uno': abrircerrarfaq31,
        'número treinta y uno': abrircerrarfaq31,
        'número 31': abrircerrarfaq31,

        '32': abrircerrarfaq32,
        'treinta y dos': abrircerrarfaq32,
        'número treinta y dos': abrircerrarfaq32,
        'número 32': abrircerrarfaq32,

        '33': abrircerrarfaq33,
        'treinta y tres': abrircerrarfaq33,
        'número treinta y tres': abrircerrarfaq33,
        'número 33': abrircerrarfaq33,

        '34': section34,
        'treinta y cuatro': section34,
        'número treinta y cuatro': section34,
        'número 34': section34,

        '35': section35,
        'treinta y cinco': section35,
        'número treinta y cinco': section35,
        'número 35': section35,

        '36': section36,
        'treinta y seis': section36,
        'número treinta y seis': section36,
        'número 36': section36,

        '37': section37,
        'treinta y siete': section37,
        'número treinta y siete': section37,
        'número 37': section37,

        '38': section38,
        'treinta y ocho': section38,
        'número treinta y ocho': section38,
        'número 38': section38,

        '39': section39,
        'treinta y nueve': section39,
        'número treinta y nueve': section39,
        'número 39': section39,

        '40': download40,
        'cuarenta': download40,
        'número cuarenta': download40,
        'número 40': download40,

        '41': section41,
        'cuarenta y uno': section41,
        'número cuarenta y uno': section41,
        'número 41': section41,

        '42': abrircerrarfaq42,
        'cuarenta y dos': abrircerrarfaq42,
        'número cuarenta y dos': abrircerrarfaq42,
        'número 42': abrircerrarfaq42,

        '43': abrircerrarfaq43,
        'cuarenta y tres': abrircerrarfaq43,
        'número cuarenta y tres': abrircerrarfaq43,
        'número 43': abrircerrarfaq43,

        '44': abrircerrarfaq44,
        'cuarenta y cuatro': abrircerrarfaq44,
        'número cuarenta y cuatro': abrircerrarfaq44,
        'número 44': abrircerrarfaq44,

        '45': section45,
        'cuarenta y cinco': section45,
        'número cuarenta y cinco': section45,
        'número 45': section45,

        '46': section46,
        'cuarenta y seis': section46,
        'número cuarenta y seis': section46,
        'número 46': section46,

        '47': section47,
        'cuarenta y siete': section47,
        'número cuarenta y siete': section47,
        'número 47': section47,

        '48': section48,
        'cuarenta y ocho': section48,
        'número cuarenta y ocho': section48,
        'número 48': section48,

        '49': section49,
        'cuarenta y nueve': section49,
        'número cuarenta y nueve': section49,
        'número 49': section49,

        '50': download50,
        'cincuenta': download50,
        'número cincuenta': download50,
        'número 50': download50,

        '51': section51,
        'cincuenta y uno': section51,
        'número cincuenta y uno': section51,
        'número 51': section51,

        '52': download52,
        'cincuenta y dos': download52,
        'número cincuenta y dos': download52,
        'número 52': download52,

        '53': section53,
        'cincuenta y tres': section53,
        'número cincuenta y tres': section53,
        'número 53': section53,

        '54': abrircerrarfaq54,
        'cincuenta y cuatro': abrircerrarfaq54,
        'número cincuenta y cuatro': abrircerrarfaq54,
        'número 54': abrircerrarfaq54,

        '55': abrircerrarfaq55,
        'cincuenta y cinco': abrircerrarfaq55,
        'número cincuenta y cinco': abrircerrarfaq55,
        'número 55': abrircerrarfaq55,

        '56': abrircerrarfaq56,
        'cincuenta y seis': abrircerrarfaq56,
        'número cincuenta y seis': abrircerrarfaq56,
        'número 56': abrircerrarfaq56,

        '57': section57,
        'cincuenta y siete': section57,
        'número cincuenta y siete': section57,
        'número 57': section57,

        '58': playVideo58,
        'cincuenta y ocho': playVideo58,
        'número cincuenta y ocho': playVideo58,
        'número 58': playVideo58,

        '59': abrircerrarfaq59,
        'número 59': abrircerrarfaq59,
        'cincuenta y nueve': abrircerrarfaq59,
        'número cincuenta y nueve': abrircerrarfaq59,

        '60': section60,
        'número 60': section60,
        'sesenta': section60,
        'número sesenta': section60,

        '61': section61,
        'número 61': section61,
        'sesenta y uno': section61,
        'número sesenta y uno': section61,

        '62': section62,
        'número 62': section62,
        'sesenta y dos': section62,
        'número sesenta y dos': section62,

        '63': download63,
        'número 63': download63,
        'sesenta y tres': download63,
        'número sesenta y tres': download63,

        '64': section64,
        'número 64': section64,
        'sesenta y cuatro': section64,
        'número sesenta y cuatro': section64,

        '65': abrircerrarfaq65,
        'número 65': abrircerrarfaq65,
        'sesenta y cinco': abrircerrarfaq65,
        'número sesenta y cinco': abrircerrarfaq65,

        '66': abrircerrarfaq66,
        'número 66': abrircerrarfaq66,
        'sesenta y seis': abrircerrarfaq66,
        'número sesenta y seis': abrircerrarfaq66,

        '67': abrircerrarfaq67,
        'número 67': abrircerrarfaq67,
        'sesenta y siete': abrircerrarfaq67,
        'número sesenta y siete': abrircerrarfaq67,

        '68': section68,
        'número 68': section68,
        'sesenta y ocho': section68,
        'número sesenta y ocho': section68,

        '69': slider69,
        'número 69': slider69,
        'sesenta y nueve': slider69,
        'número sesenta y nueve': slider69,

        '70': slider70,
        'número 70': slider70,
        'setenta': slider70,
        'número setenta': slider70,

        '71': section71,
        'número 71': section71,
        'setenta y uno': section71,
        'número setenta y uno': section71,

        '72': abrircerrarfaq72,
        'número 72': abrircerrarfaq72,
        'setenta y dos': abrircerrarfaq72,
        'número setenta y dos': abrircerrarfaq72,

        '73': abrircerrarfaq73,
        'número 73': abrircerrarfaq73,
        'setenta y tres': abrircerrarfaq73,
        'número setenta y tres': abrircerrarfaq73,

        '74': download74,
        'número 74': download74,
        'setenta y cuatro': download74,
        'número setenta y cuatro': download74,

        '75': download75,
        'número 75': download75,
        'setenta y cinco': download75,
        'número setenta y cinco': download75,

        '76': abrircerrarfaq76,
        'número 76': abrircerrarfaq76,
        'setenta y seis': abrircerrarfaq76,
        'número setenta y seis': abrircerrarfaq76,

        '77': abrircerrarfaq77,
        'número 77': abrircerrarfaq77,
        'setenta y siete': abrircerrarfaq77,
        'número setenta y siete': abrircerrarfaq77,

        '78': download78,
        'número 78': download78,
        'setenta y ocho': download78,
        'número setenta y ocho': download78,

        '79': abrircerrarfaq79,
        'número 79': abrircerrarfaq79,
        'setenta y nueve': abrircerrarfaq79,
        'número setenta y nueve': abrircerrarfaq79,

        '80': download80,
        'número 80': download80,
        'ochenta': download80,
        'número ochenta': download80,

        '81': abrircerrarfaq81,
        'número 81': abrircerrarfaq81,
        'ochenta y uno': abrircerrarfaq81,
        'número ochenta y uno': abrircerrarfaq81,

        '82': abrircerrarfaq82,
        'número 82': abrircerrarfaq82,
        'ochenta y dos': abrircerrarfaq82,
        'número ochenta y dos': abrircerrarfaq82,

        '83': section83,
        'número 83': section83,
        'ochenta y tres': section83,
        'número ochenta y tres': section83,

        '84': download84,
        'número 84': download84,
        'ochenta y cuatro': download84,
        'número ochenta y cuatro': download84,

        '85': section85,
        'número 85': section85,
        'ochenta y cinco': section85,
        'número ochenta y cinco': section85,

        '86': abrircerrarfaq86,
        'número 86': abrircerrarfaq86,
        'ochenta y seis': abrircerrarfaq86,
        'número ochenta y seis': abrircerrarfaq86,

        '87': abrircerrarfaq87,
        'número 87': abrircerrarfaq87,
        'ochenta y siete': abrircerrarfaq87,
        'número ochenta y siete': abrircerrarfaq87,

        '88': abrircerrarfaq88,
        'número 88': abrircerrarfaq88,
        'ochenta y ocho': abrircerrarfaq88,
        'número ochenta y ocho': abrircerrarfaq88,

        '89': section89,
        'número 89': section89,
        'ochenta y nueve': section89,
        'número ochenta y nueve': section89,

        '90': playVideo90,
        'número 90': playVideo90,
        'noventa': playVideo90,
        'número noventa': playVideo90,

        '91': abrircerrarfaq91,
        'número 91': abrircerrarfaq91,
        'noventa y uno': abrircerrarfaq91,
        'número noventa y uno': abrircerrarfaq91,

        '92': section92,
        'número 92': section92,
        'noventa y dos': section92,
        'número noventa y dos': section92,

        '93': abrircerrarfaq93,
        'número 93': abrircerrarfaq93,
        'noventa y tres': abrircerrarfaq93,
        'número noventa y tres': abrircerrarfaq93,

        '94': download94,
        'número 94': download94,
        'noventa y cuatro': download94,
        'número noventa y cuatro': download94,

        '95': abrircerrarfaq95,
        'número 95': abrircerrarfaq95,
        'noventa y cinco': abrircerrarfaq95,
        'número noventa y cinco': abrircerrarfaq95,

        '96': abrircerrarfaq96,
        'número 96': abrircerrarfaq96,
        'noventa y seis': abrircerrarfaq96,
        'número noventa y seis': abrircerrarfaq96,

        '97': download97,
        'número 97': download97,
        'noventa y siete': download97,
        'número noventa y siete': download97,

        '98': abrircerrarfaq98,
        'número 98': abrircerrarfaq98,
        'noventa y ocho': abrircerrarfaq98,
        'número noventa y ocho': abrircerrarfaq98,

        '99': abrircerrarfaq99,
        'número 99': abrircerrarfaq99,
        'noventa y nueve': abrircerrarfaq99,
        'número noventa y nueve': abrircerrarfaq99,

        '100': section100,
        'número 100': section100,
        'cien': section100,
        'número cien': section100,

        '101': download101,
        'número 101': download101,
        'ciento uno': download101,
        'número ciento uno': download101,

        '102': section102,
        'número 102': section102,
        'ciento dos': section102,
        'número ciento dos': section102,

        '103': abrircerrarfaq103,
        'número 103': abrircerrarfaq103,
        'ciento tres': abrircerrarfaq103,
        'número ciento tres': abrircerrarfaq103,

        '104': abrircerrarfaq104,
        'número 104': abrircerrarfaq104,
        'ciento cuatro': abrircerrarfaq104,
        'número ciento cuatro': abrircerrarfaq104,

        '105': abrircerrarfaq105,
        'número 105': abrircerrarfaq105,
        'ciento cinco': abrircerrarfaq105,
        'número ciento cinco': abrircerrarfaq105,

        '106': section106,
        'número 106': section106,
        'ciento seis': section106,
        'número ciento seis': section106,

        '107': section107,
        'número 107': section107,
        'ciento siete': section107,
        'número ciento siete': section107,

        '108': tab108,
        'número 108': tab108,
        'ciento ocho': tab108,
        'número ciento ocho': tab108,

        '109': tab109,
        'número 109': tab109,
        'ciento nueve': tab109,
        'número ciento nueve': tab109,

        '110': tab110,
        'número 110': tab110,
        'ciento diez': tab110,
        'número ciento diez': tab110,

        '111': download111,
        'número 111': download111,
        'ciento once': download111,
        'número ciento once': download111,

        '112': tab112,
        'número 112': tab112,
        'ciento doce': tab112,
        'número ciento doce': tab112,

        '113': section113,
        'número 113': section113,
        'ciento trece': section113,
        'número ciento trece': section113,

        '114': download114,
        'número 114': download114,
        'ciento catorce': download114,
        'número ciento catorce': download114,

        '115': section115,
        'número 115': section115,
        'ciento quince': section115,
        'número ciento quince': section115,

        '116': abrircerrarfaq116,
        'número 116': abrircerrarfaq116,
        'ciento dieciséis': abrircerrarfaq116,
        'número ciento dieciséis': abrircerrarfaq116,

        '117': abrircerrarfaq117,
        'número 117': abrircerrarfaq117,
        'ciento diecisiete': abrircerrarfaq117,
        'número ciento diecisiete': abrircerrarfaq117,

        '118': abrircerrarfaq118,
        'número 118': abrircerrarfaq118,
        'ciento dieciocho': abrircerrarfaq118,
        'número ciento dieciocho': abrircerrarfaq118,

        '119': section119,
        'número 119': section119,
        'ciento diecinueve': section119,
        'número ciento diecinueve': section119,

        '120': download120,
        'número 120': download120,
        'ciento veinte': download120,
        'número ciento veinte': download120,

        '121': volverArriba121,
        'número 121': volverArriba121,
        'ciento veintiuno': volverArriba121,
        'número ciento veintiuno': volverArriba121,
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
let num14 = document.getElementById("ident14");
let num16 = document.getElementById("ident16");

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
let num120 = document.getElementById("ident120");
let num121 = document.getElementById("ident121");
// cerrar modales
let num13 = document.getElementById("ident13");
let num13_1 = document.getElementById("ident13_1");
let num15 = document.getElementById("ident15");
let num15_1 = document.getElementById("ident15_1");
let num17 = document.getElementById("ident17");
let num17_1 = document.getElementById("ident17_1");


let activoNumberIndex = localStorage.getItem("NumberAnnyang_1");
// inicio prueba
function numbersActives() {
    menuactivo = true;
    annyang.setLanguage('es-MX');
    annyang.start();
    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat');

    // Código para texto plano
    const elementsToAnimateUniversal = [
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num18, num19, num20, num21, num22,
        num23, num24, num25, num26, num27, num28, num30, num34, num35, num36, num37, num39, num41, num45,
        num46, num47, num48, num49, num50, num51, num53, num57, num58, num60, num61, num62, num64, num68,
        num71, num74, num75, num78, num80, num83, num85, num89, num90, num92, num94, num97, num100, num102,
        num106, num107, num111, num113, num114, num115, num119,
    ];

    elementsToAnimateUniversal.forEach(element => {
        element.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // Código para botones y faqs    
    const elementsToAnimateFaqs = [
        cerrar_help, cerrarAyudaM, num1, num12, num13, num13_1, num14, num15, num15_1, num16, num17, num17_1, num29,
        num31, num32, num33, num38, num40, num42, num43, num44, num52, num54, num55, num56, num59, num63, num65, num66,
        num67, num69, num70, num72, num73, num76, num77, num79, num81, num82, num84, num86, num87, num88, num91, num93,
        num95, num96, num98, num99, num101, num103, num104, num105, num108, num109, num110, num112, num116, num117, num118,
        num120, num121,
    ];
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
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num18, num19, num20, num21, num22,
        num23, num24, num25, num26, num27, num28, num30, num34, num35, num36, num37, num39, num41, num45,
        num46, num47, num48, num49, num50, num51, num53, num57, num58, num60, num61, num62, num64, num68,
        num71, num74, num75, num78, num80, num83, num85, num89, num90, num92, num94, num97, num100, num102,
        num106, num107, num111, num113, num114, num115, num119,
    ]

    elementToRemoveUniversal.forEach(elementUniversal => {
        elementUniversal.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // CÓDIGO PARA FAQS Y BOTONES    
    const elementsToRemoveFaqs = [
        cerrar_help, cerrarAyudaM, num1, num12, num13, num13_1, num14, num15, num15_1, num16, num17, num17_1, num29,
        num31, num32, num33, num38, num40, num42, num43, num44, num52, num54, num55, num56, num59, num63, num65, num66,
        num67, num69, num70, num72, num73, num76, num77, num79, num81, num82, num84, num86, num87, num88, num91, num93,
        num95, num96, num98, num99, num101, num103, num104, num105, num108, num109, num110, num112, num116, num117, num118,
        num120, num121,
    ]

    elementsToRemoveFaqs.forEach(elementToRemove => {
        elementToRemove.classList.remove('ident_Faqs', 'animate__animated', 'animate__heartBeat')
    });
    localStorage.setItem("NumberAnnyang_1", "desactivado");
}


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

