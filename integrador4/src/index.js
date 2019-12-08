import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Col} from 'react-bootstrap';

import Navegacion from './componentes/Navbar';
import App from './App';


/*class Producto extends React.Component {
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
  }*/


const routing = (
  <Router>
    <div>
      <Navegacion/>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
