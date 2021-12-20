import "./Songs.css";
import Home from "../Home/Home";
import { Component } from "react";

class SongsLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoCanciones: [],
      url: "https://musiqueiro.herokuapp.com/products/api/products/songs",
    };
  }

  componentWillMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoCanciones: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let canciones = this.state.listadoCanciones;
    let contenido;
    if (canciones.lenght === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = (
        <div className="containerCanciones">
          {canciones.map((cancion, i) => (
            <Home item={cancion} indice={i} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1>Todas las canciones</h1>
        {contenido}
      </div>
    );
  }
}

export default SongsLista;
