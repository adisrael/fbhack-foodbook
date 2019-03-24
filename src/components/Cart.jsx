import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import cartBlack from "./../assets/shopping-cart-b.png"
import ingredientsData from "./../data/ingredients.js"

class Cart extends Component {
  constructor(props) {
    super(props)
  }

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
    const item_style = {
      fontSize: '1em',
      marginLeft: '10%',
    }
    const items = this.props.cart.map(item => <p style={item_style}>{item}</p>)
    return (
        <div>
          <br></br>
          <Row>
            <h1 style={title_style}>MyCart</h1>
            <img src={cartBlack} alt="image" style={image_style}/>
          </Row>
          <br></br>
          {items}
        </div>
    );
  }
}

export default Cart
