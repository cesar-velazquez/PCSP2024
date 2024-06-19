document.addEventListener("DOMContentLoaded", function () {
    annyang.setLanguage("es-MX");

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    let refreshPage = function () {
        location.reload();
    }

    var getPageNext = function () {
        location.href = './index.html';
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

    let abrirModal1 = function () {
        let modal = document.getElementById("modul-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarmodal1 = function () {
        let modal = document.getElementById("modul-1");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal2 = function () {
        let modal = document.getElementById("modul-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal2 = function () {
        let modal = document.getElementById("modul-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal3 = function () {
        let modal = document.getElementById("modul-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarmodal3 = function () {
        let modal = document.getElementById("modul-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalGloria = function () {
        let modal = document.getElementById("gloria");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalGloria = function () {
        let modal = document.getElementById("gloria");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalclaudia = function () {
        let modal = document.getElementById("claudia");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalclaudia = function () {
        let modal = document.getElementById("claudia");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalEzzio = function () {
        let modal = document.getElementById("ezzio");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalEzzio = function () {
        let modal = document.getElementById("ezzio");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalFati = function () {
        let modal = document.getElementById("fatima");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalFati = function () {
        let modal = document.getElementById("fatima");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalHilda = function () {
        let modal = document.getElementById("hilda");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalHilda = function () {
        let modal = document.getElementById("hilda");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalLaura = function () {
        let modal = document.getElementById("laura");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalLaura = function () {
        let modal = document.getElementById("laura");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalLourdes = function () {
        let modal = document.getElementById("lourdes");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarModalLourdes = function () {
        let modal = document.getElementById("lourdes");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    // abrirModalEzzio

    let modalAbierto1 = false;
    let modalAbierto2 = false;
    let modalAbierto3 = false;
    let modalAbierto4 = false;
    let modGloria = false;
    let modClaudia = false;
    let modEzzio = false;
    let modFati = false;
    let modHilda = false;
    let modLaura = false;
    let modLourdes = false;


    function abrirModal11() {
        if (modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true || modGloria == true
            || modGloria == true || modClaudia == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        abrirModal1();
        modalAbierto1 = true;
        // document.body.classList.add("modal-open");
    }

    function abrirModal22() {
        if (modalAbierto1 == true || modalAbierto3 == true || modalAbierto4 == true ||
            modGloria == true || modClaudia == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        abrirmodal2();
        modalAbierto2 = true;
    }

    function abrirModal33() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto4 == true ||
            modGloria == true || modClaudia == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        abrirmodal3();
        modalAbierto3 = true;
    }

    function abrirModalAyuda() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true ||
            modGloria == true || modClaudia == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        abrirAyuda();
        modalAbierto4 = true;
    }

    function abrirModalGloria() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modClaudia == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        modalGloria();
        modGloria = true;
    }

    function abrirModalClaudia() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modEzzio == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        modalclaudia();
        modClaudia = true;
    }

    function abrirModalEzzio() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modClaudia == true || modFati == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalFati();
            modFati = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        modalEzzio();
        modEzzio = true;
    }

    function abrirModalFati() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modClaudia == true || modEzzio == true
            || modHilda == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
        }
        modalFati();
        modFati = true;
    }

    function abrirModalHilda() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modClaudia == true || modEzzio == true
            || modFati == true || modLaura == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalLourdes();
            modLourdes = false;
            cerrarModalFati();
            modFati = false
        }
        modalHilda()
        modHilda = true;
    }

    function abrirModalLaura() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modClaudia == true || modEzzio == true
            || modFati == true || modHilda == true || modLourdes == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLourdes();
            modLourdes = false;
            cerrarModalFati();
            modFati = false
        }
        modalLaura();
        modLaura = true;
    }

    function abrirModalLourdes() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true
            || modGloria == true || modClaudia == true || modEzzio == true
            || modFati == true || modHilda == true || modLaura == true
        ) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
            cerrarModalGloria();
            modGloria = false;
            cerrarModalclaudia();
            modClaudia = false;
            cerrarModalEzzio();
            modEzzio = false;
            cerrarModalHilda();
            modHilda = false;
            cerrarModalLaura();
            modLaura = false;
            cerrarModalFati();
            modFati = false
        }
        modalLourdes();
        modLourdes = true;
    }

    // prueba faq        

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

    // prueba fin

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

    let section16 = function () {
        let element = document.getElementById("section16");
        PositionTop100(element);
    }

    let section15 = function () {
        let element = document.getElementById("section15");
        PositionTop100(element);
    }

    let section17 = function () {
        let element = document.getElementById("section17");
        PositionTop100(element);
    }

    let section26 = function () {
        let element = document.getElementById("section26");
        PositionTop100(element);
    }

    let section27 = function () {
        let element = document.getElementById("section27");
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

    let volverArriba = document.getElementById("btnVolver_Arriba");
    let volverA = function () {
        volverArriba.click();
    }

    let videoOn = false;
    let VideoPlay = document.getElementById("video1");
    let positionVid1 = document.getElementById("section11");
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

    let playVideo1 = function () {
        if (!videoOn) {
            playVideo();
        } else {
            videoOn = true;
            offVideo();
        }
    }

    let fullScreen = false
    let fullScreenVideo = function () {
        VideoPlay.click();
        VideoPlay.requestFullscreen();
        fullScreen = true;
    }

    let fullScreenVideoExit = function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            fullScreen = false;
        }
    }

    let fullScreenVideoToggle = function () {
        if (!fullScreen) {
            fullScreenVideo();
        } else {
            fullScreenVideoExit();
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        let num13Screen = document.getElementById("ident13");
        num13Screen.click();
    });

    let btn19 = document.getElementById("ident42");
    let downloadbtnLectura = function () {
        btn19.click();
    }

    let ident24 = document.getElementById("ident24");
    let abrirEnlace = function () {
        ident24.click();
    }

    let ident25 = document.getElementById("ident25");
    let abrirEnlace2 = function () {
        ident25.click();
    }


    var commands = {
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        // 'Descargar lectura fácil': descargarlecturafacil,
        'Inicio': inicioPagina,

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
        'Once': section11,

        '12': playVideo1,
        'Doce': playVideo1,
        'Play': playVideo1,
        'Pausa': playVideo1,


        '13': fullScreenVideoToggle,
        'Trece': fullScreenVideoToggle,

        '14': abrirCerrarfaq,
        'catorce': abrirCerrarfaq,

        '15': section15,
        'Quince': section15,

        '16': section16,
        'Dieciséis': section16,

        '17': section17,
        'Diecisiete': section17,

        '0': abrirModalAyuda,
        'cero': abrirModalAyuda,

        'cerrar': cerrarAyuda,

        '18': abrirModal11,
        'Dieciocho': abrirModal11,

        '19': cerrarmodal1,
        'Diecinueve': cerrarmodal1,

        '20': abrirModal22,
        'Veinte': abrirModal22,

        '21': cerrarModal2,
        'Veintiuno': cerrarModal2,

        '22': abrirModal33,
        'Veintidós': abrirModal33,

        '23': cerrarmodal3,
        'Veintitrés': cerrarmodal3,

        '24': abrirEnlace,
        'veinticuatro': abrirEnlace,

        '25': abrirEnlace2,
        'veinticinco': abrirEnlace2,

        '26': section26,
        'Veintiséis': section26,

        '27': section27,
        'Veintisiete': section27,

        '28': abrirModalGloria,
        'Veintiocho': abrirModalGloria,

        '29': cerrarModalGloria,
        'Veintinueve': cerrarModalGloria,

        '30': abrirModalClaudia,
        'treinta': abrirModalClaudia,

        '31': cerrarModalclaudia,
        'treinta y uno': cerrarModalclaudia,

        '32': abrirModalEzzio,
        'treinta y dos': abrirModalEzzio,

        '33': cerrarModalEzzio,
        'treinta y tres': cerrarModalEzzio,

        '34': abrirModalFati,
        'treinta y cuatro': abrirModalFati,

        '35': cerrarModalFati,
        'treinta y cinco': cerrarModalFati,

        '36': abrirModalHilda,
        'treinta y séis': abrirModalHilda,

        '37': cerrarModalHilda,
        'treinta y siete': cerrarModalHilda,

        '38': abrirModalLaura,
        'treinta y ocho': abrirModalLaura,

        '39': cerrarModalLaura,
        'treinta y nueve': cerrarModalLaura,

        '40': abrirModalLourdes,
        'Cuarenta': abrirModalLourdes,

        '41': cerrarModalLourdes,
        'cuarenta y uno': cerrarModalLourdes,

        '42': downloadbtnLectura,
        'cuarenta y dos': downloadbtnLectura,

        '43': volverA,
        'cuarenta y tres': volverA,

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
    // annyang.setLanguage("es-MX");
});


const btn_access = document.getElementById('btn-access');
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

// MODALES:
let num19 = document.getElementById("ident19");
let num19_1 = document.getElementById("ident19_1");
let num21 = document.getElementById("ident21");
let num21_1 = document.getElementById("ident21_1");
let num23 = document.getElementById("ident23");
let num23_1 = document.getElementById("ident23_1");
let num29 = document.getElementById("ident29");
let num29_1 = document.getElementById("ident29_1");
let num31 = document.getElementById("ident31");
let num31_1 = document.getElementById("ident31_1");
let num33 = document.getElementById("ident33");
let num33_1 = document.getElementById("ident33_1");
let num35 = document.getElementById("ident35");
let num35_1 = document.getElementById("ident35_1");
let num37 = document.getElementById("ident37");
let num37_1 = document.getElementById("ident37_1");
let num39 = document.getElementById("ident39");
let num39_1 = document.getElementById("ident39_1");
let num41 = document.getElementById("ident41");
let num41_1 = document.getElementById("ident41_1");

let cerrar_help = document.getElementById("cerrar");

// botones cerrar modal 0
let num11_1 = document.getElementById("ident1_1");
// botones cerrar modal 10
// let num1_h = document.getElementById("ident1_h");
let cerrarAyudaM = document.getElementById("btnCerrarv2");
// botones cerrar modal 12
let num13_1 = document.getElementById("ident1_2");
// let num14 = document.getElementById("ident14");
// botones cerrar modal 14

let num15_3 = document.getElementById("ident15_3");

let Numbers = localStorage.getItem("NumberAnnyang_1");

if (Numbers === "activado") {
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
    num42.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num43.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');

    // modales:
    cerrarAyudaM.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    cerrar_help.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');

    num19.style.display = "inline-flex";
    num19_1.style.display = "inline-flex";

    num21.style.display = "inline-flex";
    num21_1.style.display = "inline-flex";

    num23.style.display = "inline-flex";
    num23_1.style.display = "inline-flex";

    num29.style.display = "inline-flex";
    num29_1.style.display = "inline-flex";

    num31.style.display = "inline-flex";
    num31_1.style.display = "inline-flex";

    num33.style.display = "inline-flex";
    num33_1.style.display = "inline-flex";

    num35.style.display = "inline-flex";
    num35_1.style.display = "inline-flex";

    num37.style.display = "inline-flex";
    num37_1.style.display = "inline-flex";

    num39.style.display = "inline-flex";
    num39_1.style.display = "inline-flex";

    num41.style.display = "inline-flex";
    num41_1.style.display = "inline-flex";
    annyang.setLanguage('es-MX');
    annyang.start();

}

let menuactivo = Numbers === "activado";
btn_access.addEventListener('click', function () {
    if (!menuactivo && screen.width > 1023) {
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
        num14.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
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
        num42.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num43.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        // modales:
        // cerrarAyudaM.tyle.display = "inline-flex";
        cerrar_help.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');

        num19.style.display = "inline-flex";
        num19_1.style.display = "inline-flex";

        num21.style.display = "inline-flex";
        num21_1.style.display = "inline-flex";

        num23.style.display = "inline-flex";
        num23_1.style.display = "inline-flex";

        num29.style.display = "inline-flex";
        num29_1.style.display = "inline-flex";

        num31.style.display = "inline-flex";
        num31_1.style.display = "inline-flex";

        num33.style.display = "inline-flex";
        num33_1.style.display = "inline-flex";

        num35.style.display = "inline-flex";
        num35_1.style.display = "inline-flex";

        num37.style.display = "inline-flex";
        num37_1.style.display = "inline-flex";

        num39.style.display = "inline-flex";
        num39_1.style.display = "inline-flex";

        num41.style.display = "inline-flex";
        num41_1.style.display = "inline-flex";
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
        num42.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        num43.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        // btones cerrar modales:
        cerrarAyudaM.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');
        cerrar_help.classList.remove("ident_Faqs", 'animate__animated', 'animate__heartBeat');

        num19.style.display = "none";
        num19_1.style.display = "none";

        num21.style.display = "none";
        num21_1.style.display = "none";

        num23.style.display = "none";
        num23_1.style.display = "none";

        num29.style.display = "none";
        num29_1.style.display = "none";

        num31.style.display = "none";
        num31_1.style.display = "none";

        num33.style.display = "none";
        num33_1.style.display = "none";

        num35.style.display = "none";
        num35_1.style.display = "none";

        num37.style.display = "none";
        num37_1.style.display = "none";

        num39.style.display = "none";
        num39_1.style.display = "none";

        num41.style.display = "none";
        num41_1.style.display = "none";
        localStorage.setItem("NumberAnnyang_1", "desactivado");
    }
});