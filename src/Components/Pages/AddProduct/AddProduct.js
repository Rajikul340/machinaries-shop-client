import React, { useContext, useState } from "react";
import { addProduct, imageUpload } from "../../Auth/Auth";
import { UserContext } from "../../AuthProvider/AuthProvider";
import AddProductForm from "./AddProductForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const now = new Date();
  const date = now.toLocaleDateString();

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const originalPrice = event.target.originalPrice.value;
    const ResalePrice = event.target.ResalePrice.value;
    const Uses = event.target.Uses.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    console.log("imagee type", image);

    setLoading(true);
    imageUpload(image)
    .then(result=>{
        const product = {
            title,
            location,
            originalPrice,
            ResalePrice,
            Uses,
            description,
            image:result.data.display_url,
            date,
            sellerInfo: {
              seller: user?.displayName,
              sellerMail: user?.email,
              sellerImg: user?.photoURL,
            },
          };
          addProduct(product)
          .then((data) => {
            console.log(data);
            setLoading(false);
            toast.success("product Added!");
            navigate("/dashboard/manageProduct");
          })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

        console.log('imagaae reuslt is', result);
    })

     

  };

  const handleImageChange = (image) => {
    console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };

  return (
    <div>
      {
        <AddProductForm
          loading={loading}
          handleImageChange={handleImageChange}
          preview={preview}
          uploadButtonText={uploadButtonText}
          handleSubmit={handleSubmit}
        />
      }
    </div>
  );
};

export default AddProduct;
