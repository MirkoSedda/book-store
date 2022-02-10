import React, { Component } from 'react'
import SingleComment from './SingleComment'


export default class CommentLists extends Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return <SingleComment comment={comment} />
                })
                }
            </div>
        )
    }
}
