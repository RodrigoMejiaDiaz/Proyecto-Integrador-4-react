import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
                <div class="row row-cols-1 row-cols-md-3">
                {this.state.categorias.map(categoria => {
                                return (
                                    <div className="col mb-4">
                                        <a className="text-decoration-none" href="#">
                                        <div className="card h-100">
                                            <img src={`/categorias_images/${categoria.image}`} className="card-img-top" style={{height: "400px;"}} alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title text-center">{categoria.categoria}</h5>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                })}
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