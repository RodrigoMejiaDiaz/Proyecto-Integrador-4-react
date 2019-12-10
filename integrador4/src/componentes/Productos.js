import React from 'react';

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
            <div className="card-deck">
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
                                            
        )
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