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
    let videoOn2 = false;
    let VideoPlay2 = document.getElementById("video85");
    let positionVid2 = document.getElementById("SectionVideo85");
    let playVideo2 = function () {
        videoOn2 = true;
        VideoPlay2.play();
        PositionTop100(positionVid2);
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
            let ocultar = document.getElementById("ident85");
            let mostrar = document.getElementById("pausa");
            ocultar.classList.remove("ident_Universal");
            mostrar.classList.add("ident_Universal");
            playVideo2();
        } else {
            let mostrar = document.getElementById("ident85");
            let ocultar = document.getElementById("pausa");
            mostrar.classList.add("ident_Universal");
            ocultar.classList.remove("ident_Universal");
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
            CerrarFaq98();
            faqAbierto98 = false;
            CerrarFaq99();
            faqAbierto99 = false;
            CerrarFaq100();
            faqAbierto100 = false;
            CerrarFaq114();
            faqAbierto114 = false;
            CerrarFaq115();
            faqAbierto115 = false;
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
    // let AbrirFaq60 = function () {
    //     let abrirfaqL1 = document.getElementById("faq60Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq60 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq60Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq61 = function () {
    //     let abrirfaqL1 = document.getElementById("faq61Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq61 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq61Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq62 = function () {
    //     let abrirfaqL1 = document.getElementById("faq62Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq62 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq62Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq81 = function () {
    //     let abrirfaqL1 = document.getElementById("faq81Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq81 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq81Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq82 = function () {
    //     let abrirfaqL1 = document.getElementById("faq82Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq82 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq82Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq83 = function () {
    //     let abrirfaqL1 = document.getElementById("faq83Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }

    // let CerrarFaq83 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq83Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq86 = function () {
    //     let abrirfaqL1 = document.getElementById("faq86Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq86 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq86Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }

    // // 
    // let AbrirFaq98 = function () {
    //     let abrirfaqL1 = document.getElementById("faq98Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq98 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq98Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq99 = function () {
    //     let abrirfaqL1 = document.getElementById("faq99Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq99 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq99Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq100 = function () {
    //     let abrirfaqL1 = document.getElementById("faq100Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq100 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq100Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }

    // let AbrirFaq114 = function () {
    //     let abrirfaqL1 = document.getElementById("faq114Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq114 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq114Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq115 = function () {
    //     let abrirfaqL1 = document.getElementById("faq115Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq115 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq115Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // let AbrirFaq116 = function () {
    //     let abrirfaqL1 = document.getElementById("faq116Act2");
    //     abrirfaqL1.setAttribute('aria-expanded', 'true');
    //     abrirfaqL1.setAttribute('open', '');
    // }
    // let CerrarFaq116 = function () {
    //     let cerrarfaqL1 = document.getElementById("faq116Act2");
    //     cerrarfaqL1.setAttribute('aria-expanded', 'false');
    //     cerrarfaqL1.removeAttribute('open', '');
    // }
    // 
    let faqAbierto31 = false;
    let faqAbierto32 = false;
    let faqAbierto33 = false;
    let faqAbierto42 = false;
    let faqAbierto43 = false;
    let faqAbierto44 = false;
    let faqAbierto54 = false;
    let faqAbierto55 = false;
    let faqAbierto56 = false;
    // let faqAbierto86 = false;
    // let faqAbierto98 = false;
    // let faqAbierto99 = false;
    // let faqAbierto100 = false;
    // let faqAbierto114 = false;
    // let faqAbierto115 = false;
    // let faqAbierto116 = false;


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
            PositionTop100(sectionLineamiento);
        } else {
            // Si el FAQ está abierto, ciérralo
            CerrarFaq56();
            faqAbierto56 = false;
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
        let element = document.getElementById("section57Act3");
        PositionTop100(element);
    }
    // function download58() {
    //     let btn = document.getElementById("download58");
    //     btn.click();
    //     PositionTop100(btn);
    // }
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
    function section88() {
        let element = document.getElementById("section88Act2");
        PositionTop100(element)
    }
    function download89() {
        let btn = document.getElementById("download89");
        btn.click();
    }
    function download90() {
        let btn = document.getElementById("download90");
        btn.click();
    }
    function download91() {
        let btn = document.getElementById("download91");
        btn.click();
    }
    function download92() {
        let btn = document.getElementById("download92");
        btn.click();
    }
    function section93() {
        let element = document.getElementById("section93Act2");
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
    function download96() {
        let btn = document.getElementById("donwload96");
        btn.click();
    }
    function section97() {
        let element = document.getElementById("section97Act2");
        PositionTop100(element)
    }
    function section101() {
        let element = document.getElementById("section101Act2");
        PositionTop100(element)
    }
    function section102() {
        let element = document.getElementById("section102Act2");
        PositionTop100(element)
    }
    function section103() {
        let element = document.getElementById("section103Act2");
        PositionTop100(element)
    }
    function download104() {
        let btn = document.getElementById("download104");
        btn.click();
    }
    function download105() {
        let btn = document.getElementById("download105");
        btn.click();
    }
    function download106() {
        let btn = document.getElementById("download106");
        btn.click();
    }
    function section107() {
        let element = document.getElementById("section107Act2");
        PositionTop100(element)
    }
    function download108() {
        let btn = document.getElementById("download108");
        btn.click();
    }
    function download109() {
        let btn = document.getElementById("download109");
        btn.click();
    }
    function section110() {
        let element = document.getElementById("section110Act2");
        PositionTop100(element)
    }
    function section111() {
        let element = document.getElementById("section111Act2");
        PositionTop100(element)
    }
    function download112() {
        let btn = document.getElementById("download112");
        btn.click();
    }
    function section113() {
        let element = document.getElementById("section113Act2");
        PositionTop100(element)
    }
    function section117() {
        let element = document.getElementById("section117Act2");
        PositionTop100(element)
    }
    function download118() {
        let btn = document.getElementById("btnLectura");
        btn.click();
    }
    function download119() {
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

        '59': section59,
        'número 59': section59,
        'cincuenta y nueve': section59,
        'número cincuenta y nueve': section59,

        // '60': abrircerrarfaq60,
        // 'número 60': abrircerrarfaq60,
        // 'sesenta': abrircerrarfaq60,
        // 'número sesenta': abrircerrarfaq60,

        // '61': abrircerrarfaq61,
        // 'número 61': abrircerrarfaq61,
        // 'sesenta y uno': abrircerrarfaq61,
        // 'número sesenta y uno': abrircerrarfaq61,

        // '62': abrircerrarfaq62,
        // 'número 62': abrircerrarfaq62,
        // 'sesenta y dos': abrircerrarfaq62,
        // 'número sesenta y dos': abrircerrarfaq62,

        '63': section63,
        'número 63': section63,
        'sesenta y tres': section63,
        'número sesenta y tres': section63,

        '64': section64,
        'número 64': section64,
        'sesenta y cuatro': section64,
        'número sesenta y cuatro': section64,

        '65': click65,
        'número 65': click65,
        'sesenta y cinco': click65,
        'número sesenta y cinco': click65,

        '66': click66,
        'número 66': click66,
        'sesenta y seis': click66,
        'número sesenta y seis': click66,

        '67': section67,
        'número 67': section67,
        'sesenta y siete': section67,
        'número sesenta y siete': section67,

        '68': section68,
        'número 68': section68,
        'sesenta y ocho': section68,
        'número sesenta y ocho': section68,

        '69': download69,
        'número 69': download69,
        'sesenta y nueve': download69,
        'número sesenta y nueve': download69,

        '70': download70,
        'número 70': download70,
        'setenta': download70,
        'número setenta': download70,

        '71': download71,
        'número 71': download71,
        'setenta y uno': download71,
        'número setenta y uno': download71,

        '72': download72,
        'número 72': download72,
        'setenta y dos': download72,
        'número setenta y dos': download72,

        '73': download73,
        'número 73': download73,
        'setenta y tres': download73,
        'número setenta y tres': download73,

        '74': download74,
        'número 74': download74,
        'setenta y cuatro': download74,
        'número setenta y cuatro': download74,

        '75': section75,
        'número 75': section75,
        'setenta y cinco': section75,
        'número setenta y cinco': section75,

        '76': section76,
        'número 76': section76,
        'setenta y seis': section76,
        'número setenta y seis': section76,

        '77': download77,
        'número 77': download77,
        'setenta y siete': download77,
        'número setenta y siete': download77,

        '78': section78,
        'número 78': section78,
        'setenta y ocho': section78,
        'número setenta y ocho': section78,

        '79': download79,
        'número 79': download79,
        'setenta y nueve': download79,
        'número setenta y nueve': download79,

        '80': section80,
        'número 80': section80,
        'ochenta': section80,
        'número ochenta': section80,

        // '81': abrircerrarfaq81,
        // 'número 81': abrircerrarfaq81,
        // 'ochenta y uno': abrircerrarfaq81,
        // 'número ochenta y uno': abrircerrarfaq81,

        // '82': abrircerrarfaq82,
        // 'número 82': abrircerrarfaq82,
        // 'ochenta y dos': abrircerrarfaq82,
        // 'número ochenta y dos': abrircerrarfaq82,

        // '83': abrircerrarfaq83,
        // 'número 83': abrircerrarfaq83,
        // 'ochenta y tres': abrircerrarfaq83,
        // 'número ochenta y tres': abrircerrarfaq83,

        '84': section84,
        'número 84': section84,
        'ochenta y cuatro': section84,
        'número ochenta y cuatro': section84,

        '85': playVideo85,
        'número 85': playVideo85,
        'ochenta y cinco': playVideo85,
        'número ochenta y cinco': playVideo85,

        // '86': abrircerrarfaq86,
        // 'número 86': abrircerrarfaq86,
        // 'ochenta y seis': abrircerrarfaq86,
        // 'número ochenta y seis': abrircerrarfaq86,

        '87': section87,
        'número 87': section87,
        'ochenta y siete': section87,
        'número ochenta y siete': section87,

        '88': section88,
        'número 88': section88,
        'ochenta y ocho': section88,
        'número ochenta y ocho': section88,

        '89': download89,
        'número 89': download89,
        'ochenta y nueve': download89,
        'número ochenta y nueve': download89,

        '90': download90,
        'número 90': download90,
        'noventa': download90,
        'número noventa': download90,

        '91': download91,
        'número 91': download91,
        'noventa y uno': download91,
        'número noventa y uno': download91,

        '92': download92,
        'número 92': download92,
        'noventa y dos': download92,
        'número noventa y dos': download92,

        '93': section93,
        'número 93': section93,
        'noventa y tres': section93,
        'número noventa y tres': section93,

        '94': download94,
        'número 94': download94,
        'noventa y cuatro': download94,
        'número noventa y cuatro': download94,

        '95': section95,
        'número 95': section95,
        'noventa y cinco': section95,
        'número noventa y cinco': section95,

        '96': download96,
        'número 96': download96,
        'noventa y seis': download96,
        'número noventa y seis': download96,

        '97': section97,
        'número 97': section97,
        'noventa y siete': section97,
        'número noventa y siete': section97,

        // '98': abrircerrarfaq98,
        // 'número 98': abrircerrarfaq98,
        // 'noventa y ocho': abrircerrarfaq98,
        // 'número noventa y ocho': abrircerrarfaq98,

        // '99': abrircerrarfaq99,
        // 'número 99': abrircerrarfaq99,
        // 'noventa y nueve': abrircerrarfaq99,
        // 'número noventa y nueve': abrircerrarfaq99,

        // '100': abrircerrarfaq100,
        // 'número 100': abrircerrarfaq100,
        // 'cien': abrircerrarfaq100,
        // 'número cien': abrircerrarfaq100,

        '101': section101,
        'número 101': section101,
        'ciento uno': section101,
        'número ciento uno': section101,

        '102': section102,
        'número 102': section102,
        'ciento dos': section102,
        'número ciento dos': section102,

        '103': section103,
        'número 103': section103,
        'ciento tres': section103,
        'número ciento tres': section103,

        '104': download104,
        'número 104': download104,
        'ciento cuatro': download104,
        'número ciento cuatro': download104,

        '105': download105,
        'número 105': download105,
        'ciento cinco': download105,
        'número ciento cinco': download105,

        '106': download106,
        'número 106': download106,
        'ciento seis': download106,
        'número ciento seis': download106,

        '107': section107,
        'número 107': section107,
        'ciento siete': section107,
        'número ciento siete': section107,

        '108': download108,
        'número 108': download108,
        'ciento ocho': download108,
        'número ciento ocho': download108,

        '109': download109,
        'número 109': download109,
        'ciento nueve': download109,
        'número ciento nueve': download109,

        '110': section110,
        'número 110': section110,
        'ciento diez': section110,
        'número ciento diez': section110,

        '111': section111,
        'número 111': section111,
        'ciento once': section111,
        'número ciento once': section111,

        '112': download112,
        'número 112': download112,
        'ciento doce': download112,
        'número ciento doce': download112,

        '113': section113,
        'número 113': section113,
        'ciento trece': section113,
        'número ciento trece': section113,

        // '114': abrircerrarfaq114,
        // 'número 114': abrircerrarfaq114,
        // 'ciento catorce': abrircerrarfaq114,
        // 'número ciento catorce': abrircerrarfaq114,

        // '115': abrircerrarfaq115,
        // 'número 115': abrircerrarfaq115,
        // 'ciento quince': abrircerrarfaq115,
        // 'número ciento quince': abrircerrarfaq115,

        // '116': abrircerrarfaq116,
        // 'número 116': abrircerrarfaq116,
        // 'ciento dieciséis': abrircerrarfaq116,
        // 'número ciento dieciséis': abrircerrarfaq116,

        '117': section117,
        'número 117': section117,
        'ciento diecisiete': section117,
        'número ciento diecisiete': section117,

        '118': download118,
        'número 118': download118,
        'ciento dieciocho': download118,
        'número ciento dieciocho': download118,

        '119': download119,
        'número 119': download119,
        'ciento diecinueve': download119,
        'número ciento diecinueve': download119,
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
// cerrar modales
let num13 = document.getElementById("ident13");
let num13_1 = document.getElementById("ident13_1");
let num15 = document.getElementById("ident15");
let num15_1 = document.getElementById("ident15_1");
let num17 = document.getElementById("ident17");
let num17_1 = document.getElementById("ident17_1");


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
        num2, num3, num4, num5, num6, num7, num8, num9, num10, num11, num18, num19, num20, num21, num22,
        num23, num24, num25, num26, num27, num28, num30, num34, num35, num36, num37, num39, num41, num45,
        num46, num47, num48, num49, num50, num51, num53, num57, num58, num60, num61, num62, num64, num68,
        num71, num74, num75, num78, num80, num83, num85, num89, num90,
    ];

    elementsToAnimateUniversal.forEach(element => {
        element.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // Código para botones y faqs    
    const elementsToAnimateFaqs = [
        cerrar_help, cerrarAyudaM, num1, num12, num13, num13_1, num14, num15, num15_1, num16, num17, num17_1, num29,
        num31, num32, num33, num38, num40, num42, num43, num44, num52, num54, num55, num56, num59, num63, num65, num66,
        num67, num69, num70, num72, num73, num76, num77, num79, num81, num82, num84, num86, num87, num88, num91,
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
        num2, num3, num4, num5, num6, num7, num8, num9, num10
    ]

    elementToRemoveUniversal.forEach(elementUniversal => {
        elementUniversal.classList.remove('ident_Universal', 'animate__animated', 'animate__heartBeat');
    });

    // CÓDIGO PARA FAQS Y BOTONES    
    const elementsToRemoveFaqs = [
        cerrar_help, cerrarAyudaM, num1
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

