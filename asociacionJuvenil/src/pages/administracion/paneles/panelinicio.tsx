/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import './paneles.css'
import Edit_index_texts from "../../../components/administracion/edit_index";
import { MouseEvent, useState } from "react";


const PanelInicio = () => {
    const [arr, dameDatos] = useState<any>("");
    const cargaDatosInicio = (event: MouseEvent<HTMLElement, MouseEvent>) => {
        event.preventDefault();
        console.log("Inicio FETCH");
        fetch("http://localhost:3000/")
            .then(json => json.json())
            .then(data => dameDatos(data[0]))
            .catch(error => console.log(error));

    }

    return (<>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="inicio">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="textos" onClick={e => cargaDatosInicio(e)}>Textos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="imagenes">Imagenes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="textos"><Edit_index_texts textos={arr}/></Tab.Pane>
                            <Tab.Pane eventKey="imagenes">Contenido no disponible todav&iacute;a.</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>

    </>);

}

export default PanelInicio
