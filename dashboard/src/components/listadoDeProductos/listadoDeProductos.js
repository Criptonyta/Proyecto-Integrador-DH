import "./listadoDeProductos.css";

function ListadoDeProductos(props) {
  return (
    <div className="listadoDeProductos-container">
      <h2> Lista de {props.titulo} </h2>
    </div>
  );
}
export default ListadoDeProductos;
