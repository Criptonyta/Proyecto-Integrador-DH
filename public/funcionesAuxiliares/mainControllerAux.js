function buscarElementoAleatorio(lista){//Te devuelve un elemento aleatorio de la lista
    const numAleatorio = Math.floor(Math.random() * lista.length)
    return lista[numAleatorio]
}

function buscarNelementosAleatorios(lista,cantidad){//Te devuelve N elementos aleatorios de una lista
    let elementos = [];
    for (let i = 0; i < cantidad; i++){
        elementos.push(buscarElementoAleatorio(lista))
    }
    return elementos
}

module.exports = {buscarNelementosAleatorios}