import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { NuevoEvento, ListadoEventos } from "../../../components/administracion/eventos";

const PanelCalendario = () => {
    return (<>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="inicio">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="nuevo">Nuevo evento</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="listado">Listado de eventos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="nuevo"><NuevoEvento /></Tab.Pane>
                            <Tab.Pane eventKey="listado"><ListadoEventos /></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>

    </>);
}

export default PanelCalendario