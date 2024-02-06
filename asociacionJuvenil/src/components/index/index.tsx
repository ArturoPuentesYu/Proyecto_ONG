import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './index.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Foto1 from '../../assets/sliderIndex/foto1.jpeg'
import Foto2 from '../../assets/sliderIndex/foto2.jpg'
import Foto3 from '../../assets/sliderIndex/foto3.jpg'
import Foto4 from '../../assets/sliderIndex/foto4.jpg'
import Foto5 from '../../assets/sliderIndex/foto5.jpg'
//import Carousel from 'react-bootstrap/Carousel';
import { INICIO } from '../../data/strings';

import IndexCards from "./index_cards";


function Index() {
    // Para que en movil los iconos cambien un poco de tamaño.
    const [logoSize, cambioIconSize] = useState(34);

    useEffect(() => {
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
    return (
        <>
            <main>
                <Container fluid='sm' className='mb-2'>
                    <Row className='direccion_flex align-items-center justify-content-center' xs={1} md={2} xl={2}>
                        <Col className='text-center'>
                            <img src={INICIO.IMAGEN1} alt="imagen del logo" width={logoSize} />
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1 dangerouslySetInnerHTML={{ __html: INICIO.TITULO }}></h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p dangerouslySetInnerHTML={{ __html: INICIO.TEXTO_ONG }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col align="end">
                                        <Button>Leer Más</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>


                <Carousel>
                    <Carousel.Item>
                        <img src={Foto1} alt="foto slider 1" className='w-100' />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Foto2} alt="foto slider 2" className='w-100' />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Foto3} alt="foto slider 3" className='w-100' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Foto4} alt="foto slider 4" className='w-100' />
                        <Carousel.Caption>
                            <h3>slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Foto5} alt="foto slider 5" className='w-100' />
                        <Carousel.Caption>
                            <h3>slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <IndexCards />
            </main>
        </>
    );
}

export default Index