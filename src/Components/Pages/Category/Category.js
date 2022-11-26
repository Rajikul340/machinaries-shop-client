import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../AuthProvider/AuthProvider';
import SingleCard from '../singleCard/SingleCard'
import BookingModal from '../BookingModal/BookingModal'

const Category = () => {
    const allMechineData = useLoaderData();
    const { loading } = useContext(UserContext);
     const [bookingData, setBookingData] = useState([])

    console.log('category router data ', allMechineData);

    return (
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
      {loading ? (
        <p>loading...</p>
      ) : 
      
         allMechineData &&

         allMechineData.map(machineData=><SingleCard
          machineData={machineData}
         ></SingleCard>)
      }
      <div>
        {
          bookingData && (
            <BookingModal
            bookingData={bookingData}
             setBookingData={setBookingData}
            ></BookingModal>
          )
        }

      </div>
    </div>
    );
};

export default Category;