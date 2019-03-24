import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'
import Menu from './components/Menu.jsx'
import Suggestion from './components/Suggestion.jsx';
import Results from './components/Results.jsx';


class Logic extends Component {
    constructor(props){
        super(props)
        this.state = {index: 3, ingredients: [], recipe:null}
        this.menuClickHandler = this.menuClickHandler.bind(this)
        this.ingredientsHandler = this.ingredientsHandler.bind(this)
        this.recipeHandler = this.recipeHandler.bind(this)
    }

    menuClickHandler(index){
        this.setState({index})
    }
    ingredientsHandler(ingredients){
        this.setState({ingredients})
    }
    recipeHandler(recipe){
        this.setState({recipe})
    }

  render() {

    let element
    if (this.state.index === 0){
        element = <Home menuClickHandler={this.menuClickHandler} recipeHandler={this.recipeHandler}/>
    }
    else if (this.state.index === 1){
        element = <Profile menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 2){
        element = <Search suggestionHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 3){
        element = <Playlist menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 4){
        element = <Recipe recipe={this.state.recipe} />
    }
    else if (this.state.index === 5){
        element = <Suggestion menuClickHandler={this.menuClickHandler} ingredientsHandler={this.ingredientsHandler}/>
    }
    else if (this.state.index === 6){
        element = <Results ingredients={this.state.ingredients} menuClickHandler={this.menuClickHandler}/>
    }
    return (
        <div>
            <Menu clickHandler={this.menuClickHandler}/>
            {element}
            <div style={{marginBottom:'65px'}}></div>
        </div>
    );
  }
}

export default Logic;
