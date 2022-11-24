import React from 'react';
import { Link } from 'react-router-dom';
import MachineCategory from '../Machine_Category/MachineCategory';

const SideBar = ({category}) => {
console.log(category);


    return (
        <div className=' w-2/3  '>
            <h2 className='lg:text-2xl font-bold py-2 font-serif'>Categories</h2>
               <hr />

               <ul className='my-2'>
                <MachineCategory></MachineCategory>
               
               </ul>
            
        </div>
    );
};

export default SideBar;