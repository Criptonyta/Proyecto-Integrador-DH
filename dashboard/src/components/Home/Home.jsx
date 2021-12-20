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

      {/* TOTALES => 3 a 6 paneles simples con los siguientes totales:  Total de productos, Total de usuarios, Total de categorías */}
      <p>
        <span className="UsersTotal">Total de Usuarios:</span>
        {props.item.total}
      </p>

      <p>
        <span className="InstrumentsTotal">
          Total de instrumentos publicados:
        </span>
        {props.item.total}
      </p>

      <p>
        <span className="SongsTotal">Total de canciones publicadas:</span>
        {props.item.totalxcategoria}
      </p>
    </div>
  );
}

export default Home;
