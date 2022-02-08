import { Container, Row } from 'react-bootstrap'
import Book from './Book'
 
import books from '../data/horror.json'


const BookWrapper = () => {
        return      (<Container>
                        <Row>
                           {books.map((book) => { return <Book bookData={book} key={book.asin} /> })}
                        </Row>
                    </Container>)
}

export default BookWrapper








