import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ShortRecipe(props) {
    const image_style = {
        width: '100%',
        height: '80px',
        borderRadius: '10%',
        position: 'relative',
        marginTop: '5%',
        verticalAlign: 'center',
        maxHeight: '100px',
        maxWidth: '100px'
      }
      const recipe_text = {
        marginLeft: 0,
        fontWeight: 'normal',
        color: '#888',
        fontSize: '0.7em',
        marginTop: 0,
        lineHeight: '1em'
      }
      const recipe_title = {
        fontWeight: 'bold',
        fontSize: '1em',
        color: 'black',
        marginBottom: '5%',
        textAlign: 'left',
        lineHeight: '1em'
      }
      const time_style = {
        textAlign: 'end',
        color: '#1DB954',
        fontSize: '0.8em',
        marginRight: '10%',
        marginBottom: '5%'
      }
      const recipe_style = {
        marginTop: '0.25em',
        textAlign: 'justify',
        lineHeight: '0.5em',
      }
      const recipe_first = {
        display: 'inline-block'
      }
      return (
        <Container onClick={()=>{props.menuClickHandler(4)}}>
          <Row>
            <Col xs={4}>
              <img src={props.recipe.image} alt="image" style={image_style}/>
            </Col>
            <Col xs={8}>
              <div style={recipe_style}>
                <Row>
                  <Col xs={8}>
                    <p style={recipe_title}>{props.recipe.name}</p>
                  </Col>
                  <Col xs={4}>
                    <p style={time_style}>{props.recipe.time}</p>
                  </Col>
    
                </Row>
                <p style={recipe_text}>{props.recipe.description}</p>
              </div>
            </Col>
          </Row>
          <br></br>
        </Container>
      )
}
