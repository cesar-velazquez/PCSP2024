function MostrarPestaña(id) {
    console.log("Es el num: ", (id))
    let todosParr = document.querySelectorAll('.contenido_pestaña');
    for (let i = 0; i < todosParr.length; i++) {
        todosParr[i].style.display = 'none';
    }

    let parrMostrar = document.getElementById('tab' + id);
    parrMostrar.style.display = 'block';
}
