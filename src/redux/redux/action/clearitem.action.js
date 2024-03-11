// Type Of Action
export const CLEAR_CART_ITEM="CLEAR_CART_ITEMS"
// Action
// Parathensis()
// Curlybraces {}
// Block {}
// Object {}
// Destructing {}
// DataBinding {}
export const clearCartItems=(cartItems)=>(
    {
        type:CLEAR_CART_ITEM,  //Mandatory
        payload:cartItems //Optional
    }
)


