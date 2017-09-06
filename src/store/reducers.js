import C from '../constants'

export const recipe = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_RECIPE:
            return {
                id: action.id,
                name: action.name,
                ingredients: action.ingredients
            }
        default:
            return state
    }
}

export const recipes = (state=[], action) => {
    switch (action.type) {
        case C.ADD_RECIPE:
            return [
                ...state,
                recipe({}, action)
            ]
        default:
        return state
    }
}