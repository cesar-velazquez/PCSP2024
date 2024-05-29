// Resaltar enlaces:
let link_resaltar = document.getElementById('link_resaltar');

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


let LectorInmersivo = document.getElementById("btn_lectorInmersivo");
let iconLectorInmersivo = document.getElementById("icon_lector_inmersivo");
let iconLectorInmersivoActive = document.getElementById("icon_lector_inmersivo_active");
let cerrarLectorIn = document.getElementById("cerrarLectorIn");

let LectorIn = false;
LectorInmersivo.addEventListener('click', function () {
    if (!LectorIn) {
        LectorIn = true;
        iconLectorInmersivo.style.display = "none";
        iconLectorInmersivoActive.style.display = "inline-flex";
        LectorInmersivo.classList.add("HerramientaActivada");
    }
});

cerrarLectorIn.addEventListener('click', function () {
    LectorIn = false;
    console.log("remove Ha");
    iconLectorInmersivo.style.display = "inline-flex";
    iconLectorInmersivoActive.style.display = "none";
    LectorInmersivo.classList.remove("HerramientaActivada");
});


let iconComandoVoz = document.getElementById("icon_comando_voz");
let icon_comandovoz_Active = document.getElementById("icon_comandovoz_activo");

