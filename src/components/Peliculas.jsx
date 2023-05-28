import React from "react";
import CardPelicula from "./CardPelicula";

const Peliculas = ({ datos, borrarPelicula }) => {
  const handleBorrarPelicula = (nombre) => {
    borrarPelicula(nombre);
  };

  return (
    <section>
      <hr className="mb-3" />
      <h2 className="text-center">Películas Registradas</h2>
      {datos.length === 0 ? (
        <p className="py-3 mx-auto">No hay películas registradas</p>
      ) : (
        datos.map((peli, indice) => (<CardPelicula key={indice} peli={peli} borrarPelicula={handleBorrarPelicula}/>
        ))
      )}
    </section>
  );
};

export default Peliculas;