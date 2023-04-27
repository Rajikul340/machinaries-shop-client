import React, { useContext, useEffect, useState } from "react";
import { adminRequest, getRole, imageUpload } from "../../Auth/Auth";
import { UserContext } from "../../AuthProvider/AuthProvider";
import AdminRequestForm from "./AdminRequestForm";
import { toast } from "react-toastify";

const AdminRequest = () => {

  const { user } = useContext(UserContext);
  const [role, setRole] = useState("");
  // console.log("role to", role);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email)
    .then((data) => {
      setRole(data);
      console.log("admin request by role", data);
      setLoading(false);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    const location = event.target.location.value;
    // Image Upload
    const image = event.target.image.files[0];

    // Upload ID image

     setLoading(true)
    imageUpload(image)
      .then((result) => {
        const hostData = {
          email: user?.email,
          location: location,
          documentImg: result.data.display_url,
          role: "requested",
        };
        // Send request do server
        adminRequest(hostData)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

        // setRole("requested");
        setLoading(false)
      })
      .catch((err) => console.log(err));

      toast.success("admin requested successfully");
  };
  return (
    <>
      <AdminRequestForm loading={loading} handleSubmit={handleSubmit} />
    </>
  );
};

export default AdminRequest;
