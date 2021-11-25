window.addEventListener("load",function(){
    let carritoContainer = document.getElementById("cart1Alex-tablaDatosContainer")
    let tableContainer = document.getElementById("cart1Alex-tablaDatos")
    let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
    let borrarTodo = document.getElementById("carrito-BorrarTodo")
    let actualizarDatos = document.getElementById("carrito-actualizarDatos")
    let irATienda = document.getElementById("cart1Alex-botonesOpcionSeguir")
    //FALTA PRECIO Y DESCRIPCION QUE HAY QUE TRAERLOS CON API
    if (!productosCarrito){
        tableContainer.style.display = "none"
        actualizarDatos.style.display = "none"
        borrarTodo.style.display = "none"
        irATienda.style.display = "none"
    }
    else {
        actualizarDatos.style.display = "block"
        borrarTodo.style.display = "block"
        irATienda.style.display = "block"
        let rtaColumna = 
        `<table id="cart1Alex-tablaDatos">
            <tr>
                <th>Producto</th>
                <th>Descripcion del producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
            </tr>
        </table>`
        tableContainer.innerHTML += rtaColumna
        for (let i = 0; i < productosCarrito.length; i++) {
            if (productosCarrito[i].tipoProducto == "instrum"){//Si es intrummento
                //let producto = fetch(apiURL)
                let rtaFila = 
                `<tr>
                    <td><a href="/products/detailInstrument/${productosCarrito[i].id}">FALTA API</a></td>
                    <td>FALTA API</td>
                    <td>FALTA API</td>
                    <td>${productosCarrito[i].cantidad}</td>
                    <td>FALTA API (cuenta)</td>
                </tr>`
                tableContainer.innerHTML+=rtaFila
            }
            else if (productosCarrito[i].tipoProducto == "cancion"){//Si es cancion
                //let producto = fetch(apiURL)
                let rtaFila = 
                `<tr>
                    <td><a href="/products/detailSong/${productosCarrito[i].id}">FALTA API</a></td>
                    <td>FALTA API</td>
                    <td>FALTA API</td>
                    <td>${productosCarrito[i].cantidad}</td>
                    <td>FALTA API (cuenta)</td>
                </tr>`
                tableContainer.innerHTML+=rtaFila
            }
        }
    }
    borrarTodo.addEventListener("click",function(){
        if (confirm("Esta seguro que desea vaciar el carrito?")){
            sessionStorage.removeItem("productoCarrito")
            location.reload()
        }
    })
})