import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import CustomButton from './custom-button';
import BasicModal from './utils/cartmodal';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../redux/redux/action/showcart.action';

const pages = ['Shop', 'Contact', 'Signin'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispath = useDispatch();
  const togg= useSelector(state=>state.shop.showcart)
  const itemslength=useSelector(state=>state.shop.cartitems).length
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 console.log(""+localStorage.getItem("username"))

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      margin: '10px'
    },
  }));


const stylenav = {
  fontFamily: 'monospace',
              fontWeight: 500,
              
              color: 'inherit',
              textDecoration: 'none'
}
  return (
    <>
     {togg && <BasicModal/>}
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           ShopEcom 
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 
                   <Typography textAlign="center"> <Link style={stylenav} to = {"/"+page}>{page} </Link></Typography> 
                  
                </MenuItem>
               
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         <Link style={stylenav} to="/">ShopEcom</Link>   
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={stylenav} to = {"/"+page}>{page} </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          

          <IconButton aria-label="cart" sx={{color:'inherit'}} onClick={()=>
             dispath(showCart(true))
          }>
      <StyledBadge badgeContent={itemslength} color="secondary">
        <ShoppingCartIcon />
        
      </StyledBadge>
    </IconButton>
   
          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
            
              </IconButton>
            </Tooltip>
            <Menu
              
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <Button variant='contained'>Add to cart</Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
   
    </>
  );
}
export default ResponsiveAppBar;
