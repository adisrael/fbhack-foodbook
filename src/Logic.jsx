import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'
import Menu from './components/Menu.jsx'
//import console = require('console');


class Logic extends Component {
    constructor(props){
        super(props)
        this.state = {index: 0}
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
        element = <Search/>
    }
    else if (this.state.index === 3){
        element = <Playlist/>
    }
    else if (this.state.index == 4){
        element = <Recipe/>
    }
    return (
        <div>
            <Menu clickHandler={this.menuClickHandler}/>
            {element}
        </div>
    );
  }
}

export default Logic;
