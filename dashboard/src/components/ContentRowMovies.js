import React from "react";
import PropTypes from "prop-types";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowMovies(props) {
  const titulo = props.titulo;
  const cifra = props.cifra;
  const icon = props.icon;
  const border = props.border;
  const text = props.text;
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <div className="row">
        {titulo.map((item, i) => (
          <div key={item + i} className="col-md-4 mb-4">
            <div className={border[i]}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className={text[i]}>{titulo[i]}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {cifra[i]}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className={icon[i]}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <LastMovieInDb />
        <GenresInDb />
      </div>
    </div>
  );
}

ContentRowMovies.propTypes = {
  titulo: PropTypes.array.isRequired,
  icon: PropTypes.array.isRequired,
  text: PropTypes.array.isRequired,
  cifra: PropTypes.array.isRequired,
  border: PropTypes.array.isRequired,
};
ContentRowMovies.defaultProps = {
  titulo: "No encuentre el titulo",
  icon: "No encuentre el icono",
  text: "No encuentre el texto",
  cifra: 0,
  border: "null",
};

export default ContentRowMovies;
