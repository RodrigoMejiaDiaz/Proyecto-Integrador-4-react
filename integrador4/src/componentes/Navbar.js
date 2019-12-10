import React from 'react';
import Logo from "../logo.png";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Navegacion = () => (
          <div sticky="top">
            <Navbar expand="lg" fixed="top" bg="light">
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
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/productos" className="nav-link">Productos</Link>
                                <Nav.Link href="#b">Contacto</Nav.Link>
                                <Nav.Link href="#c">Ubicanos</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-primary">Buscar</Button>
                        </Form>
                        <Link to="/carro" className="mx-2">
                            <img src={`/shopping-cart.svg`} />
                        </Link>
                    </Navbar.Collapse>
            </Navbar>
          </div>

);

export default Navegacion;