window.addEventListener("load",function(){
    let burgerButton = document.querySelector("#navbar-burgerButton")
    let desplegable = document.querySelector(".navbar-desplegable")
    burgerButton.addEventListener("click",function(){
        if (desplegable.style.width == "0%"){
            desplegable.style.width = "50%"
        }
        else {
            desplegable.style.width = "0%"
        }
    })
})