window.addEventListener("load",function(){
    let playerButton = document.querySelector(".Player-button")
    let clicks = 0
    playerButton.addEventListener("click",function(){
        if (clicks % 2 == 0){
            this.style.opacity = "0.8"
            document.querySelector(".productImages").style.opacity = "0.5"
            clicks += 1
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseover",function(){
                playerButton.style.opacity = "0.8";
                document.querySelector(".productImages").style.opacity = "0.5"
            })
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseout",function(){
                playerButton.style.opacity = "0.8";
                document.querySelector(".productImages").style.opacity = "0.5"
            });
        }
        else {
            this.style.opacity = "0";
            clicks += 1
            document.querySelector(".productImages").style.opacity = "1";
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseover",function(){
                playerButton.style.opacity = "1";
                document.querySelector(".productImages").style.opacity = "0.6"
            })
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseout",function(){
                playerButton.style.opacity = "0";
                document.querySelector(".productImages").style.opacity = "1"
            })
        }
    })
    let agregarCarritoButton = document.querySelector("#productSong-agregarCarritoButton")
    agregarCarritoButton.addEventListener("click",function(){//El carrito es una lista de objetos [{},{},...]
        let idProducto = this.getAttribute("idProducto")
        let tipoProducto = this.getAttribute("tipoProducto")
        let item = {"id":idProducto,"tipoProducto":tipoProducto}
        if (sessionStorage.getItem("productoCarrito")){//Si ya tengo un carrito
            let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
            for (let i = 0; i < productosCarrito.length; i++) {
                if (productosCarrito[i].id == idProducto){//Si el producto ya esta, le sumo 1 a cantidad
                    productosCarrito[i].cantidad++;
                    sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarrito))
                    alert("Cancion agregada al carrito! 1")
                    return
                }
            }
            productosCarrito.push(JSON.stringify(item))
            sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarrito))
            alert("Cancion agregada al carrito! 2")
        }
        else {
            let productos = []
            item.cantidad = 1
            productos.push(item)
            sessionStorage.setItem("productoCarrito",JSON.stringify(productos))
            alert("Cancion agregada al carrito! 3")
        }
    })
})