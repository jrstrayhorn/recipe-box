import { createStore, applyMiddleware, combineReducers } from 'redux'
import { recipes, edit } from './reducers'
import stateData from '../../data/initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['recipe-redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({recipes, edit}),
        (localStorage['recipe-redux-store']) ?
            JSON.parse(localStorage['recipe-redux-store']) :
            stateData
    )

export default storeFactory