function Sumar(id,tipoProducto){//Funcion para sumar 1 a cantidad (id y tipoProducto)
    let productosCarro = JSON.parse(sessionStorage.getItem("productoCarrito"))
    for (let i = 0; i < productosCarro.length; i++) {
        if (productosCarro[i].id == id && productosCarro[i].tipoProducto == tipoProducto){
            productosCarro[i].cantidad++
            sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarro))
            location.reload()
        }
        
        
    }
}
function Restar(id,tipoProducto){//Funcion para sumar 1 a cantidad (id y tipoProducto)
    let productosCarro = JSON.parse(sessionStorage.getItem("productoCarrito"))
    for (let i = 0; i < productosCarro.length; i++) {
        if (productosCarro[i].id == id && productosCarro[i].tipoProducto == tipoProducto){
            if (productosCarro[i].cantidad == 1){//Si solo queda uno...
                if (confirm("Estas seguro que deseas sacar este producto del carrito?")){
                    productosCarro[i].cantidad--
                    productosCarro.splice(i,1)
                    sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarro))
                    location.reload()
                }
            }
            else {
                productosCarro[i].cantidad--
                sessionStorage.setItem("productoCarrito",JSON.stringify(productosCarro))
                location.reload()
            } 
        }
    }
}


window.addEventListener("load",function(){
    let tableContainer = document.getElementById("cart1Alex-tablaDatos")
    let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
    let borrarTodo = document.getElementById("carrito-BorrarTodo")
    let actualizarDatos = document.getElementById("carrito-actualizarDatos")
    let irATienda = document.getElementById("cart1Alex-botonesOpcionSeguir")
    let datosTotales = document.querySelector(".cart1Alex-datosTotales")
    let total = document.querySelector(".cart1Alex-datosTotales2 span")
    //FALTA PRECIO Y DESCRIPCION QUE HAY QUE TRAERLOS CON API
    if (!productosCarrito || productosCarrito.length==0){//Si no hay nada, no me muestres nada...
        tableContainer.style.display = "none"
        actualizarDatos.style.display = "none"
        borrarTodo.style.display = "none"
        irATienda.style.display = "none"
        datosTotales.style.display = "none"
    }
    else {//Si hay algo, mostrame las cosas
        actualizarDatos.style.display = "block"
        borrarTodo.style.display = "block"
        irATienda.style.display = "block"
        datosTotales.style.display = "block"
        let rtaColumna = //Headers
        `<table id="cart1Alex-tablaDatos">
            <tr>
                <th>Producto</th>
                <th>Descripcion del producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</i></i></th>
                <th>Total</th>
            </tr>
        </table>`
        tableContainer.innerHTML += rtaColumna //Agregamos los headers
        try {//Trata de agregarme las filas de los productos del carrito a la tabla
            let totalValor = sessionStorage.setItem("totalCarrito",JSON.stringify(0))
            for (let i = 0; i < productosCarrito.length; i++) {
                if (productosCarrito[i].tipoProducto == "instrum" && productosCarrito[i].cantidad > 0){//Si es intrummento
                    //let producto = fetch(apiURL)
                    fetch(`https://musiqueiro.herokuapp.com/products/api/products/instruments/${productosCarrito[i].id}`)
                        .then(response => response.json())
                        .then(result => {
                            let titulo,descripcion;
                            if (result.data.titulo.length > 20){titulo = result.data.titulo.slice(0,19) + "..."}
                            else {titulo = result.data.titulo.slice(0,19)} 

                            if (result.data.descripcion.length > 25){descripcion = result.data.descripcion.slice(0,24) + "..."}
                            else {descripcion = result.data.descripcion.slice(0,24)}

                            let rtaFila = 
                            `<tr>
                                <td><a href="/products/detailInstrument/${productosCarrito[i].id}">${titulo}</a></td>
                                <td>${descripcion}</td>
                                <td>${result.data.precio}$</td>
                                <td>
                                    <div>
                                        <span>${productosCarrito[i].cantidad}</span>
                                        <span onclick='Sumar(${productosCarrito[i].id},"instrum")'><i class="fas fa-plus"></i></span>
                                        <span onclick='Restar(${productosCarrito[i].id},"instrum")'><i class="fas fa-minus"></i></span>
                                    </div>
                                </td>
                                <td>${productosCarrito[i].cantidad * result.data.precio}$</td>
                            </tr>`
                            tableContainer.innerHTML+=rtaFila
                            if (sessionStorage.getItem("totalCarrito")){
                                let totalPrice = JSON.parse(sessionStorage.getItem("totalCarrito")) + productosCarrito[i].cantidad * result.data.precio
                                sessionStorage.setItem("totalCarrito",JSON.stringify(totalPrice))
                            } else {sessionStorage.setItem("totalCarrito",JSON.stringify(productosCarrito[i].cantidad * result.data.precio))}

                            totalValor = sessionStorage.getItem("totalCarrito") //Ajustamos el precio total
                            total.innerText = totalValor+ "$"
                
                    })
                    .catch(e => console.log(e))
                }
                else if (productosCarrito[i].tipoProducto == "cancion"){//Si es cancion
                    fetch(`https://musiqueiro.herokuapp.com/products/api/products/songs/${productosCarrito[i].id}`)
                        .then(response => response.json())
                        .then(result => {
                            let titulo,descripcion;
                            if (result.data.titulo.length > 20){titulo = result.data.titulo.slice(0,19) + "..."}
                            else {titulo = result.data.titulo.slice(0,19)} 

                            if (result.data.descripcion.length > 25){descripcion = result.data.descripcion.slice(0,24) + "..."}
                            else {descripcion = result.data.descripcion.slice(0,24)}
                    let rtaFila = 
                    `<tr>
                        <td><a href="/products/detailSong/${productosCarrito[i].id}">${titulo}</a></td>
                        <td>${descripcion}</td>
                        <td>${result.data.precio}$</td>
                        <td>
                            <div>
                                <span>${productosCarrito[i].cantidad}</span>
                                <span onclick='Sumar(${productosCarrito[i].id},"cancion")'><i class="fas fa-plus"></i></span>
                                <span onclick='Restar(${productosCarrito[i].id},"cancion")'><i class="fas fa-minus"></i></span>
                            </div>
                        </td>
                        <td>${productosCarrito[i].cantidad * result.data.precio}$</td>
                    </tr>`
                    tableContainer.innerHTML+=rtaFila
                    if (sessionStorage.getItem("totalCarrito")){
                        let totalPrice = JSON.parse(sessionStorage.getItem("totalCarrito")) + productosCarrito[i].cantidad * result.data.precio
                        sessionStorage.setItem("totalCarrito",JSON.stringify(totalPrice))
                    } else {sessionStorage.setItem("totalCarrito",JSON.stringify(productosCarrito[i].cantidad * result.data.precio))}

                    totalValor = sessionStorage.getItem("totalCarrito") //Ajustamos el precio total
                    total.innerText = totalValor + "$"


                    })
                    .catch(e => console.log(e))
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    borrarTodo.addEventListener("click",function(){
        if (confirm("Esta seguro que desea vaciar el carrito?")){
            sessionStorage.removeItem("productoCarrito")
            location.reload()
        }
    })
})