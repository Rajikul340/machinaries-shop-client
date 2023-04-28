import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ManageProduct from "../Pages/AddProduct/ManageProduct";
import AdminRequest from "../Pages/AdminRequest/AdminRequest";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllSeller from "../Pages/AllSeller/AllSeller";
import Blogs from "../Pages/Blogs/Blogs";
import BuyerOrder from "../Pages/BuyersOrder/BuyerOrder";
import Category from "../Pages/Category/Category";
import DashBoard from "../Pages/DashBoard/Dachboard";
import DashboardLayout from "../Pages/DashBoard/DashboardLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";
import WhistList from "../Pages/WhistLinst/WhistList";
import PrivateRout from "../Routes/PrivateRout";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/machine_category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            ` http://localhost:5000/machine_category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/dashboard/myorder",
        element:<BuyerRoute> <BuyerOrder></BuyerOrder></BuyerRoute>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>,
      },
      {
        path: "/dashboard/allseller",
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>,
      },
      {
        path: "/dashboard/payment/:id",
        element:  <Payment></Payment> ,
        loader: ({ params }) =>
          fetch(
            ` http://localhost:5000/machineData/${params.id}`
          ),
      },
      {
        path: "/dashboard/AddProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/adminRequest",
        element: <AdminRequest></AdminRequest>,
      },
      {
        path: "/dashboard/manageProduct",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "/dashboard/whitelist",
        element: <BuyerRoute><WhistList></WhistList></BuyerRoute>,
      },
    ],
  },
]);
