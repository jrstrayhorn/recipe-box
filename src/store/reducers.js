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
        case C.REMOVE_RECIPE:
            return state.filter(
                r => r.id !== action.id
            )
        default:
        return state
    }
}

export const edit = (state="", action) => {
    switch (action.type) {
        case C.SET_EDIT:
            return action.id
        default:
            return state
    }
}