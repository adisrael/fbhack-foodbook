import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Menu extends Component {
  render() {
    
    return (
      <div>
        <Navbar style={{backgroundColor: 'black'}} fixed="bottom">
            <Nav.Link href="#home" style={{color:'white',width:'33%',textAlign:'center'}}>Home</Nav.Link>
            <Nav.Link href="#search" style={{color:'white',width:'33%',textAlign:'center'}}>Search</Nav.Link>
            <Nav.Link href="#profile" style={{color:'white',width:'33%',textAlign:'center'}}>Profile</Nav.Link>
        </Navbar>
      </div>
    )
  }
}
