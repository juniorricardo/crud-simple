import {combineReducers} from 'redux'

import counterReducer from './../reducers/counterReducer'
import listReducer from './../reducers/listReducer'

export default combineReducers({
  counter: counterReducer,
  todos: listReducer
})