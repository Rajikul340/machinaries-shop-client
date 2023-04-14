import React from 'react';

const BuyerDetails = ({buyerDetails,  handleDelete}) => {
    console.log(buyerDetails);
    const{_id, name, img, role, email, } = buyerDetails;
    return (
        <tr key={_id}>
        <td><img src={img} className='w-16 h-16 rounded-full' alt="" /></td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          {role !== "admin" && (
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400"
            >
            Delete
            </button>
          )}
        </td>
      </tr>
    );
};

export default BuyerDetails;