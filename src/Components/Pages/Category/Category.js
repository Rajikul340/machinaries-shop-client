import React from 'react';
import ProductPage from '../ProductPage/ProductPage';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const productData =useLoaderData()

    return (
        <div>
        {
            productData.map(singleData =><ProductPage
            key={singleData._id}
            singleData={singleData}
            ></ProductPage>)
        }
        </div>
    );
};

export default Category;