import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const CardPelicula = ({ peli, borrarPelicula }) => {
  const { nombre, genero, descripcion } = peli;

  const handleBorrarPelicula = () => {
    borrarPelicula(nombre);
  };

  return (
    <Col md={6} className=" mb-3">
      <Card className="my-2 pt-3 mx-2 h-100 bgCard border border-3 border-dark text-white">
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
          <Button variant="dark px-5" onClick={handleBorrarPelicula}>
            Borrar
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardPelicula;
