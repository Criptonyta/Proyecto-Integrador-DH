import "./Instruments.css";
import Home from "../Home/Home";
import { Component } from "react";
import Totales from "../totales/totales";

class InstrumentsLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoInstrumentos: [],
      ultimoElemento: [],
      url: "https://musiqueiro.herokuapp.com/products/api/products/instruments",
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoInstrumentos: data });
        this.setState({
          ultimoElemento: data.data[data.data.length - 1].titulo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let instrumentos = this.state.listadoInstrumentos;
    let contenido;
    let ultimoElemento;
    if (instrumentos.length == 0) {
      contenido = "Cargando...";
      ultimoElemento = "Cargando...";
    } else {
      contenido = instrumentos.total;
      ultimoElemento = this.state.ultimoElemento;
    }
    return (
      <div>
        <Totales
          titulo={"instrumentos"}
          total={contenido}
          ultimo={ultimoElemento}
        />
      </div>
    );
  }
}

export default InstrumentsLista;
