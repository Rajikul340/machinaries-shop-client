import React from 'react';
import { useCategory } from '../../Auth/Auth';
import {useState, useEffect} from 'react';
import SideBar from '../Home/SideBar';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import {Link} from 'react-router-dom';

const MachineCategory = () => {
 
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/machine_category')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCategories(data)
        })
    },[])


    return (
        <div>
              <div >
                {
                    categories.map(category => <p key={category?.categoroy_id}
                        
                   >
                     <Link to={`/category/${category?.category_id}`}>

                       <p className='capitalize'> {category?.name}</p>
                        
                        </Link>
              
                    </p>)
                }
            </div>
        </div>
    );
};

export default MachineCategory;