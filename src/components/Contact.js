import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Item } from './utils/item';
import CustomTextfield from './custom-textfield';
import CustomButton from './custom-button';

const Contact= ()=>{
    return (
        <div>
            <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    
     <Grid item>
        <Item> <p style={{fontFamily:"cursive"}}> Contact Us</p> </Item>
    
          <Item>
      
    <CustomTextfield id="name" label="Name" variant="outlined" /> </Item>
    <Item>
    <CustomTextfield id="message" label="Message"  variant="outlined" />
    </Item>
    <Item>
    <CustomButton style={{width:"100px",height:"50px" , color:"white", backgroundColor:"blue"}}>Send</CustomButton> 
   </Item>
   </Grid>
  </Box>
        </div>
    )
}
export default Contact;