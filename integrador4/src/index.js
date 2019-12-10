import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container, Col} from 'react-bootstrap';

import Navegacion from './componentes/Navbar';
import Productos from './componentes/Productos';
import App from './App';

const routing = (
  <BrowserRouter>
    <div>
      <Navegacion/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/productos" component={Productos} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
