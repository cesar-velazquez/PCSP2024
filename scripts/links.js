const botonResaltar = document.getElementById("link_resaltar");
const enlaces = document.querySelectorAll("a");

let LinkAzul = localStorage.getItem("LinkAzulR");
if (LinkAzul === "activado") {    
    enlaces.forEach(enlace => {
        enlace.classList.add("resaltado");
    })
}


let resaltar = LinkAzul === "activado";

botonResaltar.addEventListener("click", function () {
    resaltar = !resaltar;
    enlaces.forEach(enlace => {
        if (resaltar) {
            enlace.classList.add("resaltado");
            localStorage.setItem("LinkAzulR", "activado");
        } else {
            enlace.classList.remove("resaltado");
            localStorage.setItem("LinkAzulR", "desactivado");
        }
    });
});
