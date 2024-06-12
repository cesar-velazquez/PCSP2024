let menu = document.querySelector('.menuacces');
let btnAccess = document.querySelector('.btnAccessUniversal');

function handleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

document.addEventListener('click', function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBtnAcces = btnAccess.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBtnAcces) {
        menu.classList.remove('active');
    }
});

// función que hace que se cierre mi menú cuando ya se haya seleccionado una opción:
// font_size
let btnFont_size = document.getElementById("font_size");
btnFont_size.addEventListener('click', function () {
    handleMenu();
})
// link_resaltar
let btnHiper = document.getElementById("link_resaltar");
btnHiper.addEventListener('click', function () {
    handleMenu();
})
// cursorBig
let btnCursor = document.getElementById("cursorBig");
btnCursor.addEventListener('click', function () {
    handleMenu();
})
// voz
let btnComandVoz = document.getElementById("btn-access");
btnComandVoz.addEventListener('click', function () {
    handleMenu();
})
// btn_lectorInmersivo
let btnLectorInm = document.getElementById("btn_lectorInmersivo");
btnLectorInm.addEventListener('click', function () {
    handleMenu();
})
// enlaceaLecturaF
let btnLecturaF = document.getElementById("enlaceaLecturaF");
btnLecturaF.addEventListener('click', function () {
    handleMenu();
})
// lineaLectura
let btnLineaLect = document.getElementById("lineaLectura");
btnLineaLect.addEventListener('click', function () {
    handleMenu();
})



// Función para mostrar linea
let linea = document.getElementById("readline");
let estadoLinea = localStorage.getItem("LineaActiva");

if (estadoLinea) {
    linea.classList.add("active");
}

function showLine() {
    if (linea.classList.contains('active')) {
        linea.classList.remove('active');
        localStorage.removeItem("LineaActiva");
    } else {
        linea.classList.add('active');
        localStorage.setItem("LineaActiva", "activado");
    }
}

function detectarPosicionMouse(event) {
    let line = document.getElementById("readline");
    const y = event.clientY;
    line.style.top = y + 'px';
}

// Fin función


let estadoCursor = localStorage.getItem("cursor");

if (estadoCursor) {
    document.body.style.cursor = estadoCursor;
}

// Función para cambiar el tamaño del cursor
let btncursor = document.getElementById("cursorBig");
let cursorActivo = !!estadoCursor;

btncursor.addEventListener('click', function (e) {
    if (!cursorActivo) {
        document.body.style.cursor = "url('../images/cursor/cursoracces.png'), auto";
        cursorActivo = true;
        localStorage.setItem("cursor", document.body.style.cursor);
    } else {
        localStorage.removeItem("cursor");
        document.body.style.cursor = "auto";
        cursorActivo = false;
    }
});



