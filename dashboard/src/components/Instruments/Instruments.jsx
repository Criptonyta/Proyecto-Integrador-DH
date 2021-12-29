import "./Instruments.css";
import Home from "../Home/Home";
import { Component } from "react";
import Totales from "../totales/totales";

class InstrumentsLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoInstrumentos: [],
      url: "https://musiqueiro.herokuapp.com/products/api/products/instruments",
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoInstrumentos: data });
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let instrumentos = this.state.listadoInstrumentos;
    let contenido;
    if (instrumentos.lenght === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = instrumentos.total
     
    }
    return (
      <div>
      <Totales titulo = {"instrumentos"} total = {contenido}/>
     </div>
    );
  }
}

export default InstrumentsLista;
