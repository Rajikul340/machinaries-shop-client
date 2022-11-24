import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../singleCard/SingleCard';

const AllMachine = () => {


    const allMachineData = useLoaderData()
    console.log(allMachineData);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      {
        allMachineData.map(MahcineData =><SingleCard
        key={MahcineData?._id}
        MahcineData={MahcineData}
        ></SingleCard>)
      }
        </div>
    );
};

export default AllMachine;