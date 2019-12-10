import React, { Component } from 'react'

export default class Carro extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length===0? " El carro está vacío": <div> Tienes {cartItems.length} productos en el carro.</div>}
                
            </div>
        )
    }
}
