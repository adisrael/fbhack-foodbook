import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'
import Menu from './components/Menu.jsx'
import Suggestion from './components/Suggestion.jsx';
import Cart from './components/Cart.jsx'
import AddRecipe from './components/AddRecipe.jsx'
import AddList from './components/AddList.jsx'
import Results from './components/Results.jsx';
import Welcome from './components/Welcome.jsx';

class Logic extends Component {
    constructor(props){
        super(props)
        this.state = {index: 10, ingredients: [], cart: [], recipe_id:null}
        this.menuClickHandler = this.menuClickHandler.bind(this)
        this.ingredientsHandler = this.ingredientsHandler.bind(this)
        this.cartHandler = this.cartHandler.bind(this)
        this.recipeHandler = this.recipeHandler.bind(this)

    }

    menuClickHandler(index){
        this.setState({index})
    }
    ingredientsHandler(ingredients){
        this.setState({ingredients})
    }
    recipeHandler(recipe_id){
        this.setState({recipe_id})
    }

    cartHandler(cart){
      this.setState({cart})
    }

  render() {

    let element
    if (this.state.index === 0){
        element = <Home menuClickHandler={this.menuClickHandler} recipeHandler={this.recipeHandler}/>
    }
    else if (this.state.index === 1){
        element = <Profile recipeHandler={this.recipeHandler} menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 2){
        element = <Search suggestionHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 3){
        element = <Playlist recipeHandler={this.recipeHandler} menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 4){

        element = <Recipe recipe_id={this.state.recipe_id} menuClickHandler={this.menuClickHandler} cartHandler={this.cartHandler}/>

    }
    else if (this.state.index === 5){
        element = <Suggestion menuClickHandler={this.menuClickHandler} ingredientsHandler={this.ingredientsHandler}/>
    }
    else if (this.state.index === 6){
        element = <Results recipeHandler={this.recipeHandler} ingredients={this.state.ingredients} menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 8){
        element = <AddRecipe menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 9){
        element = <AddList menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 7){
        element = <Cart cart={this.state.cart}/>
    }
    else if (this.state.index === 10){
        element = <Welcome menuClickHandler={this.menuClickHandler}/>
    }
    return (
        <div>
            {this.state.index != 10?<Menu clickHandler={this.menuClickHandler}/>:null}
            
            {element}
            <div style={{marginBottom:'65px'}}></div>
        </div>
    );
  }
}

export default Logic;
