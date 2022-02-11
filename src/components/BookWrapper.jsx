import { Component } from 'react'
import { InputGroup, FormControl, Container, Row } from 'react-bootstrap'

import Book from './Book'
import books from '../data/horror.json'

export default class BookWrapper extends Component {
  state = {
    bookTitle: '',
  }


  handleChange = value => {
    this.setState({ bookTitle: value })
  }

  render() {
    return (
      <Container>
        <>
          <InputGroup size="sm" className="mb-3">
            <FormControl
              onChange={e => this.handleChange(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </>
        <Row>
          {books
            .filter(book =>
              book.title
                .toLowerCase()
                .includes(this.state.bookTitle.toLowerCase())
            )
            .map(book => {
              return <Book book={book} key={book.asin} />
            })}

        </Row>
      </Container>
    )
  }
}
