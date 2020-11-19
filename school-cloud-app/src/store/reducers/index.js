import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {volunteersReducer} from './volunteersReducer'

export default combineReducers({
    adminReducer,
    volunteersReducer
    //other reducers
})