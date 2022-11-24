import { UserContext } from "../AuthProvider/AuthProvider";
import {useContext} from 'react';
import { Navigate, useLocation } from "react-router-dom";




const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if (loading) {
  
      return <p>loading..</p>;
  
  
    }
    console.log(user);
    if (!user) {
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
  
    return children;
  
  };
  
  export default PrivetRoute;