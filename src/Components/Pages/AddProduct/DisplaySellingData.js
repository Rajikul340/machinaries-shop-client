import React from "react";

const displaysellingData = ({ sellingData, handleDelete, handleAdvertise }) => {
  const { title, image, ResalePrice, _id, Status } = sellingData;

  return (
    <tr key={_id}>
      <td>
        <img src={image} className="w-16 h-16 rounded-full" alt="" />
      </td>
      <td>{title}</td>
      <td>
     
        {Status === "booking" ? (
          "Sold"
        ) : (
          <button
            onClick={() => handleAdvertise(sellingData)}
            className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400 "
          >
            advertise
          </button>
        )}
      </td>
      <td>${ResalePrice}</td>

      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default displaysellingData;
