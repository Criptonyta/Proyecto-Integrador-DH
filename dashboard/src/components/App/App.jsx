import InstrumentsLista from "../Instruments/Instruments";
import UsersLista from "../Users/Users";
import SongsLista from "../Songs/Songs";

function App() {
  return (
    <div>
      <SongsLista />
      <InstrumentsLista />
      <UsersLista />
    </div>
  );
}

export default App;
