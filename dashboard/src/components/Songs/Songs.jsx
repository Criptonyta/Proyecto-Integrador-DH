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
      ultimoElemento: [],
      url: "https://musiqueiro.herokuapp.com/products/api/products/songs",
    };
  }

  componentWillMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoCanciones: data });
        this.setState({
          ultimoElemento: data.data[data.data.length - 1].titulo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let canciones = this.state.listadoCanciones;
    let contenido;
    let ultimoElemento;

    if (canciones.length === 0) {
      contenido = "Cargando...";
      ultimoElemento = "Cargando...";
    } else {
      contenido = canciones.total;
      ultimoElemento = this.state.ultimoElemento;
    }

    return (
      <div>
        <Totales
          titulo={"canciones"}
          total={contenido}
          ultimo={ultimoElemento}
        />
      </div>
    );
  }
}

export default SongsLista;
