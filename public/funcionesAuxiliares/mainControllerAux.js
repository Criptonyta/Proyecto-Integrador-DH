function buscarElementoAleatorio(lista){//Te devuelve un elemento aleatorio de la lista
    const numAleatorio = Math.floor(Math.random() * lista.length)
    return lista[numAleatorio]
}

function buscarNelementosAleatorios(lista,productNameId,cantidad){//Te devuelve N elementos aleatorios de una lista
    let elementos = [];//Aca van los elementos que vamos a mandar
    let contador = 0;//Lleva la cuenta de cuantos elementos encontramos
    while (contador < cantidad){
        let contadorRepetidos = 0//Lleva la cuenta de cuantos elementos iteramos en elementos para no agregar un repetido
        let elemAleatorio = buscarElementoAleatorio(lista)//Buscamos un elemento aleatorio
        for (let i=0; i<elementos.length;i++) {//Nos fijamos que no este ya en la lista de elementos
            if (elementos[i][productNameId] == elemAleatorio[productNameId]){break}
            else {contadorRepetidos++}
        }
        if (contadorRepetidos == elementos.length){//Si no esta en la lista de elementos,lo agregamos a elementos
            elementos.push(elemAleatorio)
            contador++
        }
    }
    return elementos
}


module.exports = {buscarNelementosAleatorios}