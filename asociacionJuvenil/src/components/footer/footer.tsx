import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GeoAltFill } from 'react-bootstrap-icons';
import './footer.css'
import Redes from '../redes_sociales_barra';
import { Link } from 'react-router-dom';

function Footer() {
    
    return (
        <footer>
            <Container className='pt-2 pb-0'>
                <Redes/>
                <Row className='mb-2'>
                    <p className='text-center'>
                        <GeoAltFill color='secondary' className='me-3' />
                        Sector Literatos, 12, 28760 Tres Cantos, Madrid
                    </p>
                </Row>
                <Row className='row-gap-2'>
                    <Col className='border-left' xs={6} md={6} lg={3}>
                        <Container>
                            <Row>
                                <Col><Link to='/'><h5>Inicio</h5></Link></Col>
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
                        <p className='text-center p-2'>© {new Date().getFullYear()} Copyright: Asociación Juvenil Tres Cantos</p>
                </Row>
            </Container>
        </footer>

    );
}

export default Footer

