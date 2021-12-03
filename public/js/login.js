/*
// VALIDACIONES DE LOGIN DE USUARIOS
//Email (Obligatorio. deberá ser válido.(Opcional → Debe existir en la base))
//Contraseña (Obligatoria)
*/

window.addEventListener("load", function validacionesLogin() {

    let loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', function (e) {

        let erroresLogin = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html

        let campoEmail = document.querySelector("#emailLogin");
        let expresionRegular = /\S+@\S+.\S+/;

        if (expresionRegular.test(campoEmail)) { // Si el valor de campoEmail no contiene elementos de la expresión regular, entonces...
            erroresLogin.push("El campo email debe ser válido") // Que mande el error a la variable
        } else if (campoEmail.value == "") { // Si el campo está vacío, entonces....
            erroresLogin.push("El campo email es obligatorio")
        }

        let campoContrasena = document.querySelector("#passwordLogin");

        if (campoContrasena.value == "") { // Si el valor de campoContraseña es vacio, entonces...
            erroresLogin.push("El campo contraseña debe estar completo") // Que mande el error a la variable
        } else if (campoContrasena.value.length < 8) { // Si ingreso menos de 8 caracteres, entonces....
            erroresLogin.push("El campo contraseña debe tener al menos 8 caracteres")
        }

        if (erroresLogin.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('#login-validator-front')
            console.log(ulErrores)
            for (let i = 0; i < erroresLogin.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<p>" + erroresLogin[i] + "</p>"
            }
        }
    })

})