import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'

export default class Menu extends Component {
  render() {
    const link_style = {color:'white',width:'33%',textAlign:'center'}
    const link_styleTwo = {color:'black',textAlign:'center'}
    
    return (
      <div>
        <Navbar style={{backgroundColor: 'black'}} fixed="bottom">
            <Nav.Link href="#home" style={link_style} onClick={() => {this.props.clickHandler(0)}}>Home</Nav.Link>
            <Nav.Link href="#profile" style={link_style} onClick={() => {this.props.clickHandler(1)}}>Profile</Nav.Link>
            <Nav.Link href="#search" style={link_style} onClick={() => {this.props.clickHandler(2)}}>Search</Nav.Link>
            <Nav.Link href="#create" style={link_style}>
            <ButtonToolbar>
              {['top'].map(placement => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover
                      id={`popover-positioned-${placement}`}
                      title={'Add'}
                    >
                    <Nav.Link href="#addRecipe" style={link_styleTwo} onClick={() => {this.props.clickHandler(8)}}>Create recipe</Nav.Link>
                    <hr/>
                    <Nav.Link href="#addList" style={link_styleTwo} onClick={() => {this.props.clickHandler(9)}}>Create list</Nav.Link>
                    </Popover>
                  }
                >
                  <Button variant="success">+</Button>
                </OverlayTrigger>
              ))}
            </ButtonToolbar>
            </Nav.Link>
        </Navbar>
      </div>
    )
  }
}
