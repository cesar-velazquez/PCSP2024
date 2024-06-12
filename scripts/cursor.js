let estadoCursor = localStorage.getItem("cursor");

if (estadoCursor) {
    document.body.style.cursor = estadoCursor;
}

// Función para cambiar el tamaño del cursor
let btncursor = document.getElementById("cursorBig");
let cursorActivo = !!estadoCursor;

btncursor.addEventListener('click', function (e) {
    if (!cursorActivo) {
        document.body.style.cursor = "url('/images/cursor/cursoracces.png'), auto";
        cursorActivo = true;
        localStorage.setItem("cursor", document.body.style.cursor);
    } else {
        localStorage.removeItem("cursor");
        document.body.style.cursor = "auto";
        cursorActivo = false;
    }
});