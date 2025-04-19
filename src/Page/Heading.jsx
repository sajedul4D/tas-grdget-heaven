import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Heading = ({title,subtitle}) => {
    const pathName=useLocation();
    console.log(pathName);
    return (
       
             <div className='w-11/12 mx-auto bg-[#9538E2]  pt-20 pb-60 rounded-b-xl' >
                    <div className='container mx-auto px-12 items-center justify-center flex flex-col space-y-7'>
                        <h2 className='font-bold md:text-5xl md:w-10/12 text-xl text-center text-white leading-10'>{title}</h2>
                        <p className='text-center md:w-9/12 text-white'>{subtitle}</p>
                        <div>
                            <NavLink to='/dashboard'> <button className=' py-3 hover:bg-purple-950 bg-white rounded-full text-purple-600 px-6'>Shop Now</button> </NavLink>
                        </div>
                    </div>
            
        </div>
    );
};

export default Heading;


           
        
  
 