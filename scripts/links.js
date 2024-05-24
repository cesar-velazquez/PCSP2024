

const botonResaltar = document.getElementById("link_resaltar");
const enlaces = document.querySelectorAll("a");

let resaltar = false;

botonResaltar.addEventListener("click", function() {
    
    resaltar = !resaltar;

    enlaces.forEach(enlace => {
        if (resaltar) {
        enlace.classList.add("resaltado");
        } else {
        enlace.classList.remove("resaltado");
        }
    });

});
