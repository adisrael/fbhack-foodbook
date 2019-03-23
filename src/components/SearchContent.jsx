import React, { Component } from 'react'
import SquareGrid from './Square/SquareGrid'

export default class SearchContent extends Component {
  render() {
    return (
      <div>
        <SquareGrid title="Cuisine"/>
        <SquareGrid title="Type"/>
        <SquareGrid title="Other"/>
      </div>
    )
  }
}
