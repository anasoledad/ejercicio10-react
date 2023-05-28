import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPelicula = ({ peli, borrarPelicula }) => {
  const { nombre, genero, descripcion } = peli;

  const handleBorrarPelicula = () => {
    borrarPelicula(nombre);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <Card className="my-2 pt-3 mx-2 h-100">
        <Card.Title className="pb-1 text-center">Datos de Película</Card.Title>
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
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button variant="danger px-5" onClick={handleBorrarPelicula}>
            Borrar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardPelicula;
