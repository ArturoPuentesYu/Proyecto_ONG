import { InputGroup, Form, Container, Button } from "react-bootstrap"
import './login.css'
import { FormEvent, useState } from "react";
import { Eye } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";

export default () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const navigate = useNavigate();
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login exitoso:', data);
                localStorage.setItem('token', data.token); // Almacena el token
                navigate('/administracion/panel'); // Redirige al usuario al panel de administración
            } else {
                throw new Error('Falló el login');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className='login-container'>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <InputGroup.Text>Correo electrónico</InputGroup.Text>
                    <Form.Control type="email" aria-label="Email" aria-describedby="inputGroup-sizing-default" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>

                <InputGroup className="mt-1" itemType="password">
                    <InputGroup.Text>Contrase&ntilde;a</InputGroup.Text>
                    <Form.Control type={showPassword ? "text" : "password"} value={password}
                        onChange={(e) => setPassword(e.target.value)} aria-label="password" aria-describedby="inputGroup-sizing-default" />
                    <Button variant="outline-secondary" id="button-addon2" onClick={togglePasswordVisibility}>
                        <Eye />
                    </Button>
                </InputGroup>

                <Container className="mt-4 d-flex justify-content-center align-items-center">
                    <Button type="submit" className="boton-login" variant="outline-primary" id="button-addon2">Iniciar sesion</Button>
                </Container>
            </Form>


        </Container>
    )
}