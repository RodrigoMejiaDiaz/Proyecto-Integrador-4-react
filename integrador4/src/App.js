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
  componentWillMount(){
    fetch("http://localhost:8000/productos").then(res => res.json())
    .then(data => this.setState({
      productos: data,
    }));
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
