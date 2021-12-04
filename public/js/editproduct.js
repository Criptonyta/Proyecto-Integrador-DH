function showPreview(event, id) {
    if (event.target.files.length > 0 && event.target.files[0].type == "image/jpeg") {
        let src = URL.createObjectURL(event.target.files[0])
        let preview = document.getElementById(id)
        preview.src = src
    } else {
        let foto = document.getElementById("editProduct-instrumentPhoto")
        let inputFoto = document.getElementById("productEmptyButton")
        foto.style.display = "none"
        inputFoto.value = null
        alert("Solo se pueden cargar fotos!")
    }
}

window.addEventListener("load", function () {
    let foto = document.getElementById("editProduct-instrumentPhoto")
    let inputFoto = document.getElementById("productEmptyButton")
    inputFoto.addEventListener("change", function (e) {
        try {
            foto.style.display = "block"
            showPreview(e, "editProduct-instrumentPhoto")
        } catch (error) {
            foto.style.display = "none"
            console.log(error)
        }
    })





    // MODIFICACION DE PRODUCTOS / TRABAJA SOBRE PRODUCTEMPTY.EJS
    // (Nombre Obligatorio. Deberá tener al menos 5 caracteres)
    // Descripción (Deberá tener al menos 20 caracteres)
    //Imagen(Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))


    let editProductForm = document.querySelector('.product-container'); // Atrapo el formulario con la clase reserva

    editProductForm.addEventListener('submit', function (e) {

        let erroresProducts = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html

        //Inicio las validaciones, capturando primero cada campo del form
        let campoTitulo = document.querySelector("#titulo");

        if (campoTitulo.value == "") { // Si el valor de campoNombre es vacio, entonces...
            erroresProducts.push("El campo título debe estar completo") // Que mande el error a la variable
        } else if (campoTitulo.value.length < 5) { // Si ingreso menos de 5 caracteres, entonces....
            erroresProducts.push("El campo título debe tener al menos 5 caracteres")
        }

        let campoDescripcion = document.querySelector("#descripcion");

        if (campoDescripcion.value == "") { // Si el valor de campoDescripcion es vacio, entonces...
            erroresProducts.push("El campo descripción debe estar completo") // Que mande el error a la variable
        } else if (campoDescripcion.value.length < 20) { // Si ingreso menos de 20 caracteres, entonces....
            erroresProducts.push("El campo descripción debe tener al menos 20 caracteres")
        }

        let campoImagen = document.querySelector("#productEmptyButton"); // <--FALTA COMPLETAR!

        /*if (campoImagen.value == "") { // Si el valor de campoImagen es vacio, entonces...
            erroresProducts.push("El campo imagen debe estar completo") // Que mande el error a la variable
        } else if (campoImagen.value.length < 2) { // Si ingreso menos de 2 caracteres, entonces....
            erroresProducts.push("El campo imagen debe tener al menos 2 caracteres")
        }*/

        if (erroresProducts.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('#editproduct-validator-front')

            for (let i = 0; i < erroresProducts.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<p>" + erroresProducts[i] + "</p>"
            }
        }
    })
})