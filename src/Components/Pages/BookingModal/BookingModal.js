import { useContext } from "react";
import React from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/AuthProvider";



const BookingModal = ({ booingData, setBookingData}) => {
  const { title, resalePrice } = booingData;
  const date = new Date();
  const { user } = useContext(UserContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      title,
      name:user?.displayName,
      date,
      email,
      phone,
      resalePrice
    };

    fetch("https://doctors-portal-servar.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          setBookingData(null);
          toast.success("booking successfully");
   
        } else {
          toast.error(data.message);
          // toast.error('already booked')
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <form
            className="grid grid-cols-1 gap-6 mt-5"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full  "
            />
            <input
              type="text"
              placeholder="phone"
              name="phone"
              className="input input-bordered w-full "
            />
            <input
              type="Email"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="input input-bordered w-full "
              placeholder="email"
            />
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
              placeholder="name"
              readOnly
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full btn btn-outline btn-info"
            />
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-outline btn-info">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
