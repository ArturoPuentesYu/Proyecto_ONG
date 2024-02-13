import { InputGroup, Form, Container, Button } from "react-bootstrap"
import './login.css'

export default () => {
    return (
    <Container className='login-container'>
        <InputGroup>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="email" aria-label="Email" aria-describedby="inputGroup-sizing-default" />
        </InputGroup>
        <InputGroup className="mt-1" itemType="password">
            <InputGroup.Text>Contrase&ntilde;a</InputGroup.Text>
            <Form.Control type="password" aria-label="password" aria-describedby="inputGroup-sizing-default" />
            <Button variant="outline-secondary" id="button-addon2">&#128065;</Button>
        </InputGroup>
        <Container className="mt-4 d-flex justify-content-center align-items-center">
            <Button className="boton-login" variant="outline-primary" id="button-addon2">Iniciar sesion</Button>
        </Container>
    </Container>
    )
}