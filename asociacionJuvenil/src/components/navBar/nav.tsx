import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoBrand from '/logoAJ3C.png'
import './nav.css'
import { useState, useEffect } from 'react';
import { AlignDirection } from 'react-bootstrap/esm/types';

function NavBarra() {

  // Para que el menu lo muestre bien dependiendo del tamaño de pantalla. (El breakpoint no funciona bien)
  const [alignMenu, cambioAlignMenu] = useState<AlignDirection>('end');

  useEffect(() => {
      // Funcion para añadir al evento resize de la pantalla
      const cambio = () => {
          
          if (window.innerWidth <= 1124) {
            cambioAlignMenu('start');
          } else {
            cambioAlignMenu('end');
          }
      };

      cambio();


      window.addEventListener('resize', cambio);

      // Se quita el evento cuando el componente es cargado.
      return () => window.removeEventListener('resize', cambio);
  }, []);

  return (
    <Navbar expand="md" className="">
      <Container>
        <Navbar.Brand href='/'> <img
              alt="Asociación Juvenil Tres Cantos"
              src={logoBrand}
              width="42"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/quienes_somos">Quienes Somos</Nav.Link>
            <NavDropdown title="Proyectos" id="proyectos">
              <NavDropdown.Item href="/Proyectos/Lgtbiq">LGBTQ+</NavDropdown.Item>
              <NavDropdown.Item href="/Proyectos/Rincon_del_rabano">El rincón del rabano</NavDropdown.Item>
              <NavDropdown.Item href="/Proyectos/Batucada_batucan">Batucada Batucán</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Actividades" id="actividades">
              <NavDropdown.Item href="/Actividades/Calendario">Calendario</NavDropdown.Item>
              <NavDropdown.Item href="/Actividades/Actividades_pasadas">Actividades Pasadas</NavDropdown.Item>
              <NavDropdown.Item href="/Actividades/Neuronizate">Neurizate</NavDropdown.Item>
              <NavDropdown.Item href="/Actividades/Diversificate">Diversificate</NavDropdown.Item>
              <NavDropdown.Item href="/Actividades/Grafitis">Grafitis y murales solidarios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown align={{ xl:alignMenu}} title="Formación" id="formacion">
              <NavDropdown.Item href="/Formacion/Curso_premonis">Curso de premonis</NavDropdown.Item>
              <NavDropdown.Item href="/Formacion/Curso_monitor">Curso de monitor de ocio y tiempo libre</NavDropdown.Item>
              <NavDropdown.Item href="/Formacion/Curso_arte_y_cultura">Curso de arte y cultura</NavDropdown.Item>
              <NavDropdown.Item href="/Formacion/Voluntariado">Voluntariado</NavDropdown.Item>
              <NavDropdown.Item href="/Formacion/Sexualidad">Sexualidad</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarra;