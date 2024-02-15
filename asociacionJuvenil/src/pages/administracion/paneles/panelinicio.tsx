import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import './paneles.css'
const PanelInicio = () => {

    return (<>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="inicio">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="textos">Textos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="imagenes">Imagenes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="textos">TEXTOS</Tab.Pane>
                            <Tab.Pane eventKey="imagenes">IMAGENES</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>

    </>);

}

export default PanelInicio