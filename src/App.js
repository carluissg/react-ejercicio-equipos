import { Col, Container, Row } from "react-bootstrap";
import equipos from "./equipos";

function App() {
  return (
    <Container fluid>
      <Row className="d-flex flex-row vh-100 p-0 m-0">
        <Col xs={8} className="botonera">
          <Row className="align-content-center align-items-start list-unstyled">
            <Col as="li" xs={4} lg={3}>
              <button className="boton gt30 btn-block btn btn-lg btn-warning border-none rounded">Equipos
            asignados a mayores de 30</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton tarragona btn btn-lg btn-warning border-none rounded">Equipos
            asignados a personas de Tarragona</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton provincias btn btn-lg btn-warning border-none rounded">Provincias
            donde hay equipos</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton puestos btn btn-lg btn-warning border-none rounded">Puestos
              de
              trabajadores con
            equipo</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton edad-media btn btn-lg btn-warning border-none rounded">Media
              de
              edad
              de
            trabajadores</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton orden-edad btn btn-lg btn-warning border-none rounded">Equipos
              ordenados por
            edad</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton sobremesa btn btn-lg btn-warning border-none rounded">Equipos
              de
              tipo
            sobremesa</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button
                className="boton trabajadores-portatil btn btn-lg btn-warning border-none rounded">Trabajadores
                con equipo
            portatil</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton equipos-tipo btn btn-lg btn-warning border-none rounded">Equipos
              organizados por
            tipo</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button
                className="boton portatiles-tarragona btn btn-lg btn-warning border-none rounded">Equipos
                portatiles
                asignados
                en
            Tarragona</button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <button className="boton resumen btn btn-lg btn-warning border-none rounded">Resumen
              de
              equipos
            asignados</button>
            </Col>
          </Row>
        </Col>
        <Col xs={4} className="container-console d-flex flex-row justify-content-center align-items-center p-0">
          <div className="recuadro p-1 consola overflow-auto rounded">
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
