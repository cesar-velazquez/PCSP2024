let iconComandoVoz1 = document.getElementById("icon_comando_voz");
let icon_comandovoz_Active1 = document.getElementById("icon_comandovoz_activo");
let btn_access1 = document.getElementById('btn-access');

let microfono = document.getElementById("micro");
let contenedor_notas = document.getElementById("container_notes");


let marcaComandosVoz = localStorage.getItem("MarcaComandoVoz");

if (marcaComandosVoz === "activado") {    
    btn_access1.classList.add("HerramientaActivada");
    // btn_tamFuente.classList.add("HerramientaActivada");
    iconComandoVoz1.style.display = "none";
    icon_comandovoz_Active1.style.display = "inline-flex";

    microfono.classList.remove("bxs-microphone-off", "bx-flip-horizontal");
    microfono.classList.add("activeMicro", "bx-microphone", "bx-flip-horizontal");
    microfono.style.transitionDuration = "1s";
    contenedor_notas.classList.add('contenedorActivo');
}



let menuactivo1 = marcaComandosVoz === "activado";
btn_access1.addEventListener('click', function () {
    if (!menuactivo1 && screen.width > 1023) {        
        menuactivo1 = true;
        btn_access1.classList.add("HerramientaActivada");
        iconComandoVoz1.style.display = "none";
        icon_comandovoz_Active1.style.display = "inline-flex";

        microfono.classList.remove("bxs-microphone-off", "bx-flip-horizontal");
        microfono.classList.add("activeMicro", "bx-microphone", "bx-flip-horizontal");
        microfono.style.transitionDuration = "1s";
        contenedor_notas.classList.add('contenedorActivo');
        contenedor_notas.style.transitionDuration = "1s";

        localStorage.setItem("MarcaComandoVoz", "activado");
    } else {
        menuactivo1 = false;
        iconComandoVoz1.style.display = "inline-flex";
        icon_comandovoz_Active1.style.display = "none";
        btn_access1.classList.remove("HerramientaActivada");
        btn_access1.style.transitionDuration = "1s";
        localStorage.setItem("MarcaComandoVoz", "desactivado");

        microfono.classList.add("bx", "bxs-microphone-off", "bx-flip-horizontal");
        microfono.classList.remove("activeMicro", "bx-microphone", "bx-flip-horizontal");
        microfono.style.transitionDuration = "1s";
        contenedor_notas.classList.remove('contenedorActivo');
        contenedor_notas.style.transitionDuration = "1s";

    }
});
