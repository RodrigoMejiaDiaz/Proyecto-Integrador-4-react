import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Logo from "./logo.png";
import './index.css';
import ImgCar1 from './carrousel1.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Navegacion extends React.Component {
    barraSuperior() {
        return (
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
          );
    }
    render() {
        return this.barraSuperior()
    }
}

class Carrousel extends React.Component {
    carousel() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImgCar1}
                        alt="First slide"/>
                        <Carousel.Caption>
                            <h3>Compras seguras</h3>
                            <p>Tus compras son seguras y rápidas.</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    render() {
        return this.carousel()
    }
}

class Producto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        productos: [],
        recuperado: false,
      };
    }
  
    mostrarTabla() {
      return (
        <div></div>
      );
    }
  
    componentDidMount() {
      fetch('http://192.168.244.129:8000/api/productos/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({
          productos: prod,
          recuperado: true,
        })
      })
    }
  
    render() {
      if (this.state.recuperado)
        return this.mostrarTabla()
      else
        return (<div>recuperando datos...</div>)
    }
  }

const PaginaPrincipal = () =>
    <div>
        <Navegacion/>
        <Carrousel/>
    </div>;

ReactDOM.render(
    <PaginaPrincipal />,
    document.getElementById('root')
);

serviceWorker.unregister();
