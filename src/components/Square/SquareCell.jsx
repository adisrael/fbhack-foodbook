import React, { Component } from 'react'

export default class SquareCell extends Component {
    constructor(props){
        super(props)
        this.hoverHandler = this.hoverHandler.bind(this)
    }

    hoverHandler(event){
        console.log(event)
    }

  render() {

    var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';

    let cell_style = {
        borderRadius: '5px',
        backgroundColor: cssHSL,
        padding: '15px 0 25px 15px'

    }
    return (
      <div style={cell_style} onPointerEnter={this.hoverHandler}>
        <p>Title</p>
      </div>
    )
  }
}
