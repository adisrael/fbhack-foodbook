import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            filterVisible: false,
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.visibleHandler = this.visibleHandler.bind(this)

    }

    changeHandler(event){
        this.setState({input: event.target.value})
    }

    visibleHandler(event){
        this.setState((prevState, props) => ({filterVisible: !prevState.filterVisible}))
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Col xs={9}><Form.Control type="text" style={{marginTop: '1%'}} onChange={this.changeHandler}/></Col>
                        <Col xs={1}><Button onClick={this.visibleHandler} style={{marginTop: 0}}>Filter</Button></Col>
                    </Form.Row>

                    <Form.Row style={{marginTop: "10px"}}>
        {this.state.filterVisible && <Col xs={9}><Form.Control type="text" onChange={this.changeHandler}/></Col> }
                    </Form.Row>
                </Form>
            </div>
        )
    }
}
