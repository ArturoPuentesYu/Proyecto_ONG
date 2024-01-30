import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoBrand from '/logoAJ3C.png'
import './nav.css'

function NavBarra() {
  return (
    
    <Navbar expand="md" className="">
      <Container>
        <Navbar.Brand href="#home"> <img
              alt="Asociación Juvenil Tres Cantos"
              src={logoBrand}
              width="40"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <NavDropdown title="Proyectos" id="proyectos">
              <NavDropdown.Item href="#action/3.1">LGBTQ+</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">El rincón del rabano</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Batucada Batucán</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Actividades" id="actividades">
              <NavDropdown.Item href="#action/3.1">Calendario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Actividades Pasadas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Neurizate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diversificate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Grafitis y murales solidarios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Formación" id="formacion">
              <NavDropdown.Item href="#action/3.1">Curso de arte y cultura</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Voluntariado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sexualidad</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarra;