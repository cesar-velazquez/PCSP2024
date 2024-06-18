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

    // video 2:
    let videoOn2 = false;
    let VideoPlay2 = document.getElementById("video85");
    let positionVid2 = document.getElementById("SectionVideo85");
    let playVideo2 = function () {
        videoOn2 = true;
        VideoPlay2.play();
        PositionTop100(positionVid2);
        num12.style.backgroundColor = "#f8c5fd3d";
    }

    // let VideoOff = document.getElementById("video1");
    let offVideo2 = function () {
        videoOn2 = false;
        if (videoOn2 == false) {
            VideoPlay2.pause();
            PositionTop100(positionVid2);
        }
    }

    let playVideo85 = function () {
        if (!videoOn2) {
            playVideo2();
        } else {
            videoOn2 = true;
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

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
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

    let abrirModal16 = function () {
        let modal = document.getElementById("habilidad-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal16 = function () {
        let modal = document.getElementById("habilidad-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal18 = function () {
        let modal = document.getElementById("habilidad-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal18 = function () {
        let modal = document.getElementById("habilidad-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal20 = function () {
        let modal = document.getElementById("habilidad-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal20 = function () {
        let modal = document.getElementById("habilidad-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirModal22 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal22 = function () {
        let modal = document.getElementById("habilidad-4");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }
    let abrirModal38 = function () {
        let modal = document.getElementById("modelo-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal38 = function () {
        let modal = document.getElementById("modelo-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }
    let abrirModal40 = function () {
        let modal = document.getElementById("modelo-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal40 = function () {
        let modal = document.getElementById("modelo-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }
    let abrirModal42 = function () {
        let modal = document.getElementById("modelo-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal42 = function () {
        let modal = document.getElementById("modelo-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalAyuda0 = false;
    let modalAbierto16 = false;
    let modalAbierto18 = false;
    let modalAbierto20 = false;
    let modalAbierto22 = false;
    let modalAbierto38 = false;
    let modalAbierto40 = false;
    let modalAbierto42 = false;

    // function abrirModalAyuda() {
    //     if (modalAbierto16 == true || modalAbierto18 == true ||
    //         modalAbierto20 == true || modalAbierto22 == true ||
    //         modalAbierto38 == true || modalAbierto40 == true ||
    //         modalAbierto42 == true
    //     ) {
    //         cerrarModal16();
    //         modalAbierto16 = false;
    //         cerrarModal18();
    //         modalAbierto18 = false;
    //         cerrarModal20();
    //         modalAbierto20 = false;
    //         cerrarModal22();
    //         modalAbierto22 = false;
    //         cerrarModal38();
    //         modalAbierto38 = false;
    //         cerrarModal40();
    //         modalAbierto40 = false;
    //         cerrarModal42();
    //         modalAbierto42 = false;
    //     }
    //     abrirAyuda();
    //     modalAyuda0 = true;
    // }

    function abrirModalAyuda() {
        if (modalAbierto16 == true || modalAbierto18 == true ||
            modalAbierto20 == true || modalAbierto22 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirAyuda();
        modalAyuda0 = true;
    }

    function abrirModalAct216() {
        if (modalAyuda0 == true || modalAbierto18 == true ||
            modalAbierto20 == true || modalAbierto22 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal16();
        modalAbierto16 = true;
    }

    function abrirModalAct218() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto20 == true || modalAbierto22 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal18();
        modalAbierto18 = true;
    }

    function abrirModalAct220() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto18 == true || modalAbierto22 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal20();
        modalAbierto20 = true;
    }

    function abrirModalAct222() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto18 == true || modalAbierto20 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal22();
        modalAbierto22 = true;
    }

    function abrirModalAct238() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto18 == true || modalAbierto20 == true ||
            modalAbierto22 == true || modalAbierto40 == true ||
            modalAbierto42 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal38();
        modalAbierto38 = true;
    }

    function abrirModalAct240() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto18 == true || modalAbierto20 == true ||
            modalAbierto38 == true || modalAbierto22 == true ||
            modalAbierto42 == true
        ) {
            abrirModal40();
            modalAbierto40 = true;

            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal22();
            modalAbierto22 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal42();
            modalAbierto42 = false;
        }
        abrirModal40();
        modalAbierto40 = true;
    }

    function abrirModalAct242() {
        if (modalAyuda0 == true || modalAbierto16 == true ||
            modalAbierto18 == true || modalAbierto20 == true ||
            modalAbierto38 == true || modalAbierto40 == true ||
            modalAbierto22 == true
        ) {
            cerrarAyuda();
            modalAyuda0 = false;
            cerrarModal16();
            modalAbierto16 = false;
            cerrarModal18();
            modalAbierto18 = false;
            cerrarModal20();
            modalAbierto20 = false;
            cerrarModal38();
            modalAbierto38 = false;
            cerrarModal40();
            modalAbierto40 = false;
            cerrarModal22();
            modalAbierto22 = false;
        }
        abrirModal42();
        modalAbierto42 = true;
    }
    // fin modales
    function section24() {
        let element = document.getElementById("section24Act2");
        PositionTop100(element)
    }

    function section25() {
        let element = document.getElementById("section25Act2");
        PositionTop100(element)
    }

    function download26() {
        let btn = document.getElementById("glosario26");
        btn.click();
    }

    function visit27() {
        let btn = document.getElementById("visit27");
        btn.click();
    }

    function section28() {
        let element = document.getElementById("section28Act2");
        PositionTop100(element)
    }

    function download29() {
        let btn = document.getElementById("otp29");
        btn.click();
    }

    function download30() {
        let btn = document.getElementById("ots30");
        btn.click();
    }

    function section31() {
        let element = document.getElementById("section31Act2");
        PositionTop100(element)
    }

    function download32() {
        let btn = document.getElementById("rubrica32");
        btn.click();
    }

    function section33() {
        let element = document.getElementById("section33Act2");
        PositionTop100(element)
    }

    // Inicio Faqs 34, 35, 36
    let AbrirFaq34 = function () {
        let abrirfaqL1 = document.getElementById("faq34Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq34 = function () {
        let cerrarfaqL1 = document.getElementById("faq34Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq35 = function () {
        let abrirfaqL1 = document.getElementById("faq35Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq35 = function () {
        let cerrarfaqL1 = document.getElementById("faq35Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }

    let AbrirFaq36 = function () {
        let abrirfaqL1 = document.getElementById("faq36Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq36 = function () {
        let cerrarfaqL1 = document.getElementById("faq36Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq60 = function () {
        let abrirfaqL1 = document.getElementById("faq60Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq60 = function () {
        let cerrarfaqL1 = document.getElementById("faq60Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq61 = function () {
        let abrirfaqL1 = document.getElementById("faq61Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq61 = function () {
        let cerrarfaqL1 = document.getElementById("faq61Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq62 = function () {
        let abrirfaqL1 = document.getElementById("faq62Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq62 = function () {
        let cerrarfaqL1 = document.getElementById("faq62Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq81 = function () {
        let abrirfaqL1 = document.getElementById("faq81Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq81 = function () {
        let cerrarfaqL1 = document.getElementById("faq81Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq82 = function () {
        let abrirfaqL1 = document.getElementById("faq82Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq82 = function () {
        let cerrarfaqL1 = document.getElementById("faq82Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq83 = function () {
        let abrirfaqL1 = document.getElementById("faq83Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq83 = function () {
        let cerrarfaqL1 = document.getElementById("faq83Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let AbrirFaq86 = function () {
        let abrirfaqL1 = document.getElementById("faq86Act2");
        abrirfaqL1.setAttribute('aria-expanded', 'true');
        abrirfaqL1.setAttribute('open', '');
    }

    let CerrarFaq86 = function () {
        let cerrarfaqL1 = document.getElementById("faq86Act2");
        cerrarfaqL1.setAttribute('aria-expanded', 'false');
        cerrarfaqL1.removeAttribute('open', '');
    }
    let faqAbierto34 = false;
    let faqAbierto35 = false;
    let faqAbierto36 = false;
    let faqAbierto60 = false;
    let faqAbierto61 = false;
    let faqAbierto62 = false;
    let faqAbierto81 = false;
    let faqAbierto82 = false;
    let faqAbierto83 = false;
    let faqAbierto86 = false;


    function abrircerrarfaq34() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct2");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto34) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq34();
            faqAbierto34 = true;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq34();
            faqAbierto34 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq35() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct2");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto35) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq35();
            faqAbierto35 = true;
            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq35();
            faqAbierto35 = false;
            PositionTop100(sectionLineamiento);
        }
    }

    function abrircerrarfaq36() {
        let sectionLineamiento = document.getElementById("sectionFaqs30sAct2");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto36) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq36();
            faqAbierto36 = true;
            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq36();
            faqAbierto36 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq60() {
        let sectionLineamiento = document.getElementById("sectionFaqs60s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto60) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq60();
            faqAbierto60 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq60();
            faqAbierto60 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq61() {
        let sectionLineamiento = document.getElementById("sectionFaqs60s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto61) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq61();
            faqAbierto61 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq61();
            faqAbierto61 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq62() {
        let sectionLineamiento = document.getElementById("sectionFaqs60s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto62) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq62();
            faqAbierto62 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq62();
            faqAbierto62 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq81() {
        let sectionLineamiento = document.getElementById("sectionFaqs80s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto81) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq81();
            faqAbierto81 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq81();
            faqAbierto81 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq82() {
        let sectionLineamiento = document.getElementById("sectionFaqs80s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto82) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq82();
            faqAbierto82 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq82();
            faqAbierto82 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq83() {
        let sectionLineamiento = document.getElementById("sectionFaqs80s");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto83) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq83();
            faqAbierto83 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq83();
            faqAbierto83 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    function abrircerrarfaq86() {
        let sectionLineamiento = document.getElementById("faq86Act2");
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto86) {
            // Si el FAQ está cerrado, ábrelo            
            AbrirFaq86();
            faqAbierto86 = true;

            CerrarFaq34();
            faqAbierto34 = false;
            CerrarFaq35();
            faqAbierto35 = false;
            CerrarFaq36();
            faqAbierto36 = false;
            CerrarFaq60();
            faqAbierto60 = false;
            CerrarFaq61();
            faqAbierto61 = false;
            CerrarFaq62();
            faqAbierto62 = false;
            CerrarFaq81();
            faqAbierto81 = false;
            CerrarFaq82();
            faqAbierto82 = false;
            CerrarFaq83();
            faqAbierto83 = false;
            cerrarfaqBasicP();
            faqAbierto = false;
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq86();
            faqAbierto86 = false;
            PositionTop100(sectionLineamiento);
        }
    }
    // Fin faqs 34, 35, 36
    // section37Act2
    function section37() {
        let element = document.getElementById("section37Act2");
        PositionTop100(element)
    }

    function section44() {
        let element = document.getElementById("section44Act2");
        PositionTop100(element);
    }

    function section45() {
        let element = document.getElementById("section45Act2");
        PositionTop100(element);
    }

    function download46() {
        let btn = document.getElementById("download46");
        btn.click();
    }

    function download47() {
        let btn = document.getElementById("download47");
        btn.click();
    }

    function section48() {
        let element = document.getElementById("section48Act2");
        PositionTop100(element);
    }

    function visit49() {
        let element = document.getElementById("visit49");
        element.click();
        PositionTop100(element);
    }

    function visit50() {
        let element = document.getElementById("visit50");
        element.click();
        PositionTop100(element);
    }

    function visit51() {
        let element = document.getElementById("visit51");
        element.click();
        PositionTop100(element);
    }
    function visit52() {
        let element = document.getElementById("visit52");
        element.click();
        PositionTop100(element);
    }
    function visit53() {
        let element = document.getElementById("visit53");
        element.click();
        PositionTop100(element);
    }
    function visit54() {
        let element = document.getElementById("visit54");
        element.click();
        PositionTop100(element);
    }
    function visit55() {
        let element = document.getElementById("visit55");
        element.click();
        PositionTop100(element);
    }
    function download56() {
        let btn = document.getElementById("download56");
        btn.click();
        PositionTop100(btn);
    }
    function section57() {
        let element = document.getElementById("section57Act2");
        PositionTop100(element);
    }
    function download58() {
        let btn = document.getElementById("download58");
        btn.click();
        PositionTop100(btn);
    }
    function section59() {
        let element = document.getElementById("section59Act2");
        PositionTop100(element);
    }

    function section63() {
        let element = document.getElementById("section63Act2");
        PositionTop100(element);
    }
    function section64() {
        let element = document.getElementById("section64Act2");
        PositionTop100(element);
    }
    function click65() {
        let element = document.getElementById("clic65");
        let position = document.getElementById("section64Act2");
        element.click();
        PositionTop100(position);
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
        let element = document.getElementById("section68Act2");
        PositionTop100(element)
    }
    function download69() {
        let btn = document.getElementById("download69");
        btn.click();
    }
    function download70() {
        let btn = document.getElementById("download70");
        btn.click();
    }
    function download71() {
        let btn = document.getElementById("download71");
        btn.click();
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
    function section75() {
        let element = document.getElementById("section75Act2");
        PositionTop100(element)
    }
    function section76() {
        let element = document.getElementById("section76Act2");
        PositionTop100(element)
    }
    function download77() {
        let btn = document.getElementById("download77");
        btn.click();
    }
    function section78() {
        let element = document.getElementById("section78Act2");
        PositionTop100(element)
    }
    function download79() {
        let btn = document.getElementById("download79");
        btn.click();
    }
    function section80() {
        let element = document.getElementById("section80Act2");
        PositionTop100(element)
    }
    function section84() {
        let element = document.getElementById("section84Act2");
        PositionTop100(element)
    }

    function section87() {
        let element = document.getElementById("section87Act2");
        PositionTop100(element)
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

        '14': abrircerrarfaqAyuda,
        'catorce': abrircerrarfaqAyuda,
        'número catorce': abrircerrarfaqAyuda,

        '15': section15,
        'quince': section15,
        'número quince': section15,

        '16': abrirModalAct216,
        'dieciséis': abrirModalAct216,
        'número dieciséis': abrirModalAct216,

        '17': cerrarModal16,
        'diecisiete': cerrarModal16,
        'número diecisiete': cerrarModal16,

        '18': abrirModalAct218,
        'dieciocho': abrirModalAct218,
        'número dieciocho': abrirModalAct218,

        '19': cerrarModal18,
        'diecinueve': cerrarModal18,
        'número diecinueve': cerrarModal18,

        '20': abrirModalAct220,
        'veinte': abrirModalAct220,
        'número veinte': abrirModalAct220,

        '21': cerrarModal20,
        'veintiuno': cerrarModal20,
        'número veintiuno': cerrarModal20,

        '22': abrirModalAct222,
        'veintidos': abrirModalAct222,
        'número veintidos': abrirModalAct222,

        '23': cerrarModal22,
        'veintitres': cerrarModal22,
        'número veintitres': cerrarModal22,

        '24': section24,
        'veinticuatro': section24,

        '25': section25,
        'veinticinco': section25,

        '26': download26,
        'veintiseis': download26,

        '27': visit27,
        'veintisiete': visit27,

        '28': section28,
        'veintiocho': section28,

        '29': download29,
        'veintinueve': download29,

        '30': download30,
        'treinta': download30,

        '31': section31,
        'treinta y uno': section31,

        '32': download32,
        'treinta y dos': download32,

        '33': section33,
        'treinta y tres': section33,

        '34': abrircerrarfaq34,
        'treinta y cuatro': abrircerrarfaq34,

        '35': abrircerrarfaq35,
        'treinta y cinco': abrircerrarfaq35,

        '36': abrircerrarfaq36,
        'treinta y seis': abrircerrarfaq36,

        '37': section37,
        'treinta y siete': section37,

        '38': abrirModalAct238,
        'treinta y ocho': abrirModalAct238,

        '39': cerrarModal38,
        'treinta y nueve': cerrarModal38,

        '40': abrirModalAct240,
        'cuarenta': abrirModalAct240,

        '41': cerrarModal40,
        'cuarenta y uno': cerrarModal40,

        '42': abrirModalAct242,
        'cuarenta y dos': abrirModalAct242,

        '43': cerrarModal42,
        'cuarenta y tres': cerrarModal42,

        '44': section44,
        'cuarenta y cuatro': section44,

        '45': section45,
        'cuarenta y cinco': section45,

        '46': download46,
        'cuarenta y seis': download46,

        '47': download47,
        'cuarenta y siete': download47,

        '48': section48,
        'cuarenta y ocho': section48,

        '49': visit49,
        'cuarenta y nueve': visit49,

        '50': visit50,
        'cincuenta': visit50,

        '51': visit51,
        'cincuenta y uno': visit51,

        '52': visit52,
        'cincuenta y dos': visit52,

        '53': visit53,
        'cincuenta y tres': visit53,

        '54': visit54,
        'cincuenta y cuatro': visit54,

        '55': visit55,
        'cincuenta y cinco': visit55,

        '56': download56,
        'cincuenta y seis': download56,

        '57': section57,
        'cincuenta y siete': section57,

        '58': download58,
        'cincuenta y ocho': download58,

        '59': section59,
        'cincuenta y nueve': section59,

        '60': abrircerrarfaq60,
        'sesenta': abrircerrarfaq60,

        '61': abrircerrarfaq61,
        'sesenta y uno': abrircerrarfaq61,

        '62': abrircerrarfaq62,
        'sesenta y dos': abrircerrarfaq62,

        '63': section63,
        'sesenta y tres': section63,

        '64': section64,
        'sesenta y cuatro': section64,

        '65': click65,
        'sesenta y cinco': click65,

        '66': click66,
        'sesenta y seis': click66,

        '67': section67,
        'sesenta y siete': section67,

        '68': section68,
        'sesenta y ocho': section68,

        '69': download69,
        'sesenta y nueve': download69,

        '70': download70,
        'setenta': download70,

        '71': download71,
        'setenta y uno': download71,

        '72': download72,
        'setenta y dos': download72,

        '73': download73,
        'setenta y tres': download73,

        '74': download74,
        'setenta y cuatro': download74,

        '75': section75,
        'setenta y cinco': section75,

        '76': section76,
        'setenta y seis': section76,

        '77': download77,
        'setenta y siete': download77,

        '78': section78,
        'setenta y ocho': section78,

        '79': download79,
        'setenta y nueve': download79,

        '80': section80,
        'ochenta': section80,

        '81': abrircerrarfaq81,
        'ochenta y uno': abrircerrarfaq81,

        '82': abrircerrarfaq82,
        'ochenta y dos': abrircerrarfaq82,

        '83': abrircerrarfaq83,
        'ochenta y tres': abrircerrarfaq83,

        '84': section84,
        'ochenta y cuatro': section84,

        '85': playVideo85,
        'ochenta y cinco': playVideo85,

        '86': abrircerrarfaq86,
        'ochenta y seis': abrircerrarfaq86,

        '87': section87,
        'ochenta y siete': section87,

        '88': section88,
        'ochenta y ocho': section88,

        '89': download89,
        'ochenta y nueve': download89,

        '90': download90,
        'noventa': download90,

        '91': download91,
        'noventa y uno': download91,

        '92': download92,
        'noventa y dos': download92,

        '93': section93,
        'ochenta y tres': section93,

        '94': download94,
        'noventa y cuatro': download94,

        '95': section95,
        'noventa y cinco': section95,

        '96': download96,
        'noventa y seis': download96,

        '97': section97,
        'noventa y cinco': section97,

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