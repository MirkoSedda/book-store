import { ListGroup } from 'react-bootstrap'
import Comment from './Comment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <Comment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList