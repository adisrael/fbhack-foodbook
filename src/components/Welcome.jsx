import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const card = {
    position: 'relative',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

export default class Welcome extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <div style={{backgroundColor: "#87ceeb"}}> 
        <MDBCol style={card}>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardBody> 
              <MDBCardTitle>Welcome to FoodBook</MDBCardTitle>
              <MDBBtn onClick={() => {this.props.menuClickHandler(0)}}>Enter</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </div>
      )
  }
}
