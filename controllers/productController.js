const controlador = {
    product: (req, res) => {
        res.render('product.ejs');
    },

    productempty: (req, res) => {
        res.render('productempty.ejs');
    },

    songempty: (req, res) => {
        res.render('songempty.ejs');
    },

    tienda: (req, res) => {
        let musicos = [
            {img:"tapadisco1.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
            {img:"tapadisco2.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
            {img:"tapadisco3.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
            {img:"tapadisco4.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
            {img:"tapadisco5.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
            {img:"tapadisco6.jpg",tituloCancion:"Titulo de la cancion",artistaCancion:"Nombre de artista"},
        ]
        let instrumentos = [
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
            {img:"bass.jpg",tituloInstrumento:"Titulo de la instrumento",precio:"2000$"},
        ]
        let datos = [
            {userid: 123, artistName: "Jose", img: 'fasdf',skills: 'Guitarrista',bio:'soy un guitarrista'},
            {userid: 123, artistName: "Alberto", img: 'fasdf',skills: 'Cantante',bio:'soy un cantante'},
            {userid: 123, artistName: "Carlos", img: 'fasdf',skills: 'Baterista',bio:'soy un baterista'},
            {userid: 123, artistName: "Carlos", img: 'fasdf',skills: 'Baterista',bio:'soy un baterista'},
        ]
        res.render('tienda.ejs',{datos:datos,musicos:musicos,instrumentos:instrumentos});
    }
};


module.exports = controlador;