import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'
import Menu from './components/Menu.jsx'


class Logic extends Component {
    constructor(props){
        super(props)
        this.state = {index: 2}
        this.menuClickHandler = this.menuClickHandler.bind(this)
    }

    menuClickHandler(index){
        this.setState({index})
    }

  render() {

    let element
    if (this.state.index === 0){
        element = <Home/>
    }
    else if (this.state.index === 1){
        element = <Profile/>
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
