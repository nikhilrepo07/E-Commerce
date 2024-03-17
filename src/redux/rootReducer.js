import {combineReducers} from 'redux'
import { shopReducer } from './user/reducer/user.reducer'
import { cartReducer } from './cart/reducer/cart.reducer';
import categoryReducer from './category/reducer/category.reducer';

 
const rootReducer=combineReducers({
    shop:shopReducer,
    cart:cartReducer,
    category:categoryReducer
})

export default rootReducer;