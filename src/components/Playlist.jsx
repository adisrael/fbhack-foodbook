import React, { Component } from 'react'
import playlistData from '../data/playlists.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Playlist extends Component {
  constructor(props) {
        super(props)
        this.state = {
            playlists: playlistData,
            follow: false,
        }
        this.handleFollow = this.handleFollow.bind(this)
    }

  handleFollow(event){
    this.setState((prevState, props) => ({follow: !prevState.follow}))
  }

  render() {
    let playlist_id = 0
    const recipeList = this.state.playlists[playlist_id]

    const tag_style = {
      textAlign: 'center',
      fontWeight: 'normal',
      color: '#AAA',
      marginLeft: '5%',
    }
    const title_style = {
      textAlign: 'center',
      fontSize: '1.5em',
    }
    const image_style = {
      width: '50%',
      maxWidth: '50%',
      height: 'auto',
      left: '25%',
      borderRadius: '10%',
      position: 'relative',
    }
    const list_text = {
      marginTop: '2%',
      fontWeight: 'normal',
      color: '#888',
      fontSize: '0.8em',
      textAlign: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
    }
    const button_style = {
      marginTop: '2%',
      textAlign: 'center',
    }
    const button_size = {
      width: '100%'
    }

    const tags = recipeList.tags.map(tag => <p style={tag_style}>{tag}</p>)

    return (
      <div>
        <br></br>
        <h1 style={title_style}>{recipeList.name}</h1>
        <img src={recipeList.image} alt="image" style={image_style}/>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4} style={button_style}>
            <Button style={button_size} variant={this.state.follow? "outline-secondary": "outline-success"} onClick={this.handleFollow}>{this.state.follow? 'Unfollow': 'Follow'}</Button>
          </Col>
          <Col xs={4}></Col>
        </Row>
        <p style={list_text}>by {recipeList.owner}</p>
        <p style={list_text}>{recipeList.description}</p>
        <br></br>
        <RecipeList recipeList={recipeList} menuClickHandler={this.props.menuClickHandler}/>
      </div>
    );
  }
}

class RecipeList extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
  }
  render() {
    const recipes = this.props.recipeList.recipes.map(recipe => <ShortRecipe key={recipe.id} recipe={recipe} menuClickHandler={this.props.menuClickHandler}/>)

    return (
      <div>
        {recipes}
      </div>
    );
  }
}

function ShortRecipe(props) {
  const image_style = {
    width: '100%',
    height: '80px',
    borderRadius: '10%',
    position: 'relative',
    marginTop: '5%',
    verticalAlign: 'center',
    maxHeight: '100px',
    maxWidth: '100px'
  }
  const recipe_text = {
    marginLeft: 0,
    fontWeight: 'normal',
    color: '#888',
    fontSize: '0.7em',
    marginTop: 0,
    lineHeight: '1em'
  }
  const recipe_title = {
    fontWeight: 'bold',
    fontSize: '1em',
    color: 'black',
    marginBottom: '5%',
    textAlign: 'left',
    lineHeight: '1em'
  }
  const time_style = {
    textAlign: 'end',
    color: '#1DB954',
    fontSize: '0.8em',
    marginRight: '10%',
    marginBottom: '5%'
  }
  const recipe_style = {
    marginTop: '0.25em',
    textAlign: 'justify',
    lineHeight: '0.5em',
  }
  const recipe_first = {
    display: 'inline-block'
  }
  return (
    <Container onClick={()=>{props.menuClickHandler(4)}}>
      <Row>
        <Col xs={4}>
          <img src={props.recipe.image} alt="image" style={image_style}/>
        </Col>
        <Col xs={8}>
          <div style={recipe_style}>
            <Row>
              <Col xs={8}>
                <p style={recipe_title}>{props.recipe.name}</p>
              </Col>
              <Col xs={4}>
                <p style={time_style}>{props.recipe.time}</p>
              </Col>

            </Row>
            <p style={recipe_text}>{props.recipe.description}</p>
          </div>
        </Col>
      </Row>
      <br></br>
    </Container>
  )
}
