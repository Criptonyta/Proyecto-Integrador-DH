//Funcion que le pasas una DB, los atributos de la DB (en forma de lista) y las palabras buscadas (en forma de lista) 
//y te devuelve los elementos que cumplen en forma de lista
function checkAtribute(DB, atributos, palabrasBuscadas) {
    let resultado = DB.filter(item => {
        let palabrasItemTotal = []; //Todas las palabras en donde voy a buscar
        for (let i = 0; i < atributos.length; i++) {
            palabrasItem = item[atributos[i]].split(" ")
            for (let j = 0; j < palabrasItem.length; j++) {
                palabrasItemTotal.push(palabrasItem[j].toLowerCase())
            }
        }
        let contador = 0; //Si el contador vale lo mismo que palabrasItem, todas las palabras se encontraron
        for (let i = 0; i < palabrasItemTotal.length; i++) {
            if (palabrasBuscadas.includes(palabrasItemTotal[i].toLowerCase())) {
                contador += 1
            }
        }
        if (contador/palabrasBuscadas.length >= 0.5) {
            return item
        }
    })
    return resultado
};

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

function buscarNelementosRelacionados (lista,nombreId,id,productNameId,productId,cantidad){//Te busca N elementos relacionados por artista, el resto completa con aleatorios
    let relacionadosArtista = lista.filter(elementos => elementos[nombreId] == id) //Me quedo con los elementos del mismo artista (O canciones O instrumentos, no ambos)
    let relacionadosArtistaFinal = relacionadosArtista.filter(elementos => elementos[productNameId] != productId)//Saco el elemento que estamos viendo
    let relacionadosFaltantes = cantidad - relacionadosArtistaFinal.length
    if (relacionadosFaltantes > 0){//Si faltan elementos agrego con aleatorios
        while (relacionadosFaltantes > 0){
            relacionadosArtistaFinal.push(buscarElementoAleatorio(lista))
            relacionadosFaltantes--
        }
        return relacionadosArtistaFinal 
    }  
    else {//si no faltan elementos:
        if (relacionadosArtistaFinal.length == cantidad){return relacionadosArtistaFinal}//Si tengo la cantidad que busco, la devuelvo
        else {return buscarNelementosAleatorios(relacionadosArtistaFinal,productNameId,cantidad)}//Si tengo mas de los que busco, eligo una cantidad aleatoria
    }
}
module.exports = {
    checkAtribute,buscarNelementosAleatorios,buscarNelementosRelacionados
};