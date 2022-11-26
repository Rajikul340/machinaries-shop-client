import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, handleUpdate } = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedValue, setSelectedValue] =useState("");



  const handleRadioBtn = event =>{
    setSelectedValue(event.target.value);
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    setLoader(true);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);

    const userCollection ={
              
      name,
      email,
      img:photoURL,
      role: selectedValue,
 }
  fetch('http://localhost:5000/users',{
    method:"PUT",
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(userCollection)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handelprofileUpdate(name, photoURL);
        setLoader(false);
        navigate("/");
        form.reset();
        toast.success("Register successfully");
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
        console.log(err);
      });

      const handelprofileUpdate = (name, photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
    
        handleUpdate(profile)
          .then((result) => {
            const user = result?.user;
            console.log('update user', user);
           
            
            console.log(result);
          })
          .catch((err) => console.log(err));
      };
  };

  
  const content = loader && <p>loading...</p>;

  return (
    <div>
      {error ? <p className="text-center text-red-600">{error}</p> : content}
      <div className="mx-auto lg:w-5/12 mb-4 border mt-5">
        <h3 className="text-center lg:text-3xl font-bold  capitalize font-serif text-orange-300">
          Please Register
        </h3>
        <form className=" p-4 " onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            className=" border border-orange-300 p-3 rounded-md w-full "
          />
          <br />
          <label htmlFor="name">PhotoURL</label>
          <br />
          <input
            type="text"
            name="photoURL"
            placeholder="PhotoURL"
            className=" border border-orange-300 p-3 rounded-md w-full "
          />
          <br />

          <label htmlFor="name">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border border-orange-300 p-3 rounded-md w-full"
            required
          />
          <br />
          <label htmlFor="name">password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="border border-orange-300 p-3 rounded-md w-full"
            required
          />
          <br />

          <input
            checked={selectedValue === "seller"}
            onChange={handleRadioBtn}
            value="seller"
            name="seller"
            type="radio"
          />
          <label htmlFor=""><span className="p-2">Seller Account</span></label>

          <input
        
            checked={selectedValue === "buyer"}
            onChange={handleRadioBtn}
            value="buyer"
            name="buyer"
            type="radio"
          />
          <label htmlFor=""> <span className="p-2">Buyer Account</span> </label>

          <div className="form-control ">
            <button
              type="submit"
              className=" btn btn-outline border-orange-300 hover:bg-orange-300 hover:border-0 font-bold  mt-5"
            >
              Register
            </button>
          </div>

          <div className="text-center mt-5">
            <p className="text-center">
              already have an account please{" "}
              <Link to="/login" className="text-red-300 underline">
                login
              </Link>
            </p>
            {}
          </div>
        </form>
      </div>
      {}
    </div>
  );
};

export default Register;
