import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
  }

export default class AddRecipe extends Component {
  render() {
    return (
      <div>
          <h1 style = {titleStyle}>Create Recipe</h1>
          <Container> 
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter recipe name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Recipe List</Form.Label>
            <Form.Control as="select" >
            <option>Choose...</option>
            <option>Chilean Recipes</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Preparation</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        </Form>
        </Container>
        <Container>
        <ButtonToolbar>
            <Button variant="outline-success" size="lg" block  onClick={()=>{this.props.menuClickHandler(0)}}>Success</Button>
        </ButtonToolbar>
        </Container>
      </div>
    )
  }
}
