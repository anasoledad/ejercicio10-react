import { Form, Button, Container, Col } from "react-bootstrap";
import Peliculas from "./Peliculas";
import { useState, useEffect } from "react";

const Formulario = () => {
  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  let peliculasLocalstorage =
    JSON.parse(localStorage.getItem("cardPeliculas")) || [];
  const [datos, setDatos] = useState(peliculasLocalstorage);

  useEffect(() => {
    localStorage.setItem("cardPeliculas", JSON.stringify(datos));
  }, [datos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && descripcion && genero) {
      const nuevosDatos = {
        nombre,
        descripcion,
        genero,
      };
      setDatos([...datos, nuevosDatos]);
      setNombre("");
      setDescripcion("");
      setGenero("");

      Swal.fire("Nueva película registrada");
    } else {
      Swal.fire("Faltan campos por llenar");
    }
  };

  const borrarPelicula = (nombrePeli) => {
    let arregloFiltrado = datos.filter(
      (cardPeli) => cardPeli.nombre !== nombrePeli
    );
    setDatos(arregloFiltrado);
  };

  return (
    <>
      <Container className="pt-4 pb-5 px-3">
        <div className="d-flex justify-content-center">
          <Col lg={8} className="border border-2 rounded-4 p-5 bgForm mb-3 text-white">
            <h4 className="mb-4 ">
              LLenar el formulario para registrar una película
            </h4>
            <hr />
            <Form onSubmit={handleSubmit} className="">
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>
                  <strong>Nombre de Pelicula</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de pelicula"
                  value={nombre}
                  onChange={(e) => handleInputChange(e, setNombre)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="genero">
                <Form.Label>
                  <strong>Género</strong>
                </Form.Label>
                <Form.Select
                  aria-label="genero"
                  value={genero}
                  onChange={(e) => handleInputChange(e, setGenero)}
                >
                  <option>Seleccione un género</option>
                  <option value="Acción">Acción</option>
                  <option value="Drama">Drama</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Ciencia Ficción">Ciencia Ficción</option>
                  <option value="Drama">Comedia</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Documental">Documental</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>
                  <strong>Descripción</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Describir la película"
                  value={descripcion}
                  onChange={(e) => handleInputChange(e, setDescripcion)}
                />
              </Form.Group>
              <div className="d-flex justify-content-center justify-content-sm-end">
                <Button variant="secondary" className="px-5 mb-3" type="submit">
                  Agregar Película
                </Button>
              </div>
            </Form>
          </Col>
        </div>

        <Peliculas datos={datos} borrarPelicula={borrarPelicula}></Peliculas>
      </Container>
      <Container></Container>
    </>
  );
};

export default Formulario;
