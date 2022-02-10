import React, { Component } from 'react'

export default class SingleComment extends Component {
    render() {
        return (
            <div>{this.props.comment} </div>
        )
    }
}
