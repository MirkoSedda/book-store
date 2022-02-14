import { Component } from 'react'
import CommentWrapper from './CommentWrapper'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {

    state = {
        comments: [],
        isLoading: true,
        isError: false
    }

    fetchBook = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDQ4NDQ3NjcsImV4cCI6MTY0NjA1NDM2N30.CQYFhS63KiJkhKeofDb51p2dfzSam4dCH8rml61wZKE'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                console.log(this.props.asin);
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    componentDidMount = async () => {
        this.fetchBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.fetchBook()
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin} />
                <CommentWrapper commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea