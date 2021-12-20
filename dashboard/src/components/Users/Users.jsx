import "./Users.css";
import Home from "../Home/Home";
import { Component } from "react";

class UsersLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoUsuarios: [],
      url: "https://musiqueiro.herokuapp.com/user/api/users",
    };
  }

  componentWillMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoUsuarios: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let usuarios = this.state.listadoUsuarios;
    let contenido;
    if (usuarios.lenght === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = (
        <div className="containerUsuarios">
          {usuarios.map((usuario, i) => (
            <Home item={usuario} indice={i} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1>Todos los usuarios </h1>
        {contenido}
      </div>
    );
  }
}

export default UsersLista;
