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

module.exports = {
    checkAtribute
};