import { Col } from 'react-bootstrap'
import MyBadge from './MyBadge'
import './Book.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Book = ({ bookData }) => {
  return (<Col xs={12} md={3} className="m-1 p-1">
    <div className="position-relative">
    <MyBadge branding='Delete Book' color='dark' className="position-absolute"/>
    <img
      className="d-block img-fluid img"
      src={bookData.img}
      alt={bookData.title}
      />
      <h4 className='text-light'>{bookData.title}</h4>
      </div>
  </Col>)
}

export default Book
