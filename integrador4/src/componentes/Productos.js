import React, { Component } from 'react';

export default class Productos extends Component {
    render() {
        const productoItems = this.props.productos.map(producto => (
            <div className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${producto.id}`} onClick={this.props.handleAddToCart}>
                    <img src={`/productos/${producto.image}.jpg`} alt={producto.producto}/>
                    <p>
                        {producto.producto}
                    </p>
                </a>
            </div>
            </div>
        ));

    return (
        <div className="row">
            {productoItems}
        </div>
        )
    }
}