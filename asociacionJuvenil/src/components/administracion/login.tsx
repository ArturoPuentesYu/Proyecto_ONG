import { InputGroup, Form, Container, Button } from "react-bootstrap"
import './login.css'
import { useState } from "react";
import {Eye} from 'react-bootstrap-icons'

export default () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Manejo del envío del formulario
        console.log(email, password);
    };

    return (
        <Container className='login-container'>
            <InputGroup>
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control type="email" aria-label="Email" aria-describedby="inputGroup-sizing-default" />
            </InputGroup>


            <InputGroup className="mt-1" itemType="password">
                <InputGroup.Text>Contrase&ntilde;a</InputGroup.Text>
                <Form.Control type={showPassword ? "text" : "password"} value={password}
                    onChange={(e) => setPassword(e.target.value)} aria-label="password" aria-describedby="inputGroup-sizing-default" />
                <Button  variant="outline-secondary" id="button-addon2" onClick={togglePasswordVisibility}>
                <Eye />
              </Button>
            </InputGroup>
            <Container className="mt-4 d-flex justify-content-center align-items-center">
                <Button className="boton-login" variant="outline-primary" id="button-addon2">Iniciar sesion</Button>
            </Container>
        </Container>
    )
}