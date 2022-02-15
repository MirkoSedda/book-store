import { useState } from 'react'
import Book from './Book'
import CommentArea from './CommentArea'
import { Col, Container, Form, Row } from 'react-bootstrap'

const BookWrapper = ({ books }) => {

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
            books.filter(book => book.title.toLowerCase().includes(searchQuery)).map(book => (
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

export default BookWrapper

// class BookWrapper extends Component {

//   state = {
//     searchQuery: '',
//     bookAsin: undefined,
//   }

//   changeState = (value) => {
//     this.setState({ ...this.state, bookAsin: value })
//   }

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Search</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Search here"
//                 value={this.state.searchQuery}
//                 onChange={e => this.setState({ searchQuery: e.target.value })}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row >
//           <Col xs={9}>
//             {
//               this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
//                 <Col xs={12} key={book.asin} >
//                   <Book book={book} changeState={this.changeState} />
//                 </Col>
//               ))
//             }
//           </Col>
//           <Col xs={3}>
//             <CommentArea asin={this.state.bookAsin} />
//           </Col>
//         </Row>
//       </Container>
//     )
//   }

// }

// export default BookWrapper