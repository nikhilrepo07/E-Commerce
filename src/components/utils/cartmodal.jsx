import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../redux/redux/action/showcart.action';
import CustomButton from '../custom-button';


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
    console.log(show)
    const dispatch= useDispatch()
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
            <div> <h1>cart</h1></div>
           
         <div style={{height:"400px",width:"300px",display:"block",alignItems:"center", justifyContent:"center",flexDirection:"column",overflowY:"auto"}}>
            <div style={{ width:"270px",height:"50px",backgroundColor:"white",margin:"5px",border:"2px solid black"}}>
              <button onClick={()=>{setcount(count+1)}}>+</button>
             [ {count} ]
              <button onClick={()=>{setcount(count-1)}}>-</button>
            </div>
            <div style={{ width:"270px",height:"50px",backgroundColor:"white",margin:"5px",border:"2px solid black"}}>
              <button onClick={()=>{setcount(count+1)}}>+</button>
             [ {count} ]
              <button onClick={()=>{setcount(count-1)}}>-</button>
            </div>
            <div style={{ width:"270px",height:"50px",backgroundColor:"white",margin:"5px",border:"2px solid black"}}>
              <button onClick={()=>{setcount(count+1)}}>+</button>
             [ {count} ]
              <button onClick={()=>{setcount(count-1)}}>-</button>
            </div>
            <div style={{ width:"270px",height:"50px",backgroundColor:"white",margin:"5px",border:"2px solid black"}}>
              <button onClick={()=>{setcount(count+1)}}>+</button>
             [ {count} ]
              <button onClick={()=>{setcount(count-1)}}>-</button>
            </div>
            <div style={{ width:"270px",height:"50px",backgroundColor:"white",margin:"5px",border:"2px solid black"}}>
              <button onClick={()=>{setcount(count+1)}}>+</button>
             [ {count} ]
              <button onClick={()=>{setcount(count-1)}}>-</button>
            </div>
            
            
           
            </div>


            

           

         

         <div><CustomButton style={{width:"100px",height:"50px" , color:"white", backgroundColor:"black",margin:"10px"} }> CHECK OUT</CustomButton></div>
         </Box>

      </Modal>
     
    
  );
}