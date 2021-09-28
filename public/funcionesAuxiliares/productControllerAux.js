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
        if (contador == palabrasBuscadas.length) {
            return item
        }
    })
    return resultado
};

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

function buscarNelementosRelacionados (lista,nombreId,id,cantidad){//Te busca N elementos relacionados por artista, el resto completa con aleatorios
    let relacionadosArtista = lista.filter(elementos => elementos[nombreId] == id)
    let relacionadosFaltantes = cantidad - relacionadosArtista.length
    if (relacionadosFaltantes > 0){//Si faltan elementos agrego con aleatorios
        while (relacionadosFaltantes > 0){
            relacionadosArtista.push(buscarElementoAleatorio(lista))
            relacionadosFaltantes--
        }
        return relacionadosArtista 
    }  
    else {//si no faltan elementos:
        if (relacionadosArtista.length == cantidad){return relacionadosArtista}//Si tengo la cantidad que busco, la devuelvo
        else {return buscarNelementosAleatorios(relacionadosArtista,cantidad)}//Si tengo mas de los que busco, eligo una cantidad aleatoria
    }
}
module.exports = {
    checkAtribute,buscarNelementosAleatorios,buscarNelementosRelacionados
};