import "./Instruments.css";
import Home from "../Home/Home";
import { Component } from "react";

class InstrumentsLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoInstrumentos: [],
      url: "https://musiqueiro.herokuapp.com/products/api/products/instruments",
    };
  }

  componentWillMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoInstrumentos: data });
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
      contenido = (
        <div className="containerInstrumentos">
          {instrumentos.map((instrumento, i) => (
            <Home item={instrumento} indice={i} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1>Todos los instrumentos </h1>
        {contenido}
      </div>
    );
  }
}

export default InstrumentsLista;
