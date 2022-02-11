import { Button } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDQ1MjYwMjQsImV4cCI6MTY0NTczNTYyNH0.hvWQhj7Uh3t_BvaXMYybgCi5Z3gTDFeY4c4yAZIQab8'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <div>
        <p className="text-light">{comment.comment}</p>
        <Button variant="danger" className="" onClick={() => deleteComment(comment._id)}>X</Button>
    </div>
)

export default SingleComment