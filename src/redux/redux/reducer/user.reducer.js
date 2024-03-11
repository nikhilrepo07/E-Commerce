import { ADD_CART_ITEMS, cartitems } from "../action/addcartitems.action"
import { CLEAR_CART_ITEM } from "../action/clearitem.action"
import { REMOVE_CART_ITEM } from "../action/removecartitem.action"
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
        
     const idd=  state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })
    //     console.log("fas gaya",idx)

         state.cartitems[idx].quantity++;
       // state.cartitems.push(item)
        
    }
    return state.cartitems;
}

const removeItem= (state,item) =>{
    let idx;
    state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })

    if(state.cartitems[idx].quantity===1){
        state.cartitems.splice(idx,1);
    }
    else{
        state.cartitems[idx].quantity--;
    }
    return state.cartitems

}

const clearItem = (state,item) =>{
    let idx;
    state.cartitems.map((i,ix)=>{
       
        if(i.id===item.id){
            idx=ix
    return ix
        }
       })
    state.cartitems.splice(idx,1)

    return state.cartitems
}




export const shopReducer=(state=initialUserState,action)=>{
      switch(action.type){
        case ADD_CART_ITEMS:
           // {state.cartitems.push(action.payload)}
            return{
                
                ...state,
                cartitems:addItems(state,action.payload)  //Updating State
            }
       
            case REMOVE_CART_ITEM:

            return{
                ...state,
                cartitems:removeItem(state,action.payload)
            }
            
        
         case CLEAR_CART_ITEM:
            return{
                ...state,
                cartitems:clearItem(state,action.payload)
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