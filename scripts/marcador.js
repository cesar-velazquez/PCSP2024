// Resaltar enlaces:
let link_resaltar = document.getElementById('link_resaltar');
let iconLink = document.getElementById("icon_Link");
let iconLinkActive = document.getElementById("icon_Link_Active");

let linkactivo = false;
link_resaltar.addEventListener('click', function () {
    if (!linkactivo) {
        linkactivo = true;
        iconLink.style.display = "none";
        iconLinkActive.style.display = "inline-flex";
        link_resaltar.classList.add("HerramientaActivada");
    } else {
        linkactivo = false;
        iconLink.style.display = "inline-flex";
        iconLinkActive.style.display = "none";
        link_resaltar.classList.remove("HerramientaActivada");
        link_resaltar.style.transitionDuration = ".5s";
    }
});

// Cursor:
let btn_Cursor = document.getElementById("cursorBig");
let iconCursor = document.getElementById("icon_Cursor");
let iconCursorActive = document.getElementById("icon_Cursor_Active");

let cursor = false;
btn_Cursor.addEventListener('click', function () {
    if (!cursor) {
        cursor = true;
        iconCursor.style.display = "none";
        iconCursorActive.style.display = "inline-flex";
        btn_Cursor.classList.add("HerramientaActivada");
    } else {
        cursor = false;
        iconCursor.style.display = "inline-flex";
        iconCursorActive.style.display = "none";
        btn_Cursor.classList.remove("HerramientaActivada");
        btn_Cursor.style.transitionDuration = ".5s";
    }
});

// tamaño fuente:
let btn_FontSize = document.getElementById("font_size");
let iconFontSize = document.getElementById("icon_FontSize");
let iconFontSizeActive = document.getElementById("icon_FontSize_Active");
let cuadroM1 = document.getElementById("cuadroModul1");
let cuadroM2 = document.getElementById("cuadroModul2");
let cuadroM3 = document.getElementById("cuadroModul3");

let btnFontS = false;
let cont = 1;
btn_FontSize.addEventListener('click', function () {
    cont += 1;
    console.log(cont)
    if (cont == 2 || cont == 3) {
        iconFontSize.style.display = "none";
        iconFontSizeActive.style.display = "inline-flex";
        btn_FontSize.classList.add("HerramientaActivada");

    }
    else {
        cont = 1;
        iconFontSize.style.display = "inline-flex";
        iconFontSizeActive.style.display = "none";
        btn_FontSize.classList.remove("HerramientaActivada");
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
})

// let LectorInmersivo = document.getElementById("btn_lectorInmersivo");
// let iconLectorInmersivo = document.getElementById("icon_lector_inmersivo");
// let iconLectorInmersivoActive = document.getElementById("icon_lector_inmersivo_active");
// let cerrarLectorIn = document.getElementById("cerrarLectorIn");

// let LectorIn = false;
// LectorInmersivo.addEventListener('click', function () {
//     if (!LectorIn) {
//         LectorIn = true;
//         iconLectorInmersivo.style.display = "none";
//         iconLectorInmersivoActive.style.display = "inline-flex";
//         LectorInmersivo.classList.add("HerramientaActivada");
//     }
// });

// cerrarLectorIn.addEventListener('click', function () {
//     LectorIn = false;
//     console.log("remove Ha");
//     iconLectorInmersivo.style.display = "inline-flex";
//     iconLectorInmersivoActive.style.display = "none";
//     LectorInmersivo.classList.remove("HerramientaActivada");
// });


let lineaLectura = document.getElementById("lineaLectura");
let iconLectura = document.getElementById("icon_Linea_Lectura");
let iconLecturaActive = document.getElementById("icon_Linea_Lectura_Active");

let lineaSelect = false;
lineaLectura.addEventListener('click', function () {
    if (!lineaSelect) {
        lineaSelect = true;
        iconLectura.style.display = "none";
        iconLecturaActive.style.display = "inline-flex";
        lineaLectura.classList.add("HerramientaActivada");
    } else {
        lineaSelect = false;
        iconLectura.style.display = "inline-flex";
        iconLecturaActive.style.display = "none";
        lineaLectura.classList.remove("HerramientaActivada");
        lineaLectura.style.transitionDuration = ".5s";
    }
});


