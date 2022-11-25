import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ProductPage from "../ProductPage/ProductPage";

const SingleCard = ({ machinData }) => {
    console.log(machinData);

   
  const { img, title, _id, location,  } = machinData;



  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className='h-64 w-5/6 ' alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
       <div>
         <p></p>
       </div>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default SingleCard;
