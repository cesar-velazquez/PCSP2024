// Resaltar enlaces:
let link_resaltar = document.getElementById('link_resaltar');
let iconLink = document.getElementById("icon_Link");
let iconLinkActive = document.getElementById("icon_Link_Active");

let marcaLink = localStorage.getItem("MarcaLinks");

if (marcaLink === "activado") {
    link_resaltar.classList.add("HerramientaActivada");
    iconLink.style.display = "none";
    iconLinkActive.style.display = "inline-flex";
}
let linkactivo = marcaLink === "activado";

// let linkactivo = false;
link_resaltar.addEventListener('click', function () {
    if (!linkactivo) {
        linkactivo = true;
        iconLink.style.display = "none";
        iconLinkActive.style.display = "inline-flex";
        link_resaltar.classList.add("HerramientaActivada");
        localStorage.setItem("MarcaLinks", "activado");
    } else {
        linkactivo = false;
        iconLink.style.display = "inline-flex";
        iconLinkActive.style.display = "none";
        link_resaltar.classList.remove("HerramientaActivada");
        link_resaltar.style.transitionDuration = ".5s";
        localStorage.setItem("MarcaLinks", "desactivado");
    }
});









// Cursor:
let btn_Cursor = document.getElementById("cursorBig");
let iconCursor = document.getElementById("icon_Cursor");
let iconCursorActive = document.getElementById("icon_Cursor_Active");

// VERIFICAR SI HAY UN ESTADO GUARDADO:
let marca = localStorage.getItem("MarcaCursor");

if (marca === "activado") {
    btn_Cursor.classList.add("HerramientaActivada");
    iconCursor.style.display = "none";
    iconCursorActive.style.display = "inline-flex";
}

let cursor = marca === "activado";

btn_Cursor.addEventListener('click', function () {
    if (!cursor) {
        cursor = true;
        iconCursor.style.display = "none";
        iconCursorActive.style.display = "inline-flex";
        btn_Cursor.classList.add("HerramientaActivada");
        localStorage.setItem("MarcaCursor", "activado");
    } else {
        cursor = false;
        iconCursor.style.display = "inline-flex";
        iconCursorActive.style.display = "none";
        btn_Cursor.classList.remove("HerramientaActivada");
        btn_Cursor.style.transitionDuration = ".5s";
        localStorage.setItem("MarcaCursor", "desactivado");
    }
});


// tamaño fuente:
let btn_FontSize = document.getElementById("font_size");
let iconFontSize = document.getElementById("icon_FontSize");
let iconFontSizeActive = document.getElementById("icon_FontSize_Active");
let cuadroM1 = document.getElementById("cuadroModul1");
let cuadroM2 = document.getElementById("cuadroModul2");
let cuadroM3 = document.getElementById("cuadroModul3");

let marcaAzulFuente = localStorage.getItem("marcaAzulFuente");
let contador = parseFloat(localStorage.getItem("contador")) || 1;

if (marcaAzulFuente === "activado") {
    iconFontSize.style.display = "none";
    iconFontSizeActive.style.display = "inline-flex";
    btn_FontSize.classList.add("HerramientaActivada");
}

let btnFontS = marcaAzulFuente === "activado";
let cont = parseFloat(localStorage.getItem("contador")) || 1;

btn_FontSize.addEventListener('click', function () {
    cont += 1;
    if (cont === 2 || cont === 3) {
        iconFontSize.style.display = "none";
        iconFontSizeActive.style.display = "inline-flex";
        btn_FontSize.classList.add("HerramientaActivada");
        localStorage.setItem("marcaAzulFuente", "activado");
        localStorage.setItem("contador", cont.toString());
        // console.log("contador: " + cont)
    }
    else if (cont != 2 || cont != 3) {
        cont = 1;
        // console.log("es:" + cont)
        iconFontSize.style.display = "inline-flex";
        iconFontSizeActive.style.display = "none";
        btn_FontSize.classList.remove("HerramientaActivada");
        localStorage.setItem("marcaAzulFuente", "desactivado");
        localStorage.setItem("contador", cont.toString());
    }
    if (cont == 2) {
        cuadroM1.style.height = "262px";
        cuadroM2.style.height = "262px";
        cuadroM3.style.height = "262px";
    } else if (cont == 3) {
        cuadroM1.style.height = "292px";
        cuadroM2.style.height = "292px";
        cuadroM3.style.height = "292px";
    } else {
        cuadroM1.style.height = "auto";
        cuadroM2.style.height = "auto";
        cuadroM3.style.height = "auto";
    }
});













// Función Linea de lectura:
let lineaLectura = document.getElementById("lineaLectura");
let iconLectura = document.getElementById("icon_Linea_Lectura");
let iconLecturaActive = document.getElementById("icon_Linea_Lectura_Active");

let marcaAzulLinea = localStorage.getItem("marcaAzulLinea");
if (marcaAzulLinea === "activado") {
    lineaLectura.classList.add("HerramientaActivada");
    iconLecturaActive.style.display = "inline-flex";
    iconLectura.style.display = "none";
}

let lineaSelect = marcaAzulLinea === "activado";
lineaLectura.addEventListener('click', function () {
    if (!lineaSelect) {
        lineaSelect = true;
        iconLectura.style.display = "none";
        iconLecturaActive.style.display = "inline-flex";
        lineaLectura.classList.add("HerramientaActivada");
        localStorage.setItem("marcaAzulLinea", "activado");
    } else {
        lineaSelect = false;
        iconLectura.style.display = "inline-flex";
        iconLecturaActive.style.display = "none";
        lineaLectura.classList.remove("HerramientaActivada");
        lineaLectura.style.transitionDuration = ".5s";
        localStorage.setItem("marcaAzulLinea", "desactivado");
    }
});


