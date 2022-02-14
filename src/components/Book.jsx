import React from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class Book extends React.Component {

  state = {
    selected: false
  }

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {
          this.state.selected && <CommentArea asin={this.props.book.asin} />
        }
      </>
    )
  }
}

export default Book
