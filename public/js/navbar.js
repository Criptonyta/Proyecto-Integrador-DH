window.addEventListener("load", function () {
    let burgerButton = document.querySelector("#navbar-burgerButton")
    let desplegable = document.querySelector(".navbar-desplegable")
    let iconoTienda = document.querySelector("#navbar-desplegable-tienda")
    let acordion = document.querySelector(".acordion-vertical")
    burgerButton.addEventListener("click", function () {
        if (desplegable.style.opacity == "0") {
            desplegable.style.opacity = "100%"
        } else {
            desplegable.style.opacity = "0%"
        }
    })
    window.addEventListener("resize", function () {
        if (window.innerWidth >= "700") {
            desplegable.style.opacity = "0%"
        }
    })
    iconoTienda.addEventListener("click",function(){
      if (acordion.style.height > "0px"){
          acordion.style.height = "0px"
      }
      else {
        acordion.style.height = "auto"
      }
    })
})