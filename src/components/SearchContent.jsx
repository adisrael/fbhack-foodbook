import React, { Component } from 'react'
import SquareGrid from './Square/SquareGrid'

export default class SearchContent extends Component {
  render() {
    return (
      <div>
        <SquareGrid title="Cuisine" cells={['Peruvian','Italian', 'Japanese','French']}/>
        <SquareGrid title="Type" cells={['Desert','Lunch','Breakfast','Snack']}/>
        <SquareGrid title="Other" cells={['Desert','Lunch','Breakfast','Snack']}/>
      </div>
    )
  }
}
