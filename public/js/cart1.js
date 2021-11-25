function Sumar(id,tipoProducto){//Funcion para sumar 1 a cantidad (id y tipoProducto)
    let productosCarro = JSON.parse(sessionStorage.getItem("productoCarrito"))
    for (let i = 0; i < productosCarrito.length; i++) {
        if (productosCarro[i].id == id && productosCarro[i].tipoProducto == tipoProducto.toString()){
            productosCarro.cantidad++
        }
        sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarro))
        location.reload()
    }
}
function Restar(id,tipoProducto){//Funcion para restar 1 a cantidad
    let productosCarro = JSON.parse(sessionStorage.getItem("productoCarrito"))
    for (let i = 0; i < productosCarrito.length; i++) {
        if (productosCarro[i].id == id && productosCarro[i].tipoProducto == tipoProducto){
            productosCarro.cantidad--
        }
        sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarro))
        location.reload()
    }
}
function Saludar(param1,param2){
    console.log("hola")
}

window.addEventListener("load",function(){
    let tableContainer = document.getElementById("cart1Alex-tablaDatos")
    let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
    let borrarTodo = document.getElementById("carrito-BorrarTodo")
    let actualizarDatos = document.getElementById("carrito-actualizarDatos")
    let irATienda = document.getElementById("cart1Alex-botonesOpcionSeguir")
    let botonSumar = document.querySelector(".fa-plus")
    let botonRestar = document.querySelector(".fa-minus")
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
                <th>Cantidad</i></i></th>
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
                    <td>
                        <div>
                            <span>${productosCarrito[i].cantidad}</span>
                            <span onclick="Sumar(1,'instrum')"><i class="fas fa-plus"></i></span>
                            <span><i class="fas fa-minus"></i></span>
                        </div>
                    </td>
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
                    <td>${productosCarrito[i].cantidad}<i class="fas fa-plus"><i class="fas fa-minus"></td>
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