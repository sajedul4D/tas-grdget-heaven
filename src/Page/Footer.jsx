import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FFFFFF] max-w-10/12 mx-auto'>
            <div className='text-center space-y-2 '>
        <h2 className='font-extrabold text-3xl'>Gadget Heaven</h2>
        <p className='font-thin'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <p className='border-t-2 mt-16'></p>
            <div className='flex justify-center items-center gap-32 text-center mt-5'>
                <div className='font-thin'>
                   <h2 className='font-extrabold'>Services</h2>
                   <p className='mt-2'>Product Support</p> 
                   <p>Order Tracking</p>
                   <p>Shipping & Delivery</p>
                   <p>Returns</p>
                
                </div>
                <div className='space-y-2 font-thin'>
                   <h2  className='font-extrabold'>Company</h2>
                   <p>About Us</p> 
                   <p>Careers</p>
                   <p>Contact</p>
                   
                </div>
                <div className='space-y-2 font-thin'>
                   <h2  className='font-extrabold'>Services</h2>
                   <p>Terms of Service

</p> 
                   <p>Privacy Policy</p>
                   <p>Cookie Policy</p>
                  
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='font-bold text-center text-purple-950 hover:text-2xl border-t-2 hover:bg-[#9538E2]'>AllRights Tasin@2025</h2>
            </div>
        </div>
    );
};

export default Footer;