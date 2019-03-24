import React, { Component } from 'react'
import Ratings from 'react-ratings-declarative';
import recipeData from '../data/recipes.js'
import ItemList from './Lists/ItemList';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player'

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
  height: '150px'
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
        recipe: recipeData[props.recipe_id],
        buttonState: 'light',
        buttonMessage: 'Add To PlayList',
        cartButtonState: 'light',
        cartButtonMessage: 'Get Ingredients'
    }
    this.sendCart = this.sendCart.bind(this)
  }

  buttonAddRecipe(buttonState, buttonMessage){
    this.setState({buttonState,buttonMessage})
  }

  buttonGetIngredients(cartButtonMessage){
    this.setState({cartButtonMessage})
  }

  sendCart() {
    let cart = this.state.recipe.quantities
    this.props.cartHandler(cart)
    this.props.menuClickHandler(7)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1 style={titleStyle}>{this.state.recipe.name}</h1>
        <img src={this.state.recipe.image} style={imageStyle}/>
        <p style={pStyle}>{this.state.recipe.descriptions}</p>
        <hr/>
        <ItemList parrafo={this.state.recipe.quantities} title='Ingredients'/>
        <hr/>
        <ItemList parrafo={this.state.recipe.preparation} title='Preparation'/>
        <hr/>
        <ItemList parrafo={[<ReactPlayer url='https://www.youtube.com/watch?v=oFyYs9gs9uw' playing width='100%' playsinline='true'/>]} title='Video'/>
        <hr/>
        <Button style={buttonStyle} variant={this.state.buttonState} onClick={()=>{this.buttonAddRecipe('success','Done!')}}>{this.state.buttonMessage}</Button>
        <hr/>
        <Button style={buttonStyle} variant={this.state.cartButtonState} onClick={this.sendCart}>{this.state.cartButtonMessage}</Button>
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
