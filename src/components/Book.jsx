import { Component } from 'react'
import { Card } from 'react-bootstrap'

class Book extends Component {

  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card
          onClick={() => this.props.changeState(this.props.book.asin)}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Book
