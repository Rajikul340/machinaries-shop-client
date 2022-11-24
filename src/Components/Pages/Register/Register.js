import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";
import  { UserContext } from '../../AuthProvider/AuthProvider';




const Register = () => {
    const{createUser, handleUpdate} = useContext(UserContext);
    const[loader, setLoader] =useState(false)
    const navigate = useNavigate();
    const[error, setError] = useState('')
    

    const handleSubmit = event =>{
       event.preventDefault();
       setLoader(true)
        const form = event.target ;
        const name = form.name.value ;
        const email = form.email.value;
        const photoURL = form.photoURL.value
        const password = form.password.value ;
        console.log(email , password, name, photoURL);
       
        createUser(email, password)
        .then(result =>{
            const user=result.user ;
          console.log(user);
          handelprofileUpdate(name, photoURL)
          setLoader(false)
          navigate('/')
            form.reset();
            toast.success('Register successfully')
        })
        .catch(err=> {
            const errorMessage =err.message;
            setError(errorMessage)
            console.log(err);

        })
    }

    const handelprofileUpdate = (name, photoURL) =>{

        const profile ={
          displayName:name,
          photoURL:photoURL,
        };

         handleUpdate(profile)
        .then((result)=>{
            const user=result.user ;
            console.log(user);
        })
        .catch(err=> console.log(err))
    }
const content = loader && <p>loading...</p>


    return (
       <div>
        {
            error ? <p className='text-center text'>{error}</p> : content
        }
         <div className='mx-auto lg:w-5/12 mb-4 border'>
            <h3 className='text-center lg:text-3xl font-bold capitalize'>Please Register</h3>
            <form className=' p-4 ' onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name='name' placeholder="name" className=" border p-3 rounded-md w-5/6 " /><br />
                <label htmlFor="name">PhotoURL</label>
                <br />
                <input type="text" name='photoURL' placeholder="PhotoURL" className=" border p-3 rounded-md w-5/6 " /><br />

                <label htmlFor="name">Email</label>
                <br />
                <input type="email" name='email' placeholder="email" className="border p-3 rounded-md w-5/6" required /><br />
                <label htmlFor="name">password</label>
                <br />
                <input type="password" name='password' placeholder="password" className="border p-3 rounded-md w-5/6" required/><br />


             
               <button type='submit' className=' btn btn-outline btn-primary w-48 ml-20 mt-5   '>Register</button>
            

                <div className='text-center mt-5'>
                  
                    <p className='text-center'>already have an account please <Link to='/login' className='text-red-300 underline'>login</Link></p>
                 {
                  
                 }
                </div>

            </form>

        </div>
        {
           
        }
       </div>
    );
};

export default Register;