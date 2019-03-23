import React, { Component } from 'react';
import userData from '../data/users.js'

class Profile extends Component {
  constructor() {
        super()
        this.state = {
            users: userData
        }
        // this.handleChange = this.handleChange.bind(this)
    }
  render() {
    const userArray = this.state.users.map(user => <User key={user.id} user={user}/>)

    return (
      <div>
          {userArray}
      </div>
    );
  }
}

function User(props) {
  const styles = {
    text_align: 'center'
  }
  const image_style = {
    width: '50%',
    height: 'auto'
  }
  return (
    <div class="container">
      <br></br>
      <h1 style={styles}>{props.user.username}</h1>
      <img src={props.user.image} alt="image" style={image_style}/>
      <div className="stats">
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
        <p>{props.user.tags}</p>
      </div>
      <div className="description">
        <p>{props.user.description}</p>
      </div>
      <div className="playlists">
        <h2>Playlists</h2>
      </div>
      <div className="recipes">
        <h2>Recipes</h2>
      </div>
    </div>
  )
}

export default Profile;
