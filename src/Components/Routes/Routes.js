import {createBrowserRouter} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Category from '../Pages/Category/Category';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home'
import LatheMachine from '../Pages/LatheMachine/LatheMachine';
import Login from '../Pages/Login/Login';
import MachineCategory from '../Pages/Machine_Category/MachineCategory';
import Register from '../Pages/Register/Register';


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
                path:"/machine-category/:id",
                element:<Category></Category>,
                loader: ({params}) =>{
                    return fetch( `http://localhost:5000/machine_category/${params.id}`)
                 }
            }
        ]
    }
])