//import { useState } from 'react'
import { Card } from 'react-bootstrap'
import './Book.css'

const Book = ({ book, changeState }) => {

  //const [selected, setSelected] = useState(false)



  return (
    <>
      <Card
        onClick={() => changeState(book.asin)}
        //style={{ border: selected ? '3px solid red' : 'none' }}
        className="m-1">

        <Card.Img variant="top" src={book.img} className="img" />
        <Card.Body>
          <Card.Text className="truncate" style={{ color: 'black' }}>{book.title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}


export default Book

// import { Component } from 'react'
// import { Card } from 'react-bootstrap'

// class Book extends Component {

//   state = {
//     selected: false,
//   }

//   render() {
//     return (
//       <>
//         <Card
//           onClick={() => this.props.changeState(this.props.book.asin)}
//           style={{ border: this.state.selected ? '3px solid red' : 'none' }}
//         >
//           <Card.Img variant="top" src={this.props.book.img} />
//           <Card.Body>
//             <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
//           </Card.Body>
//         </Card>
//       </>
//     )
//   }
// }

// export default Book
