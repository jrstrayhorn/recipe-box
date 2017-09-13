import { connect } from 'react-redux'
import RecipeList from './ui/RecipeList'
import AddRecipeForm from './ui/AddRecipeForm'
import { addRecipe, removeRecipe } from '../actions'

export const NewRecipe = connect(
    null,
    dispatch => ({
        onNewRecipe(name, ingredients) {
            dispatch(addRecipe(name, ingredients))
        }
    })
)(AddRecipeForm)

export const Recipes = connect(
    state => ({
        recipes: [...state]
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(removeRecipe(id))
        }
    })
)(RecipeList)