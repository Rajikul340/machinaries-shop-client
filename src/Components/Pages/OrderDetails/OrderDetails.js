import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ singleData, handleDelete }) => {
  
  // console.log(singleData);
  const { img, title, _id, resalePrice, paid } = singleData;
  return (
    <tr key={_id}>
      <td>
        <img src={img} className="w-16 h-16 rounded-full" alt="" />
      </td>
      <td>{title}</td>
      <td>${resalePrice}</td>
      <td>
        {" "}
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400"
        >
          cancel
        </button>
      </td>
      <td>
        {resalePrice && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400">
              {" "}
              pay
            </button>
          </Link>
        )}
        {resalePrice && paid && (
          <button className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400 ">
            paid
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderDetails;
