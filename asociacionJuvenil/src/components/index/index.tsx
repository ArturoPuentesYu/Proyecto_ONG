import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './index.css'
import imagenLogo from '/LogoVectorizado.svg';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Foto1 from '../../assets/sliderIndex/foto1.jpeg'
import Foto2 from '../../assets/sliderIndex/foto2.jpg'
import Foto3 from '../../assets/sliderIndex/foto3.jpg'
import Foto4 from '../../assets/sliderIndex/foto4.jpg'
import Foto5 from '../../assets/sliderIndex/foto5.jpg'

function Index() {
        // Para que en movil los iconos cambien un poco de tamaño.
        const [logoSize, cambioIconSize] = useState(34);

        useEffect(() => {
            // Funcion para añadir al evento resize de la pantalla
            const sizePantallas = () => {
                
                if (window.innerWidth <= 400) {
                    cambioIconSize(220);
                } else if ( window.innerWidth < 800 && window.innerWidth > 400) {
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
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col className='text-center' md={6}>
                            <img src={imagenLogo} alt="imagen del logo" width={logoSize} />
                        </Col>
                        <Col sm={10} md={6}>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <h1>Asociacón Juvenil de Tres Cantos</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            La Asociación Juvenil por el Ocio Alternativo Tres Cantos (AJ3C) es una entidad sin ánimo de lucro que lleva desde 2007 actuando en #TresCantos y colaborando con el #Ayuntamiento. Nuestro objetivo es ofrecer un ocio alternativo, sano y asequible a los jóvenes del municipio, además de apoyarles en sus proyectos...
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col align="end">
                                        <Button variant="info">Leer Más</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                
                <Carousel>
                    <Carousel.Item>
                        <img src={Foto1} alt="foto slider 1" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={Foto2} alt="foto slider 2" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={Foto3} alt="foto slider 3" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={Foto4} alt="foto slider 4" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={Foto5} alt="foto slider 5" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </main>
        </>
    );
}

export default Index