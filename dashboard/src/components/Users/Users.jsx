import "./Users.css";
import Home from "../Home/Home";
import { Component } from "react";
import Totales from "../totales/totales";

class UsersLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoUsuarios: [],
      ultimoElemento: [],
      url: "https://musiqueiro.herokuapp.com/user/api/users",
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoUsuarios: data });
        this.setState({
          ultimoElemento:
            data.data[data.data.length - 1].nombre +
            " " +
            data.data[data.data.length - 1].apellido,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let usuarios = this.state.listadoUsuarios;
    let contenido;
    let ultimoElemento;
    if (usuarios.length === 0) {
      contenido = "Cargando...";
      ultimoElemento = "Cargando...";
    } else {
      contenido = usuarios.total;
      ultimoElemento = this.state.ultimoElemento;
    }

    return (
      <div>
        <Totales
          titulo={"usuarios"}
          total={contenido}
          ultimo={ultimoElemento}
        />
      </div>
    );
  }
}

export default UsersLista;
