// VALIDACIONES FRONT - REGISTRO DE USUARIOS 
// REGISTRO DE USUARIOS 
// Nombre y apellido (Obligatorio. Deberá tener al menos 2 caracteres.)
// Email ( Obligatorio. Deberá ser válido.) (Opcional) → No puede repetirse con los e-mails ya registrados.
// Contraseña(Obligatoria.Deberá tener al menos 8 caracteres. (Opcional) → Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.
// Imagen (Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))

window.addEventListener("load", function validacionesRegistro() {
   let registroForm = document.querySelector('.form-register'); // Atrapo el formulario con la clase reserva

    registroForm.addEventListener('submit', function (e) {

        let erroresRegister = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html

        //Inicio las validaciones, capturando primero cada campo del form
        let campoNombre = document.querySelector("#nombre");

        if (campoNombre.value == "") { // Si el valor de campoNombre es vacio, entonces...
           erroresRegister.push("El campo de nombre debe estar completo") // Que mande el error a la variable
        } else if (campoNombre.value.length < 2 ) { // Si ingreso menos de 2 caracteres, entonces....
            erroresRegister.push("El campo nombre debe tener al menos 2 caracteres")
        }

        let campoApellido = document.querySelector("#apellido");

        if (campoApellido.value == "") { // Si el valor de campoApellido es vacio, entonces...
            erroresRegister.push("El campo apellido debe estar completo") // Que mande el error a la variable
        } else if (campoApellido.value.length < 2 ) { // Si ingreso menos de 2 caracteres, entonces....
            erroresRegister.push("El campo apellido debe tener al menos 2 caracteres")
        }

         let campoEmail = document.querySelector("#email");
         let expresionRegular =  /\S+@\S+.\S+/;

        if (expresionRegular.test (campoEmail)) { // Si el valor de campoEmail no contiene elementos de la expresión regular, entonces...
             erroresRegister.push("El campo email debe ser válido") // Que mande el error a la variable
         } else if  (campoEmail.value == "") { // Si el campo está vacío, entonces....
            erroresRegister.push("El campo email es obligatorio")
         }
        
         let campoContrasena = document.querySelector("#password");

         if (campoContrasena.value == "") { // Si el valor de campoContraseña es vacio, entonces...
             erroresRegister.push("El campo contraseña debe estar completo") // Que mande el error a la variable
         } else if (campoContrasena.value.length < 8 ) { // Si ingreso menos de 8 caracteres, entonces....
            erroresRegister.push("El campo contraseña debe tener al menos 8 caracteres")
         }

         let campoImagen = document.querySelector("#userAvatarRegisterButton"); // <--FALTA COMPLETAR!

         if (campoImagen.value == "") { // Si el valor de campoImagen es vacio, entonces...
            erroresRegister.push("El campo imagen debe estar completo") // Que mande el error a la variable
         } else if (campoApellido.value.length < 2 ) { // Si ingreso menos de 2 caracteres, entonces....
             erroresRegister.push("El campo imagen debe tener al menos 2 caracteres")
         }

         if (erroresRegister.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('validator-errors')
            for (let i = 0; i < erroresRegister.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<li>" + erroresRegister[i] + "</li>"
            }

         }
    })              
})  


    
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
         let expresionRegular =  /\S+@\S+.\S+/;

        if (expresionRegular.test (campoEmail)) { // Si el valor de campoEmail no contiene elementos de la expresión regular, entonces...
            erroresLogin.push("El campo email debe ser válido") // Que mande el error a la variable
         } else if  (campoEmail.value == "") { // Si el campo está vacío, entonces....
            erroresLogin.push("El campo email es obligatorio")
         }
        
         let campoContrasena = document.querySelector("#passwordLogin");

         if (campoContrasena.value == "") { // Si el valor de campoContraseña es vacio, entonces...
            erroresLogin.push("El campo contraseña debe estar completo") // Que mande el error a la variable
         } else if (campoContrasena.value.length < 8 ) { // Si ingreso menos de 8 caracteres, entonces....
            erroresLogin.push("El campo contraseña debe tener al menos 8 caracteres")
         }

         if (erroresLogin.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('validator-errors')
            for (let i = 0; i < erroresLogin.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<li>" + erroresLogin[i] + "</li>"
            }

         }
      
         
    })

})

// CREACION Y MODIFICACION DE PRODUCTOS / TRABAJA SOBRE PRODUCTEMPTY.EJS
// (Nombre Obligatorio. Deberá tener al menos 5 caracteres)
// Descripción (Deberá tener al menos 20 caracteres)
//Imagen(Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))

window.addEventListener("load", function validacionesProductos() {
    let editProductForm = document.querySelector('#product-container'); // Atrapo el formulario con la clase reserva
 
    editProductForm.addEventListener('submit', function (e) {
 
         let erroresProducts = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html
 
         //Inicio las validaciones, capturando primero cada campo del form
         let campoNombre = document.querySelector("#titulo");
 
         if (campoTitulo.value == "") { // Si el valor de campoNombre es vacio, entonces...
            erroresProducts.push("El campo título debe estar completo") // Que mande el error a la variable
         } else if (campoTitulo.value.length < 5 ) { // Si ingreso menos de 5 caracteres, entonces....
            erroresProducts.push("El campo título debe tener al menos 5 caracteres")
         }
 
         let campoDescripcion = document.querySelector("#descripcion");
 
         if (campoDescripcion.value == "") { // Si el valor de campoDescripcion es vacio, entonces...
            erroresProducts.push("El campo descripción debe estar completo") // Que mande el error a la variable
         } else if (campoDescripcion.value.length < 20 ) { // Si ingreso menos de 20 caracteres, entonces....
            erroresProducts.push("El campo descripción debe tener al menos 20 caracteres")
         }

         let campoImagen = document.querySelector("#productEmptyButton"); // <--FALTA COMPLETAR!

         if (campoImagen.value == "") { // Si el valor de campoImagen es vacio, entonces...
            erroresProducts.push("El campo imagen debe estar completo") // Que mande el error a la variable
         } else if (campoImagen.value.length < 2 ) { // Si ingreso menos de 2 caracteres, entonces....
             erroresProducts.push("El campo imagen debe tener al menos 2 caracteres")
         }

         if (erroresProducts.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('validator-errors')
            for (let i = 0; i < erroresProducts.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<li>" + erroresProducts[i] + "</li>"
            }
        }        
    })
})

// CREACION Y MODIFICACION DE CANCIONES / TRABAJA SOBRE SONGEMPTY.EJS
// (Nombre Obligatorio. Deberá tener al menos 5 caracteres)
// Descripción (Deberá tener al menos 20 caracteres)
//Imagen(Deberá ser un archivo válido (JPG, JPEG, PNG, GIF))

window.addEventListener("load", function validacionesSongs() {
    let editSongForm = document.querySelector('#song-container'); // Atrapo el formulario con la clase reserva
 
    editSongForm.addEventListener('submit', function (e) {
 
         let erroresSongs = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html
 
         //Inicio las validaciones, capturando primero cada campo del form
         let campoTitulo = document.querySelector("#titulo");
 
         if (campoTitulo.value == "") { // Si el valor de campoTitulo es vacio, entonces...
            erroresSongs.push("El campo título debe estar completo") // Que mande el error a la variable
         } else if (campoTitulo.value.length < 5 ) { // Si ingreso menos de 5 caracteres, entonces....
            erroresSongs.push("El campo título debe tener al menos 5 caracteres")
         }
 
         let campoDescripcion = document.querySelector("#descripcion");
 
         if (campoDescripcion.value == "") { // Si el valor de campoDescripcion es vacio, entonces...
            erroresSongs.push("El campo descripción debe estar completo") // Que mande el error a la variable
         } else if (campoDescripcion.value.length < 20 ) { // Si ingreso menos de 20 caracteres, entonces....
            erroresSongs.push("El campo descripción debe tener al menos 20 caracteres")
         }

         let campoImagen = document.querySelector("#productEmptyButton"); // <--FALTA COMPLETAR!

         if (campoImagen.value == "") { // Si el valor de campoImagen es vacio, entonces...
            erroresSongs.push("El campo imagen debe estar completo") // Que mande el error a la variable
         } else if (campoImagen.value.length < 2 ) { // Si ingreso menos de 2 caracteres, entonces....
            erroresSongs.push("El campo imagen debe tener al menos 2 caracteres")
         }

         if (erroresSongs.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('validator-errors')
            for (let i = 0; i < erroresSongs.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<li>" + erroresSongs[i] + "</li>"
            }
        }        
    })
})


module.exports = {validacionesRegistro, validacionesLogin, validacionesProductos, validacionesSongs}