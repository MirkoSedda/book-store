import React, { Component } from 'react'
import Child from './Child'

export default class parent extends Component {

    state = {
        title: ''
    }

    handleGiorgio = (giorgio) => {
        this.setState({ title: giorgio })
    }

    render() {
        return (
            <div className="text-white">
                <h1 >
                    {this.state.title}
                </h1>
                <Child branding={this.handleGiorgio} />
            </div>
        )
    }
}
