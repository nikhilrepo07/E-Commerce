
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/header';
import Contact from './components/Contact';
import Body from './components/Body';
import Shop from './components/Shop';
import Error from './components/Error';
import Product from './components/product';
import Signup from './components/signup';
import { Provider } from 'react-redux';
import store from './redux/redux';

const Component = ()=>(
   <Provider store={store}>
  <div>
   
    <ResponsiveAppBar/>
    <Outlet/>
  
  </div>
  </Provider>
)

const appRoutes = createBrowserRouter([
  {
       path:"/",
       element: <Component/>,
       children:[
        {
         path:"/",
         element:<Body/>
        },
        {
          path:"/Contact",
          element:<Contact/>
         },
         {
          path:"/Shop",
          element:<Shop/>
         },
         {
         path:"/signin",
         element:<Signup/>
         },

         {
          path:"/shop/:title",
          element:<Product/>
         },
        

       ],
       errorElement: <Error/>
},
])

export default appRoutes;
