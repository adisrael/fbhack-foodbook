import React, { Component } from 'react'; 
import MasterList from './Lists/MasterList';

class Home extends Component {
  render() {
    return (
        <div>
           <h1>Home</h1>
           <MasterList title='Feature List' description='The best recipes lists of our platform'></MasterList>
           <MasterList title='Chefs' description='The most outstanding chefs within our platform'></MasterList>
           <MasterList title='Recently' description='Latest recipes added to our platform'></MasterList>
        </div>
    );
  }
}

export default Home;