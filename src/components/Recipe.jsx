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
        recipe: recipeData,
        ingredientes: ['8 Boneless chicken thighs (skinless)','1/2 cup malt vinegar','1/4 cup plain yogurt','1 tbsp vegetable oil','to taste salt and pepper','1/4 tsp freshly ground cardamom','1 tsp All spice powder','1/2 cup tahini','1/4 cup plain yogurt','1/2 tsp garlic (minced)','2 tbsp lemon juice','1 tbsp olive oil','1 tbsp fresh parsley, chopped','to taste salt and pepper','4 medium tomatoes, sliced','1/2 cup onion, sliced','4 cups lettuce, shredded','8 Pita bread rounds'],
        preparation: ['1. Slice the chicken breasts into 5-6 pieces each and the thighs into 3-4 pieces each. Place them in a marinating dish or large plastic zipper bag','2. In a small bowl, whisk together 1/4 cup olive oil, the spices, 3/4 tsp salt and 1/4 tsp black pepper (if you are salt sensitive, use 1/2 tsp of salt). Pour the spice marinade over the chicken pieces. Stir with a spoon till all the chicken pieces are evenly coated in the marinade.', '3. Cover the marinating dish with plastic wrap, or close the zipper bag. Place chicken in the refrigerator and let it marinate at least 1 hour, up to overnight.'],
        buttonState: 'light',
        buttonMessage: 'Add To PlayList'
    }
  }

  buttonAddRecipe(buttonState, buttonMessage){
    this.setState({buttonState,buttonMessage})
  }

  render() {
    let recipe_id = 0
    return (
      <div>
        <h1 style={titleStyle}>{this.state.recipe[recipe_id].Nombre}</h1>
        <img src={this.state.recipe[recipe_id].Imagen} style={imageStyle}/>
        <p style={pStyle}>{this.state.recipe[recipe_id].Descripcion}</p>
        <hr/>
        <ItemList parrafo={this.state.ingredientes} title='Ingredients'/>
        <hr/>
        <ItemList parrafo={this.state.preparation} title='Preparation'/>
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
