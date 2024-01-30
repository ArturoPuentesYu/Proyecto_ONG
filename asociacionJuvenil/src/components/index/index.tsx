import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './index.css'
import imagenLogo from '/LogoVectorizado.svg';
import Carousel from 'react-bootstrap/Carousel';

function Index() {
    return (
        <>
            <main>
                <Container>
                    <Row>
                        <Col className='text-center col-auto'>
                            <img src={imagenLogo} alt="imagen del logo" width={500} />
                        </Col>
                        <Col>
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

                {/* Slider 
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>*/}
            </main>
        </>
    );
}

export default Index