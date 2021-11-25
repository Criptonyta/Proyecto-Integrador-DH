window.addEventListener("load",function(){
    let carritoContainer = document.getElementById("cart1Alex-tablaDatosContainer")
    let tableContainer = document.getElementById("cart1Alex-tablaDatos")
    let productosCarrito = JSON.parse(sessionStorage.getItem("productoCarrito"))
    //FALTA PRECIO Y DESCRIPCION QUE HAY QUE TRAERLOS CON API
    if (productosCarrito.length == 0){
        tableContainer.style.display = "none"
    }
    else {
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
            if (productosCarrito[i].tipoProducto == "instrum"){
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
            else if (productosCarrito[i].tipoProducto == "cancion"){
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
})