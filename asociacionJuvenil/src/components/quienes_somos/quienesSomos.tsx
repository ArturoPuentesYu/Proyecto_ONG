import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imagenLogo from '/LogoVectorizado.svg';

function QuieneSomos() {
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col className='text-center'><img src={imagenLogo} alt="imagen del logo" width={"500px"}/></Col>
                </Row>
                <Row></Row>
            </Container>
        </>
    )
}

export default QuieneSomos