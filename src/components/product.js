import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SHOP_DATA } from "./utils/jsondata";
import Error from "./Error";

  

const Product = ()=>{
 const prod =  useParams();

 const notify = () => {
  

    toast.info("Product page of "+prod.title, {
      position: "top-center"
    });

    
  };
  const getidx = (p)=>{
    
      if(prod.title=='hats'){
      return 0
      }
      if(prod.title=='sneakers')
      return 1;
      if(prod.title=='jackets')
      return 2;
      if(prod.title=='womens')
      return 3;
      if(prod.title=='mens')
      return 4;
     
    return -1;
    
   }
const itemarray= SHOP_DATA;

console.log(getidx())
    return getidx()==-1? <Error/>:(
        <div>
             {notify()}
        <ToastContainer />
             product page of {prod.title} 
            
             {itemarray[getidx()].items.map((item)=>(
               <ul>
              <li>{item.id}</li>
              <li><img src={item.imageUrl}/></li>
              <li>{item.name}</li>
              <li>Rs.{item.price}</li>
              </ul>
             ))}
            
             </div>

    )
}
export default Product;