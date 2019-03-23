import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SquareCell from './SquareCell'

export default class SquareGrid extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <h5>{this.props.title}</h5>
            <Row>
                <Col style={{padding: '5px 5px 5px 10px'}} xs={6}><SquareCell color="red" title={this.props.cells[0]}/></Col>
                <Col style={{padding: '5px 10px 5px 5px'}} xs={6}><SquareCell color="blue" title={this.props.cells[1]} /></Col>
            </Row>
            <Row>
                <Col style={{padding: '5px 5px 5px 10px'}} xs={6}><SquareCell color="yellow" title={this.props.cells[2]}/></Col>
                <Col style={{padding: '5px 10px 5px 5px'}} xs={6}><SquareCell color="green" title={this.props.cells[3]}/></Col>
            </Row>
      </div>
    )
  }
}
