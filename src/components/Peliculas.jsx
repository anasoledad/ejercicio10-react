import React from "react";
import CardPelicula from "./CardPelicula";

const Peliculas = ({ datos, borrarPelicula }) => {
  const handleBorrarPelicula = (nombre) => {
    borrarPelicula(nombre);
  };

  return (
    <section>
      <hr className="mb-3" />
      <h3 className="my-4 text-center">Películas Registradas</h3>
      <div className="row">
      {datos.length === 0 ? (
        <p className="py-3 text-center">No hay películas registradas</p>
      ) : (
        datos.map((peli, indice) => (<CardPelicula key={indice} peli={peli} borrarPelicula={handleBorrarPelicula}/>
        ))
      )}
      </div>

    </section>
  );
};

export default Peliculas;