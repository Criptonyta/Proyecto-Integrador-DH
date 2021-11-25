window.addEventListener("load",function(){
    let agregarCarritoButton = document.querySelector("#product-agregarCarritoButton")
    agregarCarritoButton.addEventListener("click",function(){//El carrito es una lista de objetos [{},{},...]
        let idProducto = this.getAttribute("idProducto")
        let tipoProducto = this.getAttribute("tipoProducto")
        let item = {"id":idProducto,"tipoProducto":tipoProducto}
        if (sessionStorage.getItem("productoCarrito")){//Si ya tengo un carrito
            let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
            for (let i = 0; i < productosCarrito.length; i++) {
                if (productosCarrito[i].id == idProducto && productosCarrito[i].tipoProducto == tipoProducto){//Si el producto ya esta, le sumo 1 a cantidad
                    productosCarrito[i].cantidad++;
                    sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarrito))
                    alert("Instrumento agregada al carrito!")
                    return
                }
            }
            item.cantidad = 1
            productosCarrito.push(item)
            sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarrito))
            alert("Instrumento agregada al carrito!")
        }
        else {
            let productos = []
            item.cantidad = 1
            productos.push(item)
            sessionStorage.setItem("productoCarrito",JSON.stringify(productos))
            alert("Instrumento agregada al carrito!")
        }
    })
})