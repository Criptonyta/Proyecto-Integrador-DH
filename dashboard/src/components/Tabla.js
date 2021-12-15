import PropTypes from "prop-types";

function Tabla(props) {
  const titulo1 = props.titulo1;
  const duracion = props.duracion;
  const rating = props.rating;
  const genero = props.genero;
  const premio = props.premio;

  return (
    <div className="suprow">
      <table className="table">
        <tbody>
          <tr>
            <th> Título </th> <th> Duración </th> <th> Rating </th>
            <th> Género </th> <th> Premio </th>
          </tr>
        </tbody>
        {titulo1.map((item1, i1) => (
          <tbody key={item1 + i1}>
            <tr>
              <td> {titulo1[i1]} </td> <td> {duracion[i1]} </td>
              <td> {rating[i1]} </td> <td> {genero[i1]} </td>
              <td> {premio[i1]} </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <th> Título </th> <th> Duración </th> <th> Rating </th>
            <th> Género </th> <th> Premio </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Tabla.propTypes = {
  titulo1: PropTypes.array.isRequired,
  duracion: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired,
  genero: PropTypes.array.isRequired,
  premio: PropTypes.array.isRequired,
};
Tabla.defaultProps = {
  titulo1: "No encontre el titulo",
  duracion: 0,
  rating: 0,
  genero: "No encontre el genero",
  premio: 0,
};

export default Tabla;
