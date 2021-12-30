import "./Songs.css";
import Home from "../Home/Home";
import { Component } from "react";
import Totales from "../totales/totales";
import ListadoDeProductos from "../listadoDeProductos/listadoDeProductos";

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
    let listado = this.state.listadoCanciones.SongId;

    if (canciones.lenght === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = canciones.total;
    }

    return (
      <div>
        <Totales titulo={"canciones"} total={contenido} />
      </div>
    );
  }
}

export default SongsLista;
