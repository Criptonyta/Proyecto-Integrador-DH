const controlador = {
    home: (req, res) => {
        let datos = [
        {userid: 123, artistName: "Jose", img: 'fasdf',skills: 'Guitarrista',bio:'soy un guitarrista'},
        {userid: 123, artistName: "Alberto", img: 'fasdf',skills: 'Cantante',bio:'soy un cantante'},
        {userid: 123, artistName: "Carlos", img: 'fasdf',skills: 'Baterista',bio:'soy un baterista'},
    ]
        res.render('home.ejs',{datos:datos});
    }

};


module.exports = controlador;