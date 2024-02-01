import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { INICIO } from '../../../data/strings';

export const Movil = () => {
    return (
        <main>
            <Container>
                <Col className='mt-2'>
                    <Row className='text-center'>
                        <img src={INICIO.IMAGEN1} alt="imagen del logo" />
                    </Row>
                    <Row>
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
                    </Row>
                </Col>
            </Container>
        </main>
    );
}