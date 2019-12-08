import React from 'react';
import Logo from "../logo.png";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const Navegacion = () => (
          <div className="sticky-top">
            <Navbar expand="lg" fixed="top" bg="light">
                <Container>
                    <Navbar.Brand className="text-info text-break">
                        <img 
                            src={Logo}
                            width="70"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#I">Inicio</Nav.Link>
                            <Nav.Link href="#a">Sobre IME</Nav.Link>
                            <Nav.Link href="#b">Contacto</Nav.Link>
                            <Nav.Link href="#c">Ubicanos</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-primary">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </div>

);

export default Navegacion;