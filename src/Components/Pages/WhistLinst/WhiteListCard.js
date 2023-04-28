import React, { useContext } from 'react';
import { UserContext } from '../../AuthProvider/AuthProvider';

const WhiteListCard = ({singleData, setBookingData, handleDelete}) => {
    const { user } = useContext(UserContext);
    console.log('user white list email',user?.email);

    const {
      img,
      title,
      _id,
      buyerEmail,
      location,
      uses,
      seller,
      originalPrice,
      resalePrice,
    } = singleData;

    return (
        <div>
      <div className="card w-10/12 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-64 w-5/6 " alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <p>
              Original Price: <strong>{originalPrice}</strong>
            </p>
            <p className="text-end">
              Resale Price: <strong>${resalePrice}</strong>
            </p>
          </div>
          <div className="flex justify-between ">
            <div>
              <img
                className="w-10 rounded-full"
                src={user?.photoURL ? user?.photoURL : ""}
                referrerPolicy="referrerPolicy"
                alt=""
              />
              <p className="">Seller: {user?.displayName} 
              {
                user?.emailVerified ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg> : <p className=" text-red-600">unverified</p>
              }
              </p>
         

            </div>
            <div>
              <p>Location: {location}</p>
              <p>uses: {uses}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
             <button 
             onClick={()=>handleDelete(singleData)}
              className="btn hove:border-none border-orange-300 btn-outline hover:bg-orange-300"
             >Delete </button>
            <label
              htmlFor="whitelist-modal"
              onClick={()=>setBookingData(singleData)}
              className="btn hove:border-none border-orange-300 btn-outline hover:bg-orange-300"
            >
              Book Now
            </label>
          </div>
       
        </div>
      </div>
    </div>
    );
};

export default WhiteListCard;