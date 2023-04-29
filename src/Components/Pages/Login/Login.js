import React from "react";

import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext} from "../../AuthProvider/AuthProvider";
import Spinner from "../../Spinner/Spinner";



const Login = () => {
  const { emailLogin, googleLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loader, setLoader] = useState(false);
  const[error, setError] = useState('')

  const googleLoginBtn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user?.email,
        };
   
        console.log(user);
        toast.success("login successfully");
        navigate("/");
      })
      .catch();
  };

  const handleLogin = (event) => {
    setLoader(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user?.email,
        };
        console.log(user);

        toast.success("login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        const errorMessage = err.message;
        setError(errorMessage)
        form.reset();
      });
  };
  // const content = loader && <p>loading..</p>;

  return (
    <div>
      {error ? <p className="text-center text-red-600">{error}</p> : ""}
      <div className="mx-auto lg:w-5/12 mb-4 border mt-7">
        <h3 className="text-center lg:text-3xl font-bold capitalize font-serif text-orange-300">
          Please LogIn
        </h3>

         <div className="text-center">
           <p> buyer email: <strong>buyer@gmail.com  </strong>   password: <strong>123456</strong></p>
           <p> seller email:<strong> seller@gmail.com</strong>   password: <strong>123456</strong></p>
           <p> admin email: <strong> admin@gmail.com </strong>   password: <strong>123456</strong></p>
         </div>

        <form className=" p-4 " onSubmit={handleLogin}>
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border border-orange-300 p-3 rounded-md w-full"
          />
          <br />
          <label htmlFor="name">password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border border-orange-300 p-3 rounded-md w-full"
          />
          <br />

        <div className="form-control ">
        <button
            type="submit"
            className=" btn btn-outline border-orange-300 hover:bg-orange-300 hover:border-0 font-bold  mt-5"
          >
           {
            loader ? <Spinner/> : "Login"
           }
          </button>
        </div>

          <div className="text-center mt-5">
            <p className="text-center">
              create a new account please{" "}
              <Link to="/register" className="text-red-300 underline">
                register
              </Link>
            </p>
          </div>

          <div className=" form-control my-3 text-center  ">
            <button
              onClick={googleLoginBtn}
              className=" border border-orange-300 hover:bg-orange-300 hover:text-white rounded-lg py-2"
            >
             
              <p className="font-bold  uppercase mr-2 lg:mt-1">
               
                Continue with Google
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
