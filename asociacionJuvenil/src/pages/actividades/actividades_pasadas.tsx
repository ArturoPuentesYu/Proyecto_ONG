import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Carousel from "../../components/carousel/carousel_sin_texto"
import "./css.css"
const actividades_pasadas = () => {

    const [act_pasadas, cambioActPasadas] = useState<any>([]);

    useEffect(() => {
        fetch("http://localhost:3000/actividades_pasadas")
        .then(data => data.json())
        .then(res => cambioActPasadas(res))
    }, [])

    if (act_pasadas.length === 0) {
        return (
            <>
                <Container className="d-flex mt-auto justify-content-center">
                    <Spinner animation="border" role="status"></Spinner>
                </Container>
            </>
        );
    }

    return(<>
        {act_pasadas.map((año: any, index: number) => <Container className="text-center carousel-actividades-pasadas">
            <h2>{año.TITULO}</h2>
            <Carousel slide={false} variant="dark" clases="mx-auto mb-2" key={index} imagenes={año.IMAGENES_CAROUSEL} />
        </Container>)}
    </>);
}

export default actividades_pasadas;