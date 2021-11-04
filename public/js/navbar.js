window.addEventListener("load", function () {
    let burgerButton = document.querySelector("#navbar-burgerButton")
    let desplegable = document.querySelector(".navbar-desplegable")
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
})