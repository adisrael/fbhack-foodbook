import React, { Component } from 'react'

const input = {
    border: 'solid gray',
    borderRadius: '5px'
}

const inline = {
    display: "inline"
}
export default class SearchBar extends Component {
  render() {
    return (
        <div style={{padding: '20px'}}>
            <div style={inline}>
            <form action="" style={inline}>
                <input type="text" style={input}/>
                <input type="button" value="Filter"/>
            </form>
            </div>
        </div>
    )
  }
}
