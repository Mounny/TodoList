import {combineReducers} from 'redux'
import listReducer from './ListTask'

const rootReducer = combineReducers ({listReducer});

export default rootReducer;