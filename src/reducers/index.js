import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer from './counter'

let rootReducer = combineReducers({
    counter: counterReducer,
    router: routerReducer,
})

export default rootReducer
