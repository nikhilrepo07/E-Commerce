import {createStore,combineReducers, applyMiddleware} from 'redux'
import { shopReducer } from './reducer/user.reducer'
 import logger from 'redux-logger'
import {thunk} from 'redux-thunk'
 
const rootReducer=combineReducers({
    shop:shopReducer
    
})
const middlewares = [logger,thunk]
const store=createStore(rootReducer,applyMiddleware(logger));
export default store
