import { Container, Col, Row } from 'react-bootstrap';
import { Tooltip } from 'react-tooltip'
// https://react-tooltip.com/docs/getting-started
// -> https://react-tooltip.com/docs/examples/variant
// -> https://react-tooltip.com/docs/examples/offset
// -> https://react-tooltip.com/docs/examples/events


export const TooltipCalendario = (props: any) => (<Tooltip id={props.id}>
    <Container>
        <Col>
            <Row><h2>{props.titulo}</h2></Row>
            <Row><small>{props.fecha}</small></Row>
            <Row><p>{props.descripcion}</p></Row>
            <Row><Col><a></a></Col><Col><p>{props.ubicacion}</p></Col></Row>
        </Col>
    </Container>
</Tooltip>)