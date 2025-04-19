import React from 'react';
import { Link } from 'react-router-dom';

const Eroor = () => {
    return (
        <div>
<div className='bg-[#9538E2] pb-20 '>
          <div className="text-white text-center pt-10">
                <h1 className="font-bold text-4xl">404!! Error</h1> <br />
                <p className="opacity-60 max-w-3xl mx-auto">Sorry this Type content No Here This side please try Agin </p> <br />
                <Link to='/' className='btn'>Back to home</Link>
            </div>
           
          </div>

<div className=' '>
            
            <img className='w-1/2 mx-auto'
             src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="" />
            
        </div>
        </div>
    );
};

export default Eroor;