import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {INICIO} from '../../../data/strings';

export const Ordenador = () => {
    return (
        <>
            <main>
                <Container>
                    <Row className='mt-2'>
                        <Col className='text-center'>
                            <img src={INICIO.IMAGEN1} alt="imagen del logo" />
                        </Col>
                        <Col>
                            <Container>
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
            </main>
        </>
    );
}