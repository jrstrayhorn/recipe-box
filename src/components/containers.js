import { connect } from 'react-redux'
import RecipeList from './ui/RecipeList'

export const Recipes = connect(
    state => {
        console.log(state);
        //debugger;
        return ({
        recipes: [...state]
    })},
    null
)(RecipeList)