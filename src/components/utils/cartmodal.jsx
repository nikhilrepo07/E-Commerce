import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../redux/redux/action/showcart.action';
import CustomButton from '../custom-button';
import { addCartItems } from '../../redux/redux/action/addcartitems.action';
import { removeCartItems } from '../../redux/redux/action/removecartitem.action';
import { clearCartItems } from '../../redux/redux/action/clearitem.action';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 450,
    display: 'flex',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    flexDirection:'column',
    alignItems:"center"
    
  };

export default function BasicModal() {
    const show= useSelector(state=> state.shop.showcart)
    const [count,setcount] = React.useState(0)
    let total=0;
    console.log(show)
    const dispatch= useDispatch()
    const cartitem= useSelector(state=>state.shop.cartitems);
    console.log(cartitem)
  const [open, setOpen] = React.useState(show);
  
  const handleOpen = () => dispatch(showCart(true));
  const handleClose = () => dispatch(showCart(false));

  return (
    
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
       
      
          
           
       
         
          <Box sx={style}>
           
           
         <div style={{height:"400px",width:"300px",display:"block",alignItems:"center", justifyContent:"center",flexDirection:"column",overflowY:"auto"}}>
         {  cartitem.map((item)=>(
          
            <div key={item.id} style={{ display:"flex",width:"270px",height:"90px",backgroundColor:"white",margin:"3px",border:"2px solid black"}}>
              <div ><img src={item.imageUrl} width="80px" height="100%" /></div>
             <div style={{margin:"10px"}}>
            <p style={{margin:"0",padding:"0"}}>{item.name}</p>
            <p style={{margin:"0",padding:"0"}}>{item.quantity} x ${item.price}</p>
            <p style={{margin:"0",padding:"0"}}>
            <button key={item.id} onClick={()=>{
              dispatch(addCartItems(item))
              setcount(count+1)
             
              }}>+</button>
            {"  "}
              <button onClick={()=>{
                dispatch(removeCartItems(item))
                setcount(count-1)}}>-</button>
              {"  "}

              <button onClick={()=>{
                dispatch(clearCartItems(item))
                setcount(count-1)}}><DeleteForeverIcon/></button>
              </p>
              </div>
             
            </div>
         )
           )
         }
            
           
            </div>


            

          { cartitem.map((item)=>{
             total=total+(item.quantity*item.price)
           })
          }
          
         <p>Total: {total}$</p>

         <div><CustomButton style={{width:"100px",height:"50px" , color:"white", backgroundColor:"black",margin:"10px"} }> CHECK OUT</CustomButton></div>
         </Box>

      </Modal>
     
    
  );
}