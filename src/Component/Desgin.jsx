import React from 'react';
import NavBar from '../Page/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Footer';
import { ToastContainer, toast } from 'react-toastify';
const Desgin = () => {
    return (
        <div className=''>
            <ToastContainer></ToastContainer>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-132px)]  '>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Desgin;