import { createStore } from 'redux'
import { recipes } from './reducers'
import stateData from '../../data/initialState'

const store = createStore(
    recipes,
    stateData
)

export default store