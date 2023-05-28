import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPelicula = ({ peli, borrarPelicula }) => {
  const { nombre, genero, descripcion} = peli;

  const handleBorrarPelicula = () => {
    borrarPelicula(nombre);
  };

  return (
    <Card className="my-1 py-3">
      <Card.Title className="pb-3">Datos de Película</Card.Title>
      <Card.Body>

      <p>
        <strong>Nombre de Película:</strong> {nombre}
      </p>
      <p>
        <strong>Descripción:</strong> {descripcion}
      </p>
      <p>
        <strong>Género:</strong> {genero}
      </p>
      <div className="d-flex justify-content-end">
        <Button variant="danger px-5" onClick={handleBorrarPelicula}>
          Borrar
        </Button>
      </div>
      </Card.Body>
     
    </Card>
  );
};

export default CardPelicula;





