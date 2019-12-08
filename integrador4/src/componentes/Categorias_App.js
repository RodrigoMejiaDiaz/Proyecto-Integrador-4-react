import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import quirurjico from './categorias_images/quirurjico.jpg';

class Categorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            recuperado: false,
        };
    }

    mostrarCategorias() {
        return (
            <div className="my-4">
                <h1>Categorías</h1>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Categoria</th>
                                <th>Descripcion</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categorias.map(categoria => {
                                return (
                                    <tr key={categoria.cod_cat}>
                                        <td>{categoria.cod_cat}</td>
                                        <td>{categoria.categoria}</td>
                                        <td>{categoria.descripcion}</td>
                                        <td><img src={require(categoria.image)}/></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch('http://192.168.244.129:8000/api/categorias/')
            .then((response) => {
                return response.json()
            })
            .then((cat) => {
                this.setState({
                    categorias: cat,
                    recuperado: true,
                })
            })
    }

    render() {
        if (this.state.recuperado)
            return this.mostrarCategorias()
        else
            return (<div>recuperado datos...</div>)
    }
}

export default Categorias;