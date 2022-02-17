import { useState } from 'react'
import Book from './Book'
import CommentArea from './CommentArea'
import horrorBooks from '../data/horror.json'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [bookAsin, setBookAsin] = useState(undefined)

  const changeState = (value) => {
    setBookAsin(value)
  }
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail" className="m-5">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="d-flex flex-wrap">
          {
            horrorBooks.filter(book => book.title.toLowerCase().includes(searchQuery)).map(book => (
              <div key={book.asin} >
                <Book book={book} changeState={changeState}></Book>
              </div>
            ))
          }
        </Col>
        <Col xs={2}>
          <CommentArea asin={bookAsin} />
        </Col>
      </Row>
    </Container>
  )

}

export default Home