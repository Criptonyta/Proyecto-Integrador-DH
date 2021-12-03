function showPreview(event, id) {
    if (event.target.files.length > 0 && event.target.files[0].type == "image/jpeg") {
        let src = URL.createObjectURL(event.target.files[0])
        let preview = document.getElementById(id)
        preview.src = src
    } else {
        let foto = document.getElementById("register-instrumentPhoto")
        let inputFoto = document.getElementById("userAvatarRegisterButton")
        foto.style.display = "none"
        inputFoto.value = null
        alert("Solo se pueden cargar fotos!")
    }
}

window.addEventListener("load", function () {
    let foto = document.getElementById("register-instrumentPhoto")
    let inputFoto = document.getElementById("userAvatarRegisterButton")
    inputFoto.addEventListener("change", function (e) {
        try {
            foto.style.display = "block"
            showPreview(e, "register-instrumentPhoto")
        } catch (error) {
            foto.style.display = "none"
            console.log(error)
        }
    })




    // VALIDACIONES FRONT - REGISTRO DE USUARIOS 
    // REGISTRO DE USUARIOS 
    // Nombre y apellido (Obligatorio. Deberá tener al menos 2 caracteres.)
    // Email ( Obligatorio. Deberá ser válido.) (Opcional) → No puede repetirse con los e-mails ya registrados.
    // Contraseña(Obligatoria.Deberá tener al menos 8 caracteres. (Opcional) → Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.
    // Imagen (Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))


    let registroForm = document.querySelector('.form-register'); // Atrapo el formulario con la clase reserva

    registroForm.addEventListener('submit', function (e) {

        let erroresRegister = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html

        //Inicio las validaciones, capturando primero cada campo del form
        let campoNombre = document.querySelector("#nombre");

        if (campoNombre.value == "") { // Si el valor de campoNombre es vacio, entonces...
            erroresRegister.push("El campo de nombre debe estar completo") // Que mande el error a la variable
        } else if (campoNombre.value.length < 2) { // Si ingreso menos de 2 caracteres, entonces....
            erroresRegister.push("El campo nombre debe tener al menos 2 caracteres")
        }

        let campoApellido = document.querySelector("#apellido");

        if (campoApellido.value == "") { // Si el valor de campoApellido es vacio, entonces...
            erroresRegister.push("El campo apellido debe estar completo") // Que mande el error a la variable
        } else if (campoApellido.value.length < 2) { // Si ingreso menos de 2 caracteres, entonces....
            erroresRegister.push("El campo apellido debe tener al menos 2 caracteres")
        }

        let campoEmail = document.querySelector("#email");
        let expresionRegular = /\S+@\S+.\S+/;

        if (expresionRegular.test(campoEmail)) { // Si el valor de campoEmail no contiene elementos de la expresión regular, entonces...
            erroresRegister.push("El campo email debe ser válido") // Que mande el error a la variable
        } else if (campoEmail.value == "") { // Si el campo está vacío, entonces....
            erroresRegister.push("El campo email es obligatorio")
        }

        let campoContrasena = document.querySelector("#password");

        if (campoContrasena.value == "") { // Si el valor de campoContraseña es vacio, entonces...
            erroresRegister.push("El campo contraseña debe estar completo") // Que mande el error a la variable
        } else if (campoContrasena.value.length < 8) { // Si ingreso menos de 8 caracteres, entonces....
            erroresRegister.push("El campo contraseña debe tener al menos 8 caracteres")
        }

        let campoImagen = document.querySelector("#userAvatarRegisterButton"); // <--FALTA COMPLETAR!

        if (campoImagen.value == "") { // Si el valor de campoImagen es vacio, entonces...
            erroresRegister.push("El campo imagen debe estar completo") // Que mande el error a la variable
        } else if (campoApellido.value.length < 2) { // Si ingreso menos de 2 caracteres, entonces....
            erroresRegister.push("El campo imagen debe tener al menos 2 caracteres")
        }

        if (erroresRegister.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('#register-validator-front')
            for (let i = 0; i < erroresRegister.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<p>" + erroresRegister[i] + "</p>"
            }

        }
    })
})