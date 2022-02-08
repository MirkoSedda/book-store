import { Container, Row, Col} from 'react-bootstrap'
import books from '../data/horror.json'
import './LatestRelease.css' 

const LatestRelease = () => (
    
                <Container className='container'>
                    <Row className='bg-dark justify-content-center mt-3'>
                        {books.map(book => (
                            <Col xs={12} md={3} key={book.asin} className='m-1 p-1'>
                                <img
                                className='d-block img-fluid img'
                                src={book.img}
                                alt={book.title}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
        
)

export default LatestRelease





