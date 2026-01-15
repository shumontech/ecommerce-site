import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/shared/navbar/Navbar';
import Footer from '../page/footer/Footer';

const RootLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;