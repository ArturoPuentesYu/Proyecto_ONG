import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import './css.css'
import BotonFlotante from "../../components/botonFlotante/botonFlotante";

const lgtbiq = () => {

    const [datos, cambioDatos] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:3000/lgtbiq", { method: "GET" })
            .then(json => json.json())
            .then(data => cambioDatos(data[0]))
            .catch(error => console.log(error));
    }, []);

    if (datos.length === 0) {
        return (
            <main>
                <Container className="d-flex mt-auto justify-content-center">
                    <Spinner animation="border" role="status"></Spinner>
                </Container>
            </main>
        );
    }

    return (<main className="my-2">
        <h1 className=" text-center">{datos.TITULO}</h1>
        <Row xs="1" md="1" lg="2">
            <Col><img src={datos.IMAGEN.src} alt={datos.IMAGEN.alt} width="100%" /></Col>
            <Col><p  dangerouslySetInnerHTML={{__html: datos.TEXTO}} /></Col>
        </Row>
        <BotonFlotante />
    </main>);
}

export default lgtbiq;