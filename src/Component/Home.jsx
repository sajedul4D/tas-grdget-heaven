import React from 'react';
import Banner from '../Page/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import Heading from '../Page/Heading';
import Categories from '../Page/Categories';

const Home = () => {
    const category=useLoaderData([]);
    
    return (
        <div>
          <Heading title={"Upgrade Your Tech Accessorize with  Gadget Heaven Accessories"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
          <div >
          <Banner></Banner>
        
          </div> 
          <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
          <div className='w-10/12 mx-auto mb-24 mt-12 grid grid-cols-5 grid-rows-3 gap-6'>
          <div className='row-span-3'>
            <Categories category={category}></Categories>
          </div>
          <div className='row-span-3 col-span-4'>
            <Outlet></Outlet>
          </div>
          </div>
          
           
         
            
           </div>
       
    );
};

export default Home;