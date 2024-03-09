import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Flare } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Media(props) {
 
  let loading=false
  //const { loading = false } = props;
    const {cat} = props
    const{category}=cat
   const{id,title,imageUrl,size}=category;
    console.log(id,title,imageUrl,size)
  return (
    <Card sx={{ maxWidth: 500, m: 2 }}>
      
      {loading ? (
        <Skeleton animation="wave" variant="rectangular" />
      ) : ( 
        <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <CardMedia
          component="img"
          height={size=='large'?"400":"240"}
          image={imageUrl}
          alt="Nicola Sturgeon on a TED talk stage"
          
        />
        <CardContent style={{position:"absolute"}}>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          // <Typography variant="body2" color="text.secondary" component="p">
          //   {
          //     "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
          //   }
          // </Typography>
          <Button variant="contained"   style={{color:"black", background:"rgb(180, 180, 180)",opacity:"0.8",width:'170px', height:"90px",display:"flex",flexWrap:"wrap"}}>
            
         <div style={{fontSize:"25px"}}>{title.toUpperCase()}</div> 
        <Link to ={"/shop/"+title} style={{textDecoration:"none", color:"black"}}> <div>SHOP NOW <LocalMallIcon/></div> </Link>
        
        </Button>
        )}
      </CardContent>
      </div>
      )}

     
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function ShopCard(props) {
  return (
    <div>
      {/* <Media loading /> */}
      <Media cat={props}/>
    </div>
  );
}