import { Container, Row, Col } from 'react-bootstrap'
import Book from './Book'
import './LatestRelease.css' 
import books from '../data/horror.json'



const LatestRelease = () => {
        return      (<Container>
                        <Row>
                      {books.map((book) => { return <Book bookData={book} key={book.asin} /> })}
                        </Row>
                    </Container>)
}

export default LatestRelease








