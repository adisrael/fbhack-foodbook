import React, { Component } from 'react';
import Home from './components/Home.jsx'
import Explore from './components/Explore.jsx'
import Profile from './components/Profile.jsx'
import Search from './components/Search.jsx'


class Logic extends Component {

  render() {
    let state = 2
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
    return (
        <div>
        {element}
        </div>
    );
  }
}

export default Logic;
