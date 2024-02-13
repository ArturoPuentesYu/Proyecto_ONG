import { Container } from "react-bootstrap"
import Login from "../../components/administracion/login"

const Administracion = () => {
    return <>
    <Container className="mt-2 direccion_flex align-items-center justify-content-center">
        <Login></Login>
    </Container>
    
    </>
}

export default Administracion