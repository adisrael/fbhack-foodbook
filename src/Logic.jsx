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
        this.state = {index: 3, ingredients: []}
        this.menuClickHandler = this.menuClickHandler.bind(this)
        this.ingredientsHandler = this.ingredientsHandler.bind(this)
    }

    menuClickHandler(index){
        this.setState({index})
    }
    ingredientsHandler(ingredients){
        this.setState({ingredients})
    }

  render() {

    let element
    if (this.state.index === 0){
        element = <Home menuClickHandler={this.menuClickHandler}/>
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
        element = <Recipe/>
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
