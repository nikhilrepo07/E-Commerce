import { CART_ITEMS, cartitems } from "../action/cartitems.action"
import { SEARCH_PRODUCT } from "../action/search.action"
import { SHOW_CART } from "../action/showcart.action"
import { USER_DETAIL } from "../action/user.action"

// Initial State
const initialUserState={
   
   
    searchfield:"",
    products:[],
    cartitems:[],
    showcart:false,
    user:null
}
const addItems= (state,item) =>{
    let idx=state.cartitems.find(ele=>ele.id===item.id)
    console.log(idx)
    if(idx===undefined){
  state.cartitems.push({...item,quantity:1})
  
    }
    else{
    //     console.log(state.cartitems)
        
       state.cartitems.map((i,ix)=>{
        idx=ix
        if(i.id===item.id)
      
    return idx
       })
    //     console.log("fas gaya",idx)

         state.cartitems[idx].quantity++;
       // state.cartitems.push(item)
        
    }
    return state.cartitems;
}
export const shopReducer=(state=initialUserState,action)=>{
      switch(action.type){
        case CART_ITEMS:
           // {state.cartitems.push(action.payload)}
            return{
                
                ...state,
                cartitems:addItems(state,action.payload)  //Updating State
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