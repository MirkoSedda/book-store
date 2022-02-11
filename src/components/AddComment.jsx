// AddComment contains a form for adding a text comment and a rating(from 1 to 5).
// This component should allow the user to POST a new comment on the selected book.

import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rating: '',
            elementId: this.props.asin
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/`,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            )
            if (response.ok) {
                console.log(response)
                alert('comment saved!')
            } else {
                alert('something went wrong! please try again')
                if (response.status === 400) {
                    alert('some data was wrong')
                }
                if (response.status === 404) {
                    alert('not found')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your comment:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment"
                        value={this.state.comment.comment}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                comment: e.target.value
                            }
                        })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Rating:</Form.Label>
                    <Form.Control type="text" placeholder="Add Rating"
                        value={this.state.comment.rating}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                rating: e.target.value
                            }
                        })}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
