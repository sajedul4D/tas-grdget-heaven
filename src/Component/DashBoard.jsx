import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const DashBoard = () => {
    const {pathname }=useLocation()
    return (
        <div>
            <div className='bg-[#9538E2] pb-20  '>
          <div className="text-white text-center pt-10">
                <h1 className="font-bold text-4xl">Dashboard</h1> <br />
                <p className="opacity-60 max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p> <br />
                <div className='flex gap-5 justify-center items-center mt-5 mb-5'>
            <NavLink to='/dashboard' className={pathname === '/dashboard' ? 'bg-white border text-xl btn  rounded-xl   ' : ' border rounded-xl  text-xl p-2'}  >Cart</NavLink>
            <NavLink to='/dashboard/wish'  className={pathname === '/dashboard/wish' ? 'bg-white border   rounded-xl   text-xl btn' : ' border rounded-xl  text-xl  p-2'}>Wishlist</NavLink>
           </div>
            </div>
          </div> 
         

         <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>

         </div>
        </div>
    );
};

export default DashBoard;