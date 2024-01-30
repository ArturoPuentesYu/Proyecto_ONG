import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tiktok, Instagram, Facebook, Youtube, Envelope, Whatsapp } from 'react-bootstrap-icons';
import './footer.css'
import { useEffect, useState } from 'react';

function Footer() {

    // Para que en movil los iconos cambien un poco de tamaño.
    const [iconSize, cambioIconSize] = useState(34);

    useEffect(() => {
        // Funcion para añadir al evento resize de la pantalla
        const sizePantallas = () => {
            
            if (window.innerWidth <= 400) {
                cambioIconSize(26);
            } else if ( window.innerWidth < 800 && window.innerWidth > 400) {
                cambioIconSize(30);
            } else {
                cambioIconSize(34);
            }
        };

        sizePantallas();


        window.addEventListener('resize', sizePantallas);

        // Se quita el evento cuando el componente es cargado.
        return () => window.removeEventListener('resize', sizePantallas);
    }, []);
    
    return (
        <footer className='bg-grey'>
            <Container className='pt-2 pb-0'>
                <Row>
                    <p className='fs-1 mb-3'>Siguenos en nuestras redes</p>
                </Row>

                <Row className='m-2 mb-5 justify-content-center column-gap-3'>
                    <Col className='col' xs='1' md={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Instagram size={iconSize}></Instagram>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Tiktok size={iconSize}></Tiktok>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Facebook size={iconSize}></Facebook>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Youtube size={iconSize}></Youtube>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Envelope size={iconSize}></Envelope>
                    </Col>
                    <Col className='col' xs='1' md={1}>
                        <Whatsapp size={iconSize}></Whatsapp>
                    </Col>
                </Row>

                <Row className='row-gap-2'>
                    <Col className='border-left' xs={6} md={6} lg={3}>
                        <Container>
                            <Row>
                                <Col><h5>Inicio</h5></Col>
                            </Row>
                            <Row>
                                <Col><h5>Quienes Somos</h5></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='border-left' xs={6} md={6} lg={3}>
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
                    <Col className='border-left' xs={6} md={6} lg={3}>
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
                    <Col className='border-left' xs={6} md={6} lg={3}>
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

                <Row className='mt-3 mb-0'>
                    <div className='text-center p-2'>
                        <p>© {new Date().getFullYear()} Copyright: Asociaón Juvenil Tres Cantos</p>
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