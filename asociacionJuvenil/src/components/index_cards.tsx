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


/* 

                    <Row>
                        <h1>Proyectos</h1>
                    </Row>
                    <Row xs={1} md={2} lg={3} className='g-4'>
                        <Col >
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>LGBTQ+</Card.Title>
                                    <Card.Text>
                                        Desde la Asociación Juvenil Tres Cantos, nos hemos dedicado durante años a
                                        cultivar nuestro conocimiento y habilidades para abordar de manera integral
                                        y efectiva todos los aspectos relacionados con la sexualidad en adolescentes.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>El Rincón del Rabano</Card.Title>
                                    <Card.Text>
                                        El Rincón del Rábano, se define como una iniciativa vanguardista y
                                        alternativa de ocio destinada a los jóvenes tricantinos que comparten una pasión
                                        vibrante por el anime, el manga y la rica cultura japonesa. En la pasada edición,
                                        este evento se convirtió en un fenómeno arrasador, cautivando a miles de personas
                                        en nuestro querido municipio.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Batucada Batucan</Card.Title>
                                    <Card.Text>
                                        Batucán, una vibrante comunidad que reúne a más de 50 apasionados individuos,
                                        ha trascendido el mero concepto de agrupación musical para convertirse en un
                                        fenómeno cultural que propone una experiencia de ocio alternativa a través de
                                        la percusión brasileña.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col className='text-center'>
                            <Button>Ver más proyectos</Button>
                        </Col>
                    </Row>
                </Container>


                <Container className='my-5'>
                    <Row>
                        <h1>Actividades</h1>
                    </Row>
                    <Row xs={1} md={2} lg={3} className='g-4'>
                        <Col >
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Grafitis y murales solidarios+</Card.Title>
                                    <Card.Text>
                                        Hablemos sobre una forma especial de expresión artística que a menudo se
                                        malinterpreta: los murales urbanos. Esta es una cultura que rebosa de creatividad y
                                        libertad, y se llama grafiti. El grafiti es un tipo de pintura o arte visual que
                                        generalmente se encuentra en espacios urbanos, como paredes, portones y
                                        muros...
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Diversifícate</Card.Title>
                                    <Card.Text>Estás a punto de embarcarte en una experiencia que te hará ver el mundo de una
                                        manera totalmente nueva. Imagina escuchar a jóvenes como tú que han
                                        enfrentado desafíos sorprendentes. Pero esto no es solo para escuchar; también
                                        podrás hacerles todas las preguntas que tengas en mente...
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Neuronízate</Card.Title>
                                    <Card.Text>
                                        Neuronizate es justo lo que necesitas. No es solo una actividad, es una
                                        experiencia educativa única que te permite estar en contacto directo con nosotros,
                                        con las tres mejores asociaciones de la ciudad: Amnistía Internacional,
                                        Asociación Juvenil Tres Cantos y Cruz Roja Juventud...

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col className='text-center'>
                            <Button>Ver más actividades</Button>
                        </Col>
                    </Row>
                </Container>



                <Container className='my-5'>
                    <Row>
                        <h1>Formación</h1>
                    </Row>
                    <Row xs={1} md={2} lg={3} className='g-4'>
                        <Col >
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Curso de monitor de ocio y tiempo libre</Card.Title>
                                    <Card.Text>
                                        En este curso tendrás la oportunidad de ayudar a las personas a disfrutar de su 
                                        #TiempoLibre de manera educativa y divertida y a potenciar el tiempo libre como 
                                        un espacio de ocio sugestivo y beneficioso para las personas. Aprenderás a organizar 
                                        y liderar actividades que fomenten el desarrollo personal, social y cultural de los 
                                        participantes.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Voluntariado</Card.Title>
                                    <Card.Text>Como asociación, ofrecemos una gran variedad de actividades y programas para 
                                        jóvenes: excursiones, cursos, talleres de arte, charlas, deportes, actividades culturales 
                                        y eventos sociales. Estas actividades tienen como objetivo proporcionar un entorno seguro 
                                        y enriquecedor para que los jóvenes puedan participar y aprender de manera divertida y sana.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='h-100'>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Curso de arte y cultura</Card.Title>
                                    <Card.Text>
                                    En este curso vas a poder desarrollar conocimientos y experiencias para aprender a mejorar los 
                                    proyectos culturales y de arte en una asociación Juvenil. Se realiza a través de 3 sesiones intensivas 
                                    con expertos en el ámbito de la cultural. Al finalizar el curso, se te proporcionará un título oficial 
                                    de la #EscuelaDeAnimación.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className='text-end'>
                                    <Button variant="primary">Leer más</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='my-3'>
                        <Col className='text-center'>
                            <Button>Ver más fomaciones</Button>
                        </Col>
                    </Row>


*/

export default Index_cards