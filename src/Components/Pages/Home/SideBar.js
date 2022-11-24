import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {


    return (
        <div className=' w-2/3  '>
            <h2 className='lg:text-2xl font-bold py-2 font-serif'>Categories</h2>
               <hr />

               <ul className='my-2'>
                <li>
                    <Link to='/' className='lg:text-lg  font-serif text-[13px]'>Lathe Machine</Link>
                </li>
                <li>
                    <Link to='/' className='lg:text-lg  font-serif text-[13px]'>Miling Machine</Link>
                </li>
                <li>
                    <Link to='/' className='lg:text-lg font-serif text-[13px] '>CNC Machine</Link>
                </li>
               </ul>
            
        </div>
    );
};

export default SideBar;