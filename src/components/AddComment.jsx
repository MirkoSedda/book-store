import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = (asin) => {

    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: asin,
    })

    useEffect(() => {
        sendComment()
    }, [comment])

    const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDQ4NDQ3NjcsImV4cCI6MTY0NjA1NDM2N30.CQYFhS63KiJkhKeofDb51p2dfzSam4dCH8rml61wZKE'
                }
            })
            if (response.ok) {
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }


    return (
        <div>
            <Form onSubmit={this.sendComment}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment.comment}
                        onChange={e => setComment({
                            ...comment,
                            comment: e.target.value
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={comment.rate}
                        onChange={e => setComment({
                            ...comment,
                            rate: e.target.value
                        })}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default AddComment

// import { Component } from "react";
// import { Button, Form } from 'react-bootstrap'

// class AddComment extends Component {

//     state = {
//         comment: {
//             comment: '',
//             rate: 1,
//             elementId: this.props.asin
//         }
//     }

//     sendComment = async (e) => {
//         e.preventDefault()
//         try {
//             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
//                 method: 'POST',
//                 body: JSON.stringify(this.state.comment),
//                 headers: {
//                     'Content-type': 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDQ4NDQ3NjcsImV4cCI6MTY0NjA1NDM2N30.CQYFhS63KiJkhKeofDb51p2dfzSam4dCH8rml61wZKE'
//                 }
//             })
//             if (response.ok) {
//                 // the comment has been sent succesfully!!
//                 alert('Comment was sent!')
//             } else {
//                 console.log('error')
//                 alert('something went wrong')
//             }
//         } catch (error) {
//             console.log('error')
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.sendComment}>
//                     <Form.Group>
//                         <Form.Label>Comment text</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Add comment here"
//                             value={this.state.comment.comment}
//                             onChange={e => this.setState({
//                                 comment: {
//                                     ...this.state.comment,
//                                     comment: e.target.value
//                                 }
//                             })}
//                         />
//                     </Form.Group>
//                     <Form.Group>
//                         <Form.Label>Rating</Form.Label>
//                         <Form.Control as="select" value={this.state.comment.rate}
//                             onChange={e => this.setState({
//                                 comment: {
//                                     ...this.state.comment,
//                                     rate: e.target.value
//                                 }
//                             })}>
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                         </Form.Control>
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </div>
//         )
//     }
// }

// export default AddComment