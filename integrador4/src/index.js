import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

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
        <Container>
          <Table variant="dark"bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Codigo Categoria</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Codigo Proveedor</th>
                <th>Image</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productos.map(producto => {
                return (
                  <tr key={producto.cod_prod}>
                    <td>{producto.cod_prod}</td>
                    <td>{producto.producto}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.cod_cat}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.cod_prov}</td>
                    <td>{producto.image}</td>
                    <td>{producto.estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
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

ReactDOM.render(
    <Producto />,
    document.getElementById('root')
);

serviceWorker.unregister();
