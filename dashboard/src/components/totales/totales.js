import "./totales.css";

function Totales(props) {
  return (
    <div>
      <div className="totales-container">
        <h2> Cantidad de {props.titulo} </h2> <h3> {props.total} </h3>
      </div>
      <div className="Ultimos-container">
        <h2> Ultimos {props.titulo} </h2> <h6> {props.ultimo} </h6>
      </div>
    </div>
  );
}
export default Totales;
