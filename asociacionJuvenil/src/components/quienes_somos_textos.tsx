import { Row, Card, Container } from 'react-bootstrap'

function CardsQuiensSomos(props: any) {
    let arr = props.cards;
    const primero = arr.TEXTO_INICIAL;

    return (
        <>
            <Row>
                <h1 className='text-center mt-4 mb-4'>Sobre nosotros</h1>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Text><p dangerouslySetInnerHTML={{ __html: primero }}></p></Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            {Object.entries(arr).map((section: any, index: number) => {
                if (Array.isArray(section)) {
                    return (
                        <Container key={index} className='my-5'>
                            {section.map((texto: any, index: number) => (<>
                                    <Card className='h-100'>
                                        <Card.Body>
                                            <Card.Title><h2>{texto.TITULO}</h2></Card.Title>
                                            <Card.Text><p dangerouslySetInnerHTML={{ __html: texto.TEXTO }}></p></Card.Text>
                                        </Card.Body>
                                    </Card>
                                     </>
                            ))}
                        </Container>
                    );
                } else {
                    return <Container></Container>;
                }
            })}
        </>
    );
}

export default CardsQuiensSomos