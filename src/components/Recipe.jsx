import React, { Component } from 'react'
import Ratings from 'react-ratings-declarative';
import recipeData from '../data/recipes.js'
import ItemList from './Lists/ItemList';
import Button from 'react-bootstrap/Button';


const titleStyle = {
  textAlign: 'center'
}

const imageStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  height: '250px'
}

const pStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  margin: '30px',
  textAlign: 'Justify'
}

const divSytle = {
  marginLeft: '10%',
}

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
}

export default class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
        recipe: recipeData[0],
        buttonState: 'light',
        buttonMessage: 'Add To PlayList'
    }
  }

  buttonAddRecipe(buttonState, buttonMessage){
    this.setState({buttonState,buttonMessage})
  }

  render() {
    return (
      <div>
        <h1 style={titleStyle}>{this.state.recipe.name}</h1>
        <img src={this.state.recipe.image} style={imageStyle}/>
        <p style={pStyle}>{this.state.recipe.descriptions}</p>
        <hr/>
        <ItemList parrafo={this.state.recipe.ingredients} title='Ingredients'/>
        <hr/>
        <ItemList parrafo={this.state.recipe.preparation} title='Preparation'/>
        <hr/>
        <Button style={buttonStyle} variant={this.state.buttonState} onClick={()=>{this.buttonAddRecipe('success','Done!')}}>{this.state.buttonMessage}</Button>
        <hr/>
        <Foo/>
      </div>
    )
  }
}

class Foo extends Component {
  constructor(props) {
    super(props)
      this.state = { rating: 0 }
  }

  changeRating =( newRating ) => {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <div style={divSytle}>
        <Ratings
          rating={this.state.rating}
          widgetRatedColors="yellow"
          changeRating={this.changeRating}
        >
          <Ratings.Widget widgetHoverColor="yellow" />
          <Ratings.Widget widgetHoverColor="yellow" />
          <Ratings.Widget widgetHoverColor="yellow" />
          <Ratings.Widget widgetHoverColor="yellow" />
          <Ratings.Widget widgetHoverColor="yellow" />
      </Ratings></div>
    );
  }
}
