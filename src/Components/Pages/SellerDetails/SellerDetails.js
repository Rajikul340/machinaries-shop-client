import React from 'react';

const SellerDetails = ({sellerInfo, handleDelete}) => {

   console.log(sellerInfo);
    const{_id, name, img, role, email, } = sellerInfo;
    return (
        <tr key={_id}>
        <th><img src={img} className='w-16 h-16 rounded-full' alt="" /></th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          {role !== "admin" && (
            <button
            onClick={()=>handleDelete(_id)}
              className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400"
            >
            Delete
            </button>
          )}
        </td>
      </tr>
    );
};

export default SellerDetails;