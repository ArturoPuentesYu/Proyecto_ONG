import {Row, Card, Col, Container, Button} from 'react-bootstrap'

function Index_cards(props: any) {
    const arr = props.cards;
    return (
        <>
            {arr.map((section: any, index: number) => (
                <Container key={index} className='my-5'>
                    <Row>
                        <h1>{section.titulo}</h1>
                    </Row>
                    <Row xs={1} md={2} lg={3} className='g-4'>
                        {section.items.map((item: any, subIndex: number) => (
                            <Col key={subIndex}>
                                <Card className='h-100'>
                                    <Card.Body>
                                        <Card.Title>{item.titulo}</Card.Title>
                                        <Card.Text>{item.descripcion}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='text-end'>
                                        <Button variant="primary">Leer más</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className='my-3'>
                        <Col className='text-center'>
                            <Button>Ver más</Button>
                        </Col>
                    </Row>
                </Container>
            ))}
        </>
    );
}

export default Index_cards