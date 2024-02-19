/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

function Edit_index_texts(props: any) {
  const arr = props.textos;
  const [editable, cambioEstado] = useState(true);

  if (arr.length === 0) {
    return (
      <>
        <Container className="d-flex mt-auto justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </Container>
      </>
    );
  }

  function handleSubmit(e: any, index?: number, subIndex?: number) {
    // Evita que el navegador actualice la página
    e.preventDefault();
    
    // Enviar datos al servidor
    fetch("http://localhost:3000/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ruta: (index == undefined && subIndex == undefined)? "JSON.INICIO.TEXTO_ONG": "JSON.SECCIONES[" + index + "].ITEMS[" + subIndex + "].DESCRIPCION",
        texto: e.target.texto.value,
        seccion: (index != undefined && subIndex != undefined)? index.toString(): null,
        item: (index != undefined && subIndex != undefined)? subIndex.toString(): null,
      })
    })
    .then(response => response.json())
    .then(data => {if(data.ok == 1) console.log("Texto actualizado correctamente"); else console.log("Error al actualizar el texto")})
    .catch(error => console.error("Error:", error));

  }

  return (
    <>
      <h1>Edici&oacute;n de textos de p&aacute;gina principal</h1>
      <p>Para a&ntilde;adir texto con negrita o subrayado, hay que introducir en el cuadro de texto lo siguiente:<br />
        <ul>
          <li>Negrita: &lt;b&gt;texo en negrita&lt;/b&gt;</li>
          <li>Subrayado: &lt;b&gt;texo a subrayar&lt;/b&gt;</li>
        </ul>
        <b>Importante</b><br />
        Aunque se habiliten varios cuadros de texto, editar solo 1, si no, solo se cambiar&aacute; el &uacute;ltimo cuadro de texto editado.
      </p>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title><h2>Texto de inicio</h2></Card.Title>
            <form method="post" onSubmit={e => handleSubmit(e)}>
              <textarea name="texto" rows={4} cols={60} disabled={editable} defaultValue={arr.INICIO.TEXTO_ONG}/>
              <Row className="my-3">
                <Col className="text-center">
                  <Button type={editable ? "button" : "submit"} onClick={editable? () => { cambioEstado(!editable)} : () => {}}>{editable ? "Editar texto" : "Guardar cambios"}</Button>
                </Col>
              </Row>
            </form>
          </Card.Body>
        </Card>
      </Container>
      {arr.SECCIONES.map((section: any, index: number) => (
        <Container key={index} className="my-5">
          <Row>
            <h2>{section.titulo}</h2>
          </Row>
          <Row className="mt-1">
            {section.items.map((item: any, subIndex: number) => (
              <Row key={subIndex}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <form method="post" onSubmit={e => handleSubmit(e, index, subIndex)}>
                      <textarea className="w-100" name="texto" rows={5} disabled={editable} defaultValue={item.descripcion}/>
                      <Row className="my-3">
                        <Col className="text-center">
                          <Button type={editable ? "button" : "submit"} data-section-id={index} data-item-id={subIndex} onClick={editable ? () => { cambioEstado(!editable) } : () => {}}>{editable ? "Editar texto" : "Guardar cambios"}</Button>
                        </Col>
                      </Row>
                    </form>
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
