import React, { Component } from 'react'
import playlistData from '../data/playlists.js'
import recipesData from '../data/recipes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ShortRecipe from './ShortRecipe'

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
      marginTop: '5%',
      textAlign: 'center',
    }
    const button_size = {
      width: '100%',
    }

    const tags = recipeList.tags.map(tag => <p style={tag_style}>{tag}</p>)

    return (
      <div>
        <br></br>
        <h1 style={title_style}>{recipeList.name}</h1>
        <img src={recipeList.image} alt="image" style={image_style}/>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6} style={button_style}>
            <Button style={button_size} variant={this.state.follow? "outline-secondary": "outline-success"} onClick={this.handleFollow}>{this.state.follow? 'Unfollow': 'Follow'}</Button>
          </Col>
        </Row>
        <p style={list_text}>by {recipeList.owner}</p>
        <p style={list_text}>{recipeList.description}</p>
        <br></br>
        <RecipeList recipeList={recipeList} menuClickHandler={this.props.menuClickHandler}/>
      </div>
    );
  }
}

export class RecipeList extends Component {
  constructor(props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
  }
  render() {
    const recipes = this.props.recipeList.recipes.map(recipe => <ShortRecipe key={recipe} recipe={recipesData[recipe]} menuClickHandler={this.props.menuClickHandler}/>)

    return (
      <div>
        {recipes}
      </div>
    );
  }
}

// export function ShortRecipe(props) {
  
// }
