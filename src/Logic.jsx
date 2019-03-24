import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'
import Menu from './components/Menu.jsx'
import Suggestion from './components/Suggestion.jsx'
import AddRecipe from './components/AddRecipe.jsx'
import AddList from './components/AddList.jsx'


class Logic extends Component {
    constructor(props){
        super(props)
        this.state = {index: 3}
        this.menuClickHandler = this.menuClickHandler.bind(this)
    }

    menuClickHandler(index){
        this.setState({index})
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
        element = <Suggestion/>
    }
    else if (this.state.index === 6){
        element = <AddRecipe menuClickHandler={this.menuClickHandler}/>
    }
    else if (this.state.index === 7){
        element = <AddList menuClickHandler={this.menuClickHandler}/>
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
