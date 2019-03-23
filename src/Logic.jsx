import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'
import Playlist from './components/Playlist.jsx'
import Recipe from './components/Recipe.jsx'


class Logic extends Component {

  render() {

    let state = 0

    let element
    if (state == 0){
        element = <Home/>
    }
    else if (state == 1){
        element = <Profile/>
    }
    else if (state == 2){
        element = <Search/>
    }
    else if (state == 3){
        element = <Playlist/>
    }
    else if (state == 4){
        element = <Recipe/>
    }
    return (
        <div>
        {element}
        </div>
    );
  }
}

export default Logic;
