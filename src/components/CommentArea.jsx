import React, { Component } from 'react'
import AddComment from './AddComment'
import CommentLists from './CommentLists'


export default class CommentArea extends Component {

    state = {
        comments: [],
        isLoading: true,
    }

    componentDidMount = async (props) => {

        try {
            let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDM4MDAxNDIsImV4cCI6MTY0NTAwOTc0Mn0.P9w7OXz4zve7wfC83LXdJteK6TsglIMohh94l3bqIiA',
                },
            })
            if (resp.ok) {
                let comments = await resp.json()
                console.log(comments)
                this.setState({
                    comments: comments,
                    isLoading: false,
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="bg-dark text-light d-flex flex-column">
                <CommentLists comments={this.state.comments} />
                <AddComment />
            </div>
        )
    }
}




