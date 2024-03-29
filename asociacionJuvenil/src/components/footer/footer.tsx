import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GeoAltFill } from 'react-bootstrap-icons';
import './footer.css'
import Redes from '../redes_sociales_barra';
import { Link } from 'react-router-dom';

function Footer() {
    
    return (
        <footer className='mt-auto'>
            <Container className='pt-2 pb-0 mt-2 pb-3'>
                <Redes/>
                <Row className='mb-2'><a href="https://maps.app.goo.gl/kZcUbcXVDGXVSEg88" target="_blank">
                        <p className='text-center'>
                            <GeoAltFill color='secondary' className='me-3' />
                            Sector Literatos, 12, 28760 Tres Cantos, Madrid
                        </p>

                    </a>
                </Row>
                <Row className='row-gap-2'>
                    <Col className='border-left' xs={6} md={6} lg={3}>
                        <Container>
                            <Row>
                                <Col><Link to='/'><h5>Inicio</h5></Link></Col>
                            </Row>
                            <Row>
                                <Col><a href="/quienes_somos"><h5>Quienes Somos</h5></a></Col>
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
                                    <a href='/Proyectos/Lgtbiq' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        LGBTQ+
                                    </a>
                                </li>
                                <li>
                                    <a href='/Proyectos/Rincon_del_rabano' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Rincón del rabano
                                    </a>
                                </li>
                                <li>
                                    <a href='/Proyectos/Batucada_batucan' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
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
                                    <a href='/Actividades/Calendario' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Calendario
                                    </a>
                                </li>
                                <li>
                                    <a href='/Actividades/Actividades_pasadas' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Actividades pasadas
                                    </a>
                                </li>
                                <li>
                                    <a href='/Actividades/Neuronizate' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Neurizate
                                    </a>
                                </li>
                                <li>
                                    <a href="/Actividades/Diversificate" className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Diversificate
                                    </a>
                                </li>
                                <li>
                                    <a href='/Actividades/Grafitis' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
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
                                    <a href='/Formacion/Curso_monitor' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Curso de monitor de ocio y tiempo libre
                                    </a>
                                </li>
                                <li>

                                    <a href='/Formacion/Curso_premonis' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Curso de premonis
                                    </a>
                                </li>
                            
                                <li>
                                    <a href='/Formacion/Voluntariado' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Voluntariado
                                    </a>
                                </li>
                                <li>
                                    <a href='/Formacion/Sexualidad' className='text-black link-dark link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
                                        Sexualidad
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Col>
                </Row>

                <Col className='mt-3 text-center' xs={10} md={12} lg={12}>
                        &copy; {new Date().getFullYear()} Asociación Juvenil Tres Cantos&ensp;&ensp;
                        <a href='#'>Mapa web</a>&ensp;
                        <a href='#'>Accesibilidad</a>&ensp;
                        <a href='/Administracion'>Administración</a>
                </Col>
            </Container>
        </footer>

    );
}

export default Footer

