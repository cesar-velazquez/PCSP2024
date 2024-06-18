
function CursorEstado() {
    let estadoCursor = localStorage.getItem("cursor");

    if (estadoCursor) {
        document.body.style.cursor = estadoCursor;
    }

    let ubicacion = window.location.pathname;
    let cursorActivo = localStorage.getItem("MarcaCursor");

    let newRuta = "url('../images/cursor/cursoracces.png'), auto";
    let PrincipalRuta = "url('./images/cursor/cursoracces.png'), auto";

    if (cursorActivo == "activado" && ubicacion == "/celulaode/pcsp-2024/modulo-1/actividad.html"
        || cursorActivo == "activado" && ubicacion == "/celulaode/pcsp-2024/modulo-2/modulo-2-actividad.html"
    ) {
        document.body.style.cursor = newRuta;
    } else if (cursorActivo == "activado") {
        document.body.style.cursor = PrincipalRuta;
    } else {
        document.body.style.cursor = "auto";
    }

    // Guardar la ruta del cursor después de establecerla
    localStorage.setItem("cursor", document.body.style.cursor);
}

let btncursor = document.getElementById("cursorBig");
btncursor.addEventListener('click', function () {
    location.reload();
    CursorEstado
});

CursorEstado();