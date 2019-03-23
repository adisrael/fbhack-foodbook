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
                <Col style={{padding: '5px 5px 5px 10px'}} xs={6}><SquareCell color="red"/></Col>
                <Col style={{padding: '5px 10px 5px 5px'}} xs={6}><SquareCell color="blue"/></Col>
            </Row>
            <Row>
                <Col style={{padding: '5px 5px 5px 10px'}} xs={6}><SquareCell color="yellow"/></Col>
                <Col style={{padding: '5px 10px 5px 5px'}} xs={6}><SquareCell color="green"/></Col>
            </Row>
      </div>
    )
  }
}
