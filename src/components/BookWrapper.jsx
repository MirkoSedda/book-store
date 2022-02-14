import { Component } from 'react'
import Book from './Book'
import CommentArea from './CommentArea'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookWrapper extends Component {

  state = {
    searchQuery: '',
    bookAsin: undefined,
  }

  changeState = (value) => {
    this.setState({ ...this.state, bookAsin: value })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col xs={9}>
            {
              this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
                <Col xs={12} key={book.asin} >
                  <Book book={book} changeState={this.changeState} />
                </Col>
              ))
            }
          </Col>
          <Col xs={3}>
            <CommentArea asin={this.state.bookAsin} />
          </Col>
        </Row>
      </Container>
    )
  }

}

export default BookWrapper