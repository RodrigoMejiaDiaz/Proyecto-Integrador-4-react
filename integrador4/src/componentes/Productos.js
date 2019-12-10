import React from 'react';

import DropdownFiltros from "./dropdown-filtros";
import Carta1 from "./CartaLateral1";
import Carta2 from "./CartaLateral2";

class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            recuperado: false,
        };
    }

    mostrarProductos() {
        return(
            <div className="container">
                <div className="col col-12 d-none d-lg-block d-xl-block">
                    <div className="row">
                        <div className="col col-3 d-none d-lg-block d-xl-block">
                            <Carta1/>
                            <Carta2/>
                        </div>
                        <div className="col col-9">
                            <div className="row">
                                <div class="col">
                                    <p>Mostrando: 20 resultados</p>
                                </div>
                                <div className="col mx-3">
                                    <DropdownFiltros/>
                                </div>
                            </div>
                                <div className="card-deck my-4">
                                        {this.state.productos.map(producto => {
                                            return (
                                                <div className="col col-4">
                                                    <div className="card border-0 d-none d-lg-block d-xl-block">
                                                        <img src={`/productos_images/${producto.image}`} className="card-img-top" 
                                                        alt={`${producto.producto}`}/>
                                                        <div className="card-body">
                                                            <h5 className="card-title font-weight-normal">{producto.producto}</h5>
                                                            <p className="card-text"><strong>S/.{producto.precio}</strong></p>
                                                            <a href={`#${producto.cod_prod}`} className="btn btn-success stretched-link">Detalles</a>
                                                        </div>
                                                    </div>
                                                </div> 
                                        );
                                    })}
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4 d-lg-none d-xl-none">
                    <div class="col">
                        <p>Mostrando: 20 resultados</p>
                    </div>
                    <div className="col mx-3">
                        <DropdownFiltros/>
                    </div>
                </div>
                <div className="card-deck my-4 d-block d-lg-none d-xl-none">
                    {this.state.productos.map(producto => {
                        return (
                            <div className="card mb-3" style={{maxWidth: "540px;"}}>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <img src={`/productos_images/${producto.image}`} className="card-img" alt={`${producto.producto}`} />
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.producto}</h5>
                                            <p className="card-text">{producto.descripcion}</p>
                                            <p className="card-text"><strong>S/.{producto.precio}</strong></p>
                                            <a href={`#${producto.cod_prod}`} className="btn btn-success stretched-link">Detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>                               
        );
    }

    componentDidMount() {
        fetch('http://192.168.244.129:8000/api/productos/')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    productos: data,
                    recuperado: true,
                })
            })
    }

    render() {
        if (this.state.recuperado)
            return this.mostrarProductos()
        else
            return (<div>recuperando datos...</div>)
    }
}

export default Productos;