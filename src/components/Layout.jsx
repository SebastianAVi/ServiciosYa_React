import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from './Footer'

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            ServiciosYa
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>

              <Nav.Link as={NavLink} to="/servicios">
                Servicios
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="flex-grow-1">
        <Outlet />  {/* Aquí va el contenido de cada página */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout