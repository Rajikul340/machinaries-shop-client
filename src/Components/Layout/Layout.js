import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header'

const Layout = () => {

    return (
        <>
         <Header></Header>
        <div className='px-8'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Layout;