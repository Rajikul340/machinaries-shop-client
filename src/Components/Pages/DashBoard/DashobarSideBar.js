import React from 'react';
import { Link } from 'react-router-dom';



const DashobarSideBar = ({role}) => {
    console.log(role);


    return (
        <div>
             <h1>welcome </h1>
                 <Link to='/dashboard/myorder'>my orders</Link>
        </div>
    );
};

export default DashobarSideBar;