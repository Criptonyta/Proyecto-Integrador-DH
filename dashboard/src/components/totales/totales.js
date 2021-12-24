import "./totales.css"

function Totales (props) {
    return (
        <div className= "totales-container">
            <h2>Cantidad de {props.titulo}</h2>
            <h3>{props.total}</h3>
        </div>
    )

    }
    export default Totales