function Home(props) {
  return (
    <div key={props.indice} className="HomeContainer">
      {/* INSTRUMENTOS => Panel de instrumentos (categorias) con una lista del total de instrumentos. */}
      <p>
        <span className="instrumId">Id Intrumento:</span> {props.item.InstrumId}
      </p>
      <p>
        <span className="instrumTitulo">Titulo Intrumento:</span>
        {props.item.titulo}
      </p>

      {/* SONGS => Panel de Canciones (categorias) con una lista del total de canciones. */}

      <p>
        <span className="songId">Id Cancion:</span>
        {props.item.songId}
      </p>
      <p>
        <span className="songTitulo">Titulo Cancion:</span>
        {props.item.titulo}
      </p>

      {/* USUARIOS => Panel de detalle de ultimo usuario creado. */}

      <p>
        <span className="userId">Id Usuario:</span> {props.item.id}
      </p>
      <p>
        <span className="nombre">Nombre Usuario:</span> {props.item.nombre}
      </p>
      <p>
        <span className="apellido">Apellido Usuario:</span>
        {props.item.apellido}
      </p>
    </div>
  );
}

export default Home;
