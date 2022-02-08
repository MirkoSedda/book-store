import { Col } from 'react-bootstrap'

const Book = ({ bookData }) => {
  return (<Col xs={12} md={3} className="m-1 p-1">
    <img
      className="d-block img-fluid img"
      src={bookData.img}
      alt={bookData.title}
    />
  </Col>)
}

export default Book
