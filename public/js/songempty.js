function showPreview(event,id){
    if (event.target.files.length>0 && event.target.files[0].type == "image/jpeg"){
        let src = URL.createObjectURL(event.target.files[0])
        let preview = document.getElementById(id)
        preview.src = src
    }
    else {
        let foto =  document.getElementById("songempty-songPhoto")
        let inputFoto = document.getElementById("songEmptyImgBtn")
        foto.style.display = "none"
        inputFoto.value = null
        alert("Solo se pueden cargar fotos!")
    }
}

window.addEventListener("load",function(){
    let foto = document.getElementById("songempty-songPhoto")
    let inputFoto = document.getElementById("songEmptyImgBtn")
    inputFoto.addEventListener("change",function(e){
        try {
            foto.style.display = "block"
            showPreview(e,"songempty-songPhoto")
        } catch (error) {
            foto.style.display = "none"
            console.log(error)
        }
    })
})