function showPreview(event, id) {
    if (event.target.files.length > 0 && (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg" || event.target.files[0].type == "image/gif" || event.target.files[0].type == "image/png")) {
        let src = URL.createObjectURL(event.target.files[0])
        let preview = document.getElementById(id)
        preview.src = src
    } else {
        let foto = document.getElementById("editSong-coverPhoto")
        let inputFoto = document.getElementById("songEmptyImgBtn")
        foto.style.display = "none"
        inputFoto.value = null
        alert("Solo se pueden cargar fotos!")
    }
}

window.addEventListener("load", function () {
    let foto = document.getElementById("editSong-coverPhoto")
    let inputFoto = document.getElementById("songEmptyImgBtn")
    inputFoto.addEventListener("change", function (e) {
        try {
            foto.style.display = "block"
            showPreview(e, "editSong-coverPhoto")
        } catch (error) {
            foto.style.display = "none"
            console.log(error)
        }
    })





    //  MODIFICACION DE CANCIONES / TRABAJA SOBRE editSong.EJS
    // (Nombre Obligatorio. Deberá tener al menos 5 caracteres)
    // Descripción (Deberá tener al menos 20 caracteres)
    //Imagen(Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))


    let editSongForm = document.querySelector('.product-container'); // Atrapo el formulario con la clase reserva

    editSongForm.addEventListener('submit', function (e) {

        let erroresSongs = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html
        console.log(erroresSongs)

        //Inicio las validaciones, capturando primero cada campo del form
        let campoTitulo = document.querySelector("#titulo");

        if (campoTitulo.value == "") { // Si el valor de campoTitulo es vacio, entonces...
            erroresSongs.push("El campo título debe estar completo") // Que mande el error a la variable
        } else if (campoTitulo.value.length < 6) { // Si ingreso menos de 5 caracteres, entonces....
            erroresSongs.push("El campo título debe tener al menos 5 caracteres")
        }

        let campoDescripcion = document.querySelector("#descripcion");

        if (campoDescripcion.value == "") { // Si el valor de campoDescripcion es vacio, entonces...
            erroresSongs.push("El campo descripción debe estar completo") // Que mande el error a la variable
        } else if (campoDescripcion.value.length < 20) { // Si ingreso menos de 20 caracteres, entonces....
            erroresSongs.push("El campo descripción debe tener al menos 20 caracteres")
        }


        if (erroresSongs.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('#editsong-validator-front')
            for (let i = 0; i < erroresSongs.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<p>" + erroresSongs[i] + "</p>"
            }
        }
    })
})