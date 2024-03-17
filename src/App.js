
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './header/header';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import Payment from './components/payment';
import Product from './components/Product/product';
import Signup from './components/signup/signup';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Shop } from './components/Shop';





const App = () =>{
  return (
    <>
    <Provider store={store}>
   <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
       <Route path="/" element={<Body/>}/>
       <Route path="/signin" element={<Signup/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/shop/:title" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}


export default App;
