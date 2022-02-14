import React from 'react'
import Book from './Book'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookWrapper extends React.Component {

  state = {
    searchQuery: ''
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
        <Row>
          {
            this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
              <Col xs={3} key={b.asin} >
                <Book book={b} />
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }

}

export default BookWrapper