import { Button, Col, Container, Row } from "react-bootstrap";
import equipos from "./equipos";

function App() {
  return (
    <Container as="body" fluid>
      <Row className="d-flex flex-row vh-100 p-0 m-0">
        <Col xs={8} className="botonera">
          <Row className="align-content-center align-items-start list-unstyled">
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton gt30 btn-block border-none rounded">Equipos
            asignados a mayores de 30</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton tarragona border-none rounded">Equipos
            asignados a personas de Tarragona</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton provincias border-none rounded">Provincias
            donde hay equipos</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton puestos border-none rounded">Puestos
              de
              trabajadores con
            equipo</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton edad-media border-none rounded">Media
              de
              edad
              de
            trabajadores</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton orden-edad border-none rounded">Equipos
              ordenados por
            edad</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton sobremesa border-none rounded">Equipos
              de
              tipo
            sobremesa</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton trabajadores-portatil border-none rounded">Trabajadores
              con equipo
            portatil</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton equipos-tipo border-none rounded">Equipos
              organizados por
            tipo</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton portatiles-tarragona border-none rounded">Equipos
              portatiles
              asignados
              en
            Tarragona</Button>
            </Col>
            <Col as="li" xs={4} lg={3}>
              <Button variant="warning" size="lg" className="boton resumen border-none rounded">Resumen
              de
              equipos
            asignados</Button>
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
