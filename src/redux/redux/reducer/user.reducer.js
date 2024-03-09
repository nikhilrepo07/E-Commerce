import { CART_ITEMS } from "../action/cartitems.action"
import { SEARCH_PRODUCT } from "../action/search.action"
import { SHOW_CART } from "../action/showcart.action"
import { USER_DETAIL } from "../action/user.action"

// Initial State
const initialUserState={
   
   
    searchfield:"",
    products:[],
    cartitems:[1,2,3],
    showcart:false,
    user:null
}
export const shopReducer=(state=initialUserState,action)=>{
      switch(action.type){
        case CART_ITEMS:
            return{
                ...state,
                cartitems:action.payload  //Updating State
            }

            case SEARCH_PRODUCT:
                return{
                    ...state,
                    searchfield:action.payload
                }
                case SHOW_CART:
                    return{
                        ...state,
                        showcart:action.payload
                    }
                    case USER_DETAIL:
                      
                        return{
                            ...state,
                            user:action.payload
                        }
            default:
                return state
      }
}

// const rememberCheck=(state=initialUserState)=>{
//     return {
//         ...state,
//         monsters:[1,2,3,4]
//     }
// }
// console.log(rememberCheck())