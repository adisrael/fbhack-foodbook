import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SquareCell from './SquareCell'

export default class SquareGrid extends Component {

  render() {
    let rows = []
    let cols = this.props.cells.map((element, index) => {
      let padding = index % 2 === 0 ? '5px 5px 5px 10px': '5px 10px 5px 5px'
      return <Col key={index} style={{padding}} xs={6}><SquareCell title={this.props.cells[index]} clickHandler={this.props.clickHandler}/></Col>
    });
    for (let index = 0; index < cols.length; index = index+2) {
      let col1 = cols[index];
      let col2 = null
      if (index + 1 < cols.length){
        col2 = cols[index + 1];
      }
      rows.push(
        <Row key={index}>
          {col1}
          {col2}
        </Row>
      )
      
    }
    return (
        <div style={{marginTop: '30px'}}>

            <h5>{this.props.title}</h5>
            {!this.props.default && <Button onClick={this.props.backHandler}>Back</Button>}
            {rows}
      </div>
    )
  }
}

