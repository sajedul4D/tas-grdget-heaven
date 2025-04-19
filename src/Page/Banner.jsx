import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=' -top-40 w-9/12 mx-auto  relative'>
            <div className='border-2 min-h-[200px] rounded-xl border-white p-4'>
                <img className='rounded-xl h-[500px] shadow-white shadow-2xl w-full' src={banner} alt='banner image' />
            </div>


        </div>
    );
};

export default Banner;