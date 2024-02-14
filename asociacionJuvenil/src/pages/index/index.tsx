import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './index.css'
import { useState, useEffect } from 'react';
import IndexCards from "../../components/index_cards";
import CarouselC from '../../components/carousel/carousel_sin_texto';


function Index() {
    // Para que en movil los iconos cambien un poco de tamaño.
    const [logoSize, cambioIconSize] = useState(34);
    const [textos, cambioInicio] = useState<any>("");

    
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(json => json.json())
            .then(data => cambioInicio(data[0]))
            .catch(error => console.log(error));
        
        // Funcion para añadir al evento resize de la pantalla
        const sizePantallas = () => {

            if (window.innerWidth <= 400) {
                cambioIconSize(220);
            } else if (window.innerWidth < 800 && window.innerWidth > 400) {
                cambioIconSize(350);
            } else {
                cambioIconSize(500);
            }
        };

        sizePantallas();


        window.addEventListener('resize', sizePantallas);

        // Se quita el evento cuando el componente es cargado.
        return () => window.removeEventListener('resize', sizePantallas);
    }, []);

    if (!textos) {
        return <p>Cargando...</p>; 
    }

    return (
        <>
            <main>
                <Container fluid='sm' className='mb-2'>
                    <Row className='direccion_flex align-items-center justify-content-center' xs={1} md={1} xl={2}>
                        <Col className='text-center'>
                            <img src={textos.INICIO.IMAGEN1} alt="imagen del logo" width={logoSize} />
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1 dangerouslySetInnerHTML={{ __html: textos.INICIO.TITULO }}></h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p dangerouslySetInnerHTML={{ __html: textos.INICIO.TEXTO_ONG }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col align="end">
                                        <Button href='/quienes_somos' className='mb-2'>¿Quienes somos?</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <CarouselC imagenes={textos.IMAGENES_CAROUSEL} width='w-100' />

                <IndexCards cards={textos.SECCIONES} />
            </main>
        </>
    );
}

export default Index