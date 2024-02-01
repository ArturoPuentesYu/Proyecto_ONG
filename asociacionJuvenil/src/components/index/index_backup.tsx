import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import Carousel from 'react-bootstrap/Carousel';
import {INICIO} from '../../data/strings';


function Index() {
    return (
        <>
            <main>
                <Container fluid='sm'>
                    <Row className='direccion_flex' xs={1} md={2} xl={2}>
                        <Col className='text-center'>
                            <img src={INICIO.IMAGEN1} alt="imagen del logo" />
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1 dangerouslySetInnerHTML={{__html: INICIO.TITULO}}></h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p dangerouslySetInnerHTML={{ __html: INICIO.TEXTO_ONG }} />
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