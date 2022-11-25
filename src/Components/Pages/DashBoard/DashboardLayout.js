import React from 'react';
import AllDetails from '../AllDetails/AllDetails';
import SideBar from '../Home/SideBar';
import DashobarSideBar from './DashobarSideBar';

const DashboardLayout = () => {

    return (
   
            <div className='flex gap-8 mx-8'>
            <div className='flex-1'>
            <AllDetails></AllDetails>
            </div>
               <DashobarSideBar></DashobarSideBar>
             
            
        </div>

    );
};

export default DashboardLayout;