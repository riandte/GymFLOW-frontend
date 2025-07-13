import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">GymFlow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Financeiro</Nav.Link>
            <NavDropdown title="Alunos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cadastrar Aluno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Editar Aluno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Acompanhar aluno</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;