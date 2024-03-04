import { Row, Col } from "react-bootstrap"
import { Instagram, Tiktok, Facebook, Youtube, Envelope, Whatsapp } from "react-bootstrap-icons"
import { REDES } from "../data/strings"
import { useState, useEffect } from "react";



const Redes = () => {
    // Para que en movil los iconos cambien un poco de tamaño.
    const [iconSize, cambioIconSize] = useState(34);

    useEffect(() => {
        // Funcion para añadir al evento resize de la pantalla
        const sizePantallas = () => {

            if (window.innerWidth <= 400) {
                cambioIconSize(26);
            } else if (window.innerWidth < 800 && window.innerWidth > 400) {
                cambioIconSize(30);
            } else {
                cambioIconSize(34);
            }
        };

        sizePantallas();


        window.addEventListener('resize', sizePantallas);

        // Se quita el evento cuando el componente es cargado.
        return () => window.removeEventListener('resize', sizePantallas);
    }, []);

    return (<>
        <Row className='my-3 justify-content-center d-grip gap-2'>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.TWITTER} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                </a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.INSTAGRAM} target="_blank"><Instagram size={iconSize}></Instagram></a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.TIKTOK} target="_blank"><Tiktok size={iconSize}></Tiktok></a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.FACEBOOK} target="_blank"><Facebook size={iconSize}></Facebook></a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.YOUTUBE} target="_blank"><Youtube size={iconSize}></Youtube></a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={'mailto:'+REDES.EMAIL} target="_blank"><Envelope size={iconSize}></Envelope></a>
            </Col>
            <Col className='text-center' xs='2' md={1}>
                <a href={REDES.WHATSAPP} target="_blank"><Whatsapp size={iconSize}></Whatsapp></a>
            </Col>
        </Row>
    </>);

}

export default Redes;