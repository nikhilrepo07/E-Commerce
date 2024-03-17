import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SHOP_DATA } from "../utils/jsondata";
import Error from "../utils/Error";
import { useDispatch, useSelector } from "react-redux";
import { CardComp } from "../Card";
import { addCartItems } from "../../redux/cart/action/addcartitems.action";
import { Grid } from "@mui/material";

  

const Product = ()=>{
   const dispatch= useDispatch();
   const category = useSelector(state=> state.category.data)
 const prod =  useParams();
  console.log(prod)


 const notify = () => {
  

    toast.info("Product page of "+prod.title, {
      position: "top-center"
    });

    
  };
  const getidx = (p)=>{
    
      if(prod.title==='hats'){
      return 0
      }
      if(prod.title==='sneakers')
      return 1;
      if(prod.title==='jackets')
      return 2;
      if(prod.title==='womens')
      return 3;
      if(prod.title==='mens')
      return 4;
   
    
   return -1;
    
   }
const itemarray= SHOP_DATA;

console.log(getidx())
    return getidx()===-1? <Error/>:(
        <div >
             {notify()}
        <ToastContainer />
            <div >  

                      
                     
                    <h1 style={{ textAlign: "center", paddingTop: "20px",textDecoration:"underline overline" }}>
                        <span style={{ color: "black", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
                            {prod.title.toUpperCase() + " "}
                      
                            COLLECTION
                        </span>
                    </h1>

                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">


                        {itemarray[getidx()].items.map((item, itemIndex) => (

                            <CardComp key={item.id} item={item} />
                        ))}
                    </Grid>

                </div>
             </div>

    )
}
export default Product;