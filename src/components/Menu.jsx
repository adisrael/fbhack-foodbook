import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Menu extends Component {
  render() {
    const link_style = {color:'white',width:'33%',textAlign:'center'}

    const icon = {
      background: "./../assets/shopping-cart.png",
      height: '20px',
      width: '20px',
      display: 'block',
    }

    return (
      <div>
        <Navbar style={{backgroundColor: 'black'}} fixed="bottom">
            <Nav.Link href="#home" style={link_style} onClick={() => {this.props.clickHandler(0)}}>Home</Nav.Link>
            <Nav.Link href="#profile" style={link_style} onClick={() => {this.props.clickHandler(1)}}>Profile</Nav.Link>
            <Nav.Link href="#search" style={link_style} onClick={() => {this.props.clickHandler(2)}}>Search</Nav.Link>
            <Nav.Link href="#cart" style={link_style} onClick={() => {this.props.clickHandler(6)}}>MyCart</Nav.Link>
        </Navbar>
      </div>
    )
  }
}
