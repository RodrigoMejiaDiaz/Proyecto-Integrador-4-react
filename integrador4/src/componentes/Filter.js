import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-auto">
                    {this.props.count} productos encontrados.
                </div>
                <div className="col-auto">
                    <label>
                        Ordenar por
                        <select className="form-control" value={this.props.sort}
                        onChange={this.props.handleChangeSort}>
                            <option value="">Seleccionar</option>
                            <option value="menor">Menor a Mayor</option>
                            <option value="mayor">Mayor a Menor</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}
