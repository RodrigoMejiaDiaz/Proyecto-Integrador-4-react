import React, { Fragment } from 'react';

import {Container, Col} from 'react-bootstrap';

import Categorias from './componentes/Categorias_App';
import Carrousel from './componentes/Carousel';
import Productos from './componentes/Productos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { productos:[] };
  }

  render() {
    return (
      <Fragment>
        <Carrousel/>
        <Container>
          <Categorias/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
