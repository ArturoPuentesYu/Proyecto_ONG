/*import { Container } from "react-bootstrap"
import * as jwtDecode from 'jwt-decode';*/

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import './panel.css'
import PanelInicio from "./paneles/panelinicio";
import PanelQuienesSomos from "./paneles/panelquienessomos";


const PanelAdmin = () => {
    return (<>
        <Container className="pt-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="inicio">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="inicio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>Inicio
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="quienes_somos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.6161 20H19.1063C20.2561 20 21.1707 19.4761 21.9919 18.7436C24.078 16.8826 19.1741 15 17.5 15M15.5 5.06877C15.7271 5.02373 15.9629 5 16.2048 5C18.0247 5 19.5 6.34315 19.5 8C19.5 9.65685 18.0247 11 16.2048 11C15.9629 11 15.7271 10.9763 15.5 10.9312" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
<path d="M4.48131 16.1112C3.30234 16.743 0.211137 18.0331 2.09388 19.6474C3.01359 20.436 4.03791 21 5.32572 21H12.6743C13.9621 21 14.9864 20.436 15.9061 19.6474C17.7889 18.0331 14.6977 16.743 13.5187 16.1112C10.754 14.6296 7.24599 14.6296 4.48131 16.1112Z" stroke="#000000" stroke-width="1.5"/>
<path d="M13 7.5C13 9.70914 11.2091 11.5 9 11.5C6.79086 11.5 5 9.70914 5 7.5C5 5.29086 6.79086 3.5 9 3.5C11.2091 3.5 13 5.29086 13 7.5Z" stroke="#000000" stroke-width="1.5"/>
</svg>
                                    Quienes somos
                                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="proyectos">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 5L10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19L21 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z" stroke="#000000" stroke-width="1.5"/>
<path d="M13 12L21 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                                    Proyectos
                                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="actividades">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
                                    Actividades
                                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="formacion">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6.5H16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6M2 17H6M2 17V22M6 17V11M6 17V22M6 11H9H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5Z" stroke="#000000" stroke-width="1.5"/>
</svg>
                                    Formaci&oacute;n
                                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="usuarios">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#000000" stroke-width="1.5"/>
</svg>
                                    Usuarios
                                    </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="inicio"><PanelInicio /></Tab.Pane>
                            <Tab.Pane eventKey="quienes_somos"><PanelQuienesSomos /></Tab.Pane>
                            <Tab.Pane eventKey="proyectos"><h1>Contenido disponible m&aacute;s adelante</h1></Tab.Pane>
                            <Tab.Pane eventKey="actividades"><h1>Contenido disponible m&aacute;s adelante</h1></Tab.Pane>
                            <Tab.Pane eventKey="formacion"><h1>Contenido disponible m&aacute;s adelante</h1></Tab.Pane>
                            <Tab.Pane eventKey="usuarios"><h1>Contenido disponible m&aacute;s adelante</h1></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>

    </>);

    /*
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

        window.location.href = "/Administracion";
    }


        // Redirigir al usuario al login o manejar de otra manera
    }*/
    
}

export default PanelAdmin