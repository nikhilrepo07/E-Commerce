// Type Of Action
export const CART_ITEMS="CART_ITEMS"
// Action
// Parathensis()
// Curlybraces {}
// Block {}
// Object {}
// Destructing {}
// DataBinding {}
export const cartitems=(cartItems)=>(
    {
        type:CART_ITEMS,  //Mandatory
        payload:cartItems //Optional
    }
)


