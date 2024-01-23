import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'

function navBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">AJ3C</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <NavDropdown title="Proyectos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LGBTQ+</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                El rincón del rabano
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Batucada Batucán</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;