import React, {Component, Fragment} from 'react'

export default class Productos extends Component {
    render() {
        const productItems = this.props.productos.map(producto => (
            <div className="col col-4">
                <div className="card border-0 d-none d-lg-block d-xl-block">
                    <img src={`/productos_images/${producto.image}`} className="card-img-top" 
                    alt={`${producto.producto}`}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-normal">{producto.producto}</h5>
                        <p className="card-text"><strong>S/.{producto.precio}</strong></p>
                        <a href={`#${producto.cod_prod}`} onClick={this.props.handleAddToCart} className="btn btn-success stretched-link">Detalles</a>
                    </div>
                </div>
            </div>
        )
        )
        return (
            <Fragment>
                {productItems}
            </Fragment>
        )
    }
}