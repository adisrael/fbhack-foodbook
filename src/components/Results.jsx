import React, { Component } from 'react'
import recipesData from '../data/recipes.js'
import ShortRecipe from './ShortRecipe'

export default class Results extends Component {
    constructor(props){
        super(props)
        this.recipes = recipesData.filter(recipe =>{
            return props.ingredients.every(val => (recipe.ingredients.includes(val)));
        })

    }


    render() {
        let recipes = this.recipes.map(recipe =>{
            return <ShortRecipe recipeHandler={this.props.recipeHandler} recipe={recipe} menuClickHandler={this.props.menuClickHandler} />
        })
        return (
        <div>
            <h3>Results</h3>
            {recipes} 
        </div>
        )
    }
}


