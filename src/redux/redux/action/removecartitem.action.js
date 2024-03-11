// Type Of Action
export const REMOVE_CART_ITEM="REMOVE_CART_ITEMS"
// Action
// Parathensis()
// Curlybraces {}
// Block {}
// Object {}
// Destructing {}
// DataBinding {}
export const removeCartItems=(cartItems)=>(
    {
        type:REMOVE_CART_ITEM,  //Mandatory
        payload:cartItems //Optional
    }
)


