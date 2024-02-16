/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

function Edit_index_texts(props: any) {
  console.log(props.textos);
  if (props.textos.length === 0) {
    return (
      <>
        <Container className="d-flex mt-auto justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </Container>
      </>
    );
  }
  return (
    <>
      {props.textos.SECCIONES.map((section: any, index: number) => (
        <Container key={index} className="my-5">
          <Row>
            <h1>{section.titulo}</h1>
          </Row>
          <Row className="mt-1">
            {section.items.map((item: any, subIndex: number) => (
              <Row key={subIndex}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Row className="my-3">
                      <Col className="text-center">
                        <Button>Editar texto</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            ))}
          </Row>
        </Container>
      ))}
    </>
  );
}

export default Edit_index_texts;
