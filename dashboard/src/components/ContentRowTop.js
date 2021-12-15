import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import ContentRowMovies from "./ContentRowMovies";

function ContentRowTop() {
  return (
    <ContentRowMovies
      icon={[
        "fas fa-film fa-2x text-gray-300",
        "fas fa-award fa-2x text-gray-300",
        "fas fa-user fa-2x text-gray-300",
      ]}
      text={[
        "text-xs font-weight-bold text-primary text-uppercase mb-1",
        "text-xs font-weight-bold text-success text-uppercase mb-1",
        "text-xs font-weight-bold text-warning text-uppercase mb-1",
      ]}
      border={[
        "border-left-primary card shadow h-100 py-2",
        "border-left-success card shadow h-100 py-2",
        "border-left-warning card shadow h-100 py-2",
      ]}
      cifra={[21, 79, 49]}
      titulo={["MOVIES IN DATABASE", "TOTAL AWARDS", "ACTORS QUANTITY"]}
    />
  );
}
export default ContentRowTop;
