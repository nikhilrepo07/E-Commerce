// Type Of Action
export const SEARCH_PRODUCT="SEARCH_PRODUCT"

export const searchProduct=(searchproduct)=>(
    {
        type:SEARCH_PRODUCT,  //Mandatory
        payload:searchproduct //Optional
    }
)


