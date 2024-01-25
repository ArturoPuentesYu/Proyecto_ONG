import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tiktok, Instagram, Facebook, Youtube, Twitter } from 'react-bootstrap-icons';
import './footer.css'

function Footer() {
    return (
        <footer className='bg-grey'>
            <Container className='py-2'>
                <Row>
                    <p className='fs-1'>Siguenos en nuestras redes</p>
                </Row>
                <Row className='text-center m-2 justify-content-center'>
                    <Col className='col-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </Col>
                    <Col className='col-1'>
                        <Tiktok size={32}></Tiktok>
                    </Col>
                    <Col className='col-1'>
                        <Facebook size={32}></Facebook>
                    </Col>
                    <Col className='col-1'>
                        <Youtube size={32}></Youtube>
                    </Col>
                </Row>
                <Row >
                    <Col className='border-left'>
                        <Container>
                            <Row>
                                <Col><h5>Inicio</h5></Col>
                            </Row>
                            <Row>
                                <Col><h5>Quienes Somos</h5></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='border-left'>
                        <Container>
                            <Row>
                                <Col><h5>Proyectos</h5></Col>
                            </Row>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        LGBTQ+
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Rincón del rabano
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Batucada batucán
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                    <Col className='border-left'>
                        <Container>
                            <Row>
                                <Col><h5>Actividades</h5></Col>
                            </Row>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Calendario
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Actividades pasadas
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Neurizate
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Grafitis y murales solidarios
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                    <Col className='border-left'>
                        <Container>
                            <Row>
                                <Col><h5>Formación</h5></Col>
                            </Row>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Curso de arte y cultura
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Voluntariado
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Sexualidad
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <div className='text-center p-2'>
                        <p>© 2024 Copyright: Asociaón Juvenil Tres Cantos</p>
                    </div>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer


{/* <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol> */}