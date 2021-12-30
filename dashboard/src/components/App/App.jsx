import InstrumentsLista from "../Instruments/Instruments";
import UsersLista from "../Users/Users";
import SongsLista from "../Songs/Songs";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-container-titulo">Musiqueiros Dashboard</h1>
      <div className="app-container-components">
        <SongsLista />
        <InstrumentsLista />
        <UsersLista />
      </div>
      <a href="https://musiqueiro.herokuapp.com/">
        <h2>Ir a Musiqueiros</h2>
      </a>
    </div>
  );
}

export default App;
