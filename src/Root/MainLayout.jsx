import { createBrowserRouter } from "react-router-dom";
import Desgin from "../Component/Desgin";
import Home from "../Component/Home";
import Products from "../Page/Products";
import ProductDetails from "../Page/ProductDetails";
import DashBoard from "../Component/DashBoard";
import Cart from "../Page/Cart";
import AddToWish from "../Page/AddToWish";
import Statistics from "../Component/Statistics";
import Cusetomer from "../Component/Cusetomer";
import Eroor from "../Page/Eroor";



const router=createBrowserRouter([
   
    {
        
        path:'/',
        element:<Desgin></Desgin>,
          errorElement:<Eroor></Eroor>
        ,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../category.json'),
                children:[
                    {
                        path:'/',
                        element:<Products></Products>,
                        loader:()=>fetch('../grdgest.json')
                    }
                    ,{
                        path:'/category/:categoryname',
                        element:<Products></Products>,
                        loader:()=>fetch('../grdgest.json')
                    }
                ]
            }
            ,{
                path:'/statistics',
                element:<Statistics></Statistics>
                           },{
                            path:'/customer',
                            element:<Cusetomer></Cusetomer>
                           }
            
            ,
            {
                path:'/details/:productDetails',
                element:<ProductDetails></ProductDetails>,
                loader:()=>fetch('../grdgest.json')
            },{
                path:'/dashboard',
                element:<DashBoard></DashBoard>,
                
                children:[
                    {
                        path:'/dashboard',
                        element:<Cart></Cart>,
                        loader:()=>fetch('../grdgest.json'),
                    },{
                       path:'/dashboard/wish',
                       element:<AddToWish></AddToWish>,
                       loader:()=>fetch('../grdgest.json')

                    }
                ]
            },
        ]
    }
])
export default router