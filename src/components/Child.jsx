import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div onClick={(e) => this.props.branding('Giorgio')}>CLICK ME!</div>
        )
    }
}
