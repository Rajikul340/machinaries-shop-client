import { useContext } from "react";
import React from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/AuthProvider";

const BookingModal = ({ bookingData, setBookingData }) => {
  console.log(bookingData);
  const { title, resalePrice, img, category_id } = bookingData;

  const now = new Date();
  const date = now.toLocaleDateString();
  console.log(date);

  const { user } = useContext(UserContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      title,
      buyer: user?.displayName,
      date,
      buyerEmail: email,
      phone,
      resalePrice,
      location,
      img,
      category_id,
      Status: "booking",
    };

    fetch(" http://localhost:5000/AllMachine", {
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
              type="text"
              name="location"
              className="input input-bordered w-full "
              placeholder="meeting place"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered w-full btn btn-outline border-orange-300 hover:bg-orange-300"
            />
          </form>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-outline border-orange-300 hover:bg-orange-300"
            >
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
