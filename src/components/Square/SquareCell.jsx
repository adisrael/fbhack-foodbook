import React, { Component } from 'react'

export default class SquareCell extends Component {
    constructor(props){
        super(props)
        this.color = "hsl(" + 330 * Math.random() + ',' +
        (45 + 70 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%)';
    }

  render() {


    let cell_style = {
        borderRadius: '5px',
        backgroundColor: this.color,
        padding: '15px 0 25px 15px'

    }
    return (
      <div style={cell_style} onClick={()=> this.props.search||this.props.clickHandler(this.props.title)} >
        <p>{this.props.title}</p>
      </div>
    )
  }
}
