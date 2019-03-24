import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import cartBlack from "./../assets/shopping-cart-b.png"

class Cart extends Component {

  render() {
    const title_style = {
      fontSize: '1.5em',
      marginLeft: '10%',
    }
    const image_style = {
      width: '10%',
      maxWidth: '20px',
      height: '10%',
      marginTop: '1%',
      left: '2%',
      position: 'relative',
    }
    return (
        <div>
          <br></br>
          <Row>
            <h1 style={title_style}>MyCart</h1>
            <img src={cartBlack} alt="image" style={image_style}/>
          </Row>
        </div>
    );
  }
}

export default Cart;
