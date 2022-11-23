import React from 'react';
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='flex items-center flex-col  mt-60 '>
            <p className='text-9xl font-bold mb-3'>404</p>
            <h4 className='text-3xl capitalize font-semibold mb-3'>page not found</h4>
           <Link to='/'>  <button className='capitalize btn btn-info text-2xl '>back to home</button></Link>
        </div>
    );
};

export default ErrorPage;