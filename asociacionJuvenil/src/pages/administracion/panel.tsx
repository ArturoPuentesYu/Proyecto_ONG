import { Container } from "react-bootstrap"
import * as jwtDecode from 'jwt-decode';


const PanelAdmin = () => {
    

    const verificarExpiracionToken = (token: string): boolean => {
        // Forzamos el tipo aquí para asegurarnos de que TypeScript lo trate como una función
        const decoded: DecodedToken = (jwtDecode as unknown as (token: string) => DecodedToken)(token);
        const currentDate = new Date();

        if (decoded.exp * 1000 < currentDate.getTime()) {
            console.log('El token ha expirado');
            return false;
        } else {
            console.log('El token es válido');
            return true;
        }
    };

    interface DecodedToken {
        exp: number;
        // Agrega aquí más propiedades del token según necesites
    }

    const token = localStorage.getItem('token');
    if (token) {
        if (verificarExpiracionToken(token)) {
            return (<>
                <Container className="mt-auto">
                    <h1>Hola administrador</h1>
                </Container>
        
            </>);
        } else {
            return (<>
                <Container className="mt-auto">
                    <h1>No tienes permisos!</h1>
                </Container>
            </>);
        }
    } else {
        console.log('No hay token disponible');
        // Redirigir al usuario al login o manejar de otra manera
    }
    
}

export default PanelAdmin