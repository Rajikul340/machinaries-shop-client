import React from "react";

const LatheMachineCard = ({ latheSingleData }) => {
  console.log(latheSingleData);
  const {title, img, } = latheSingleData;

  return (
    <div>
      <div className="card  shadow-xl">
        <figure>
          <img src={img} alt="machine" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatheMachineCard;
