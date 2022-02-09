import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import MyBadge from './MyBadge'
import './Book.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Book extends Component {

  state = {
    selected: false,
  }

  handleClick = () => { this.setState({ selected: !this.state.selected }) }


  render() {
    return (
      <Col
        xs={12}
        md={3}
        className="m-1 p-1 card-container"
      >
        <div className="card bg-dark" onClick={this.handleClick}>

          <MyBadge branding="Delete Book" color="dark" className="badge" />
          <img
            className="d-block img-fluid img"
            src={this.props.bookData.img}
            alt={this.props.bookData.title}
          />
          <h4 className="bg-dark text-light">{this.props.bookData.title}</h4>
        </div>
      </Col>
    )
  }
}
