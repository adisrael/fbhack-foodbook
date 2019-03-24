import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import SquareGrid from './Square/SquareGrid'

export default class SearchContent extends Component {
  render() {
    return (
      <div style={{marginBottom:'65px'}}>
        <Button style={{width:'100%'}} onClick={()=>{this.props.suggestionHandler(5)}}>Find by Ingredients</Button>
        <SquareGrid search={true} title="Cuisine" cells={['Peruvian','Italian', 'Japanese','French']}/>
        <SquareGrid search={true} title="Type" cells={['Desert','Lunch','Breakfast','Snack']}/>
        <SquareGrid search={true} title="Other" cells={['Desert','Lunch','Breakfast','Snack']}/>
      </div>
    )
  }
}
