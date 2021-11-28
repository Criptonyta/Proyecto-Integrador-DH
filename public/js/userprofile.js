window.addEventListener("load",function(){
    let botonInstrumento = document.getElementById("userprofile-eliminarInstrumento")
    let checkboxinstrumento = document.querySelectorAll("input[name='eliminarInstrumento']")
    let botonCancion = document.getElementById("userprofile-eliminarcancion")
    let checkboxCancion = document.querySelectorAll("input[name='eliminarCancion']")
    //Para instrumento
    if (checkboxinstrumento.length == "0"){//Si no tengo instrumentos subidos, no me muestres el boton...
        botonInstrumento.style.display = "none"
    }
    else {
        let instrumentosMarcados = 0
        botonInstrumento.style.display = "none"
        for (let i = 0; i < checkboxinstrumento.length; i++) {
            checkboxinstrumento[i].addEventListener("change",function(){
                if (checkboxinstrumento[i].checked == true){
                    instrumentosMarcados++
                }
                else if (checkboxinstrumento[i].checked == false){
                    instrumentosMarcados--
                }
                if (instrumentosMarcados !=0){
                    botonInstrumento.style.display = "flex"
                }
                else {
                    botonInstrumento.style.display = "none"
                }
            })
            
        }
    }
    //Para cancion
    if (checkboxCancion.length == "0"){//Si no tengo instrumentos subidos, no me muestres el boton...
        botonCancion.style.display = "none"
    }
    else {
        let cancionesMarcados = 0
        botonCancion.style.display = "none"
        for (let i = 0; i < checkboxCancion.length; i++) {
            checkboxCancion[i].addEventListener("change",function(){
                if (checkboxCancion[i].checked == true){
                    cancionesMarcados++
                }
                else if (checkboxCancion[i].checked == false){
                    cancionesMarcados--
                }
                if (cancionesMarcados !=0){
                    botonCancion.style.display = "flex"
                }
                else {
                    botonCancion.style.display = "none"
                }
            })
            
        }
    }
})