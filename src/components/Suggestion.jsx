import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import SquareGrid from './Square/SquareGrid'

export default class Suggestion extends Component {
    constructor(props){
        super(props)
        this.state = {current: ['Fruits','Vegetables','Meats','Diary'], default:true}
        this.default = ['Fruits','Vegetables','Meats','Diary']
        this.subgroups = {
            Fruits: ['Banana','Apple','Pear','Watermelon','Strawberry'],
            Vegetables: ['Onion','Garlic','Tomato','Celery','Brocoli','Avocado','Lettuce'],
            Meats: ['Chicken', 'Steak','Fish','Seafood','Duck'],
            Dairy: ['Cheese', 'Milk','Cream']
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.backHandler = this.backHandler.bind(this)
    }
    clickHandler(category){
        //console.log(category)
        if (this.subgroups[category]){
            this.setState({current: this.subgroups[category], default:false})
        }
    }

    backHandler(event){
        this.setState({current:this.default, default:true})
    }

    render() {
        return (
        <div>
            <Container>
            <h1 style={{textAlign:'center'}}>New Ideas</h1>
            <SquareGrid default={this.state.default} cells={this.state.current} clickHandler={this.clickHandler} backHandler={this.backHandler}></SquareGrid>

            </Container>
        </div>
        )
    }
}
