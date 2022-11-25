import {createBrowserRouter} from 'react-router-dom';
import Layout from '../Layout/Layout';
import AllMachine from '../Pages/AllMachine/AllMachine';
import Category from '../Pages/Category/Category';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login';
import ProductPage from '../Pages/ProductPage/ProductPage';
import Register from '../Pages/Register/Register';
import PrivetRoute from './PrivateRout';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"/AllMachine/:id",
                element:<PrivetRoute><AllMachine></AllMachine></PrivetRoute>,
                loader:({params}) => fetch (`http://localhost:5000/AllMachine/${params.id}`)

            },

        ]
    }
])
