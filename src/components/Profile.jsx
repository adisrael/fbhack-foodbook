import React, { Component } from 'react';
import userData from '../data/users.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MasterList from './Lists/MasterList';

class Profile extends Component {
  constructor(props) {
        super(props)
        this.state = {
            users: userData
        }
    }
  render() {
    let user_id = 0
    const user = this.state.users[user_id]

    return (
      <div>
          <User user={user} menuClickHandler={this.props.menuClickHandler}/>
      </div>
    );
  }
}

function User(props) {
  const background = {
    backgroundColor: 'White'
  }
  const title_style = {
    textAlign: 'center',
    fontSize: '2.5em',
  }
  const image_style = {
    width: '50%',
    maxWidth: '50%',
    height: 'auto',
    left: '25%',
    borderRadius: '50%',
    position: 'relative',
  }
  const desc_style = {
    marginTop: '0.75em',
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#555',
    fontSize: '1em',
  }
  const stats_style = {
    textAlign: 'center',
    marginTop: '0.25em',
    lineHeight: '0.1em',
  }
  const stats_text = {
    fontWeight: 'normal',
    color: '#888',
    fontSize: '0.8em'
  }
  const stats_val = {
    fontWeight: 'bold',
    color: 'black'
  }
  return (
    <Container style={background}>
      <br></br>
      <h1 style={title_style}>{props.user.username}</h1>
      <img src={props.user.image} alt="image" style={image_style}/>
      <br></br>
      <div style={desc_style}>
        <p>{props.user.description}</p>
      </div>
      <Row >
        <Col xs={4}>
          <div style={stats_style}>
            <p style={stats_val}>{props.user.playlists.length}</p>
            <p style={stats_text}>Playlists</p>
          </div>
        </Col>
        <Col xs={4}>
          <div style={stats_style}>
            <p style={stats_val}>{props.user.followers}</p>
            <p style={stats_text}>Followers</p>
          </div>
        </Col>
        <Col xs={4}>
          <div style={stats_style}>
            <p style={stats_val}>{props.user.following}</p>
            <p style={stats_text}>Following</p>
          </div>
        </Col>
      </Row>

      <Row>
        <p>{props.user.tags}</p>
      </Row>
      <div className="playlist">
      <MasterList menuClickHandler={props.menuClickHandler} title='Playlist' description='Des' sheet='https://sheetsu.com/apis/v1.0su/a2c91bdcd0ff'/>
      </div>
      <div className="recipes">
      <MasterList  menuClickHandler={props.menuClickHandler} title='Recipes' description='Des' sheet='https://sheetsu.com/apis/v1.0bu/10d3cccdda38'/>
      </div>
  
    </Container>
  )
}

export default Profile;
