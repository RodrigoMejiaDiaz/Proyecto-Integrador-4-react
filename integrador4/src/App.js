import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false,
    };
  }

  mostrarTabla() {
    return (
      <div>
        <table border="1">
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
        </table>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://192.168.244.129:8000/api/productos')
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

export default App;
