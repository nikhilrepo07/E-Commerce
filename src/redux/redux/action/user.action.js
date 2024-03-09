export const USER_DETAIL="USER_DETAIL"

export const userdetail=(user)=>(
    {
        type:USER_DETAIL,  //Mandatory
        payload:user //Optional
    }
)