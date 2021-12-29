import "./Users.css";
import Home from "../Home/Home";
import { Component } from "react";
import Totales from "../totales/totales"

class UsersLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoUsuarios: [],
      url: "https://musiqueiro.herokuapp.com/user/api/users",
    };
  }

  componentDidMount() {
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
     // contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = usuarios.total
    }
     
    return (
      <div>
       <Totales titulo = {"usuarios"} total = {contenido}/>
      </div>
    );
  }
}

export default UsersLista;
