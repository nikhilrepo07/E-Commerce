import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CategoryCard from '../MaterialComponents/skeleton';
import { CATEGORY } from './utils/jsondata';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent:'center',
  
  color: theme.palette.text.secondary,
}));

const itemlist= CATEGORY;
export default function Body() {
  return (
    <>
    
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    flexWrap="wrap"
  >
     
      {itemlist.sections.map((item)=> <CategoryCard key={item.id} category={item}/>)}
         
       
          {/* <Facebook/>
        
          <Facebook/>
       
          <Facebook/>
       
         <Facebook/> */}
       
         
         
      
     </Box>
     </>
  );
}
