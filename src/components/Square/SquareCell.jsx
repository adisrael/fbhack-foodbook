import React, { Component } from 'react'

export default class SquareCell extends Component {
    constructor(props){
        super(props)
    }

  render() {

    var cssHSL = "hsl(" + 330 * Math.random() + ',' +
                 (45 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';

    let cell_style = {
        borderRadius: '5px',
        backgroundColor: cssHSL,
        padding: '15px 0 25px 15px'

    }
    return (
      <div style={cell_style} onClick={()=> this.props.clickHandler(this.props.title)} >
        <p>{this.props.title}</p>
      </div>
    )
  }
}
