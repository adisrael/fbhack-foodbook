import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SquareGrid from './Square/SquareGrid'
import Tag from './Tag'

export default class Suggestion extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: ['Fruits','Vegetables','Meats','Diary'],
            default:true,
            selected: {}
        }
        this.default = ['Fruits','Vegetables','Meats','Diary']
        this.subgroups = {
            Fruits: ['Banana','Apple','Pear','Watermelon','Strawberry'],
            Vegetables: ['Onion','Garlic','Tomato','Celery','Brocoli','Avocado','Lettuce'],
            Meats: ['Chicken', 'Steak','Fish','Seafood','Duck'],
            Dairy: ['Cheese', 'Milk','Cream']
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.backHandler = this.backHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)

    }
    clickHandler(category){
        if (this.subgroups[category]){
            this.setState({current: this.subgroups[category], default:false})
        }
        else{
            this.setState((prevState,props)=>{
                let selected = prevState.selected
                selected[category] = true
                return {selected}
            })
        }
    }

    backHandler(event){
        this.setState({current:this.default, default:true})
    }

    deleteHandler(category){
        this.setState((prevState,props)=>{
            let selected = prevState.selected
            selected[category] = false
            return {selected}
        })
    }

    render() {
        let selected = []
        for (const key in this.state.selected) {
            if (this.state.selected.hasOwnProperty(key)) {
                if (this.state.selected[key]){
                    selected.push(
                        <Tag deleteHandler={this.deleteHandler} title={key}/>
                    )
                }
            }
        }
        const box = {
            border: 'solid black',
            width:'100%',
            margin: '5px',
            borderRadius: '5px',
        }
        let element = (<div style={box}>
        {selected}
        </div>)
        return (
        <div>
            <Container>
            
            <h1 style={{textAlign:'center'}}>New Ideas</h1>
            <Row>
              {selected.length ? element : null}  
            </Row>
            <SquareGrid 
                default={this.state.default}
                cells={this.state.current}
                clickHandler={this.clickHandler}
                backHandler={this.backHandler}
                selectHandler={this.selectHandler}
                deleteHandler={this.deleteHandler}
            >
            </SquareGrid>
            <Button style={{width:'100%', marginTop:'50px'}} variant='success'>GO!</Button>
            </Container>
        </div>
        )
    }
}
