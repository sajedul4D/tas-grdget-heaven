import React from 'react';
import { FaXmark } from "react-icons/fa6";
const CartDetails = ({product}) => {
   
  console.log("data ase ni",product);
  console.log(product.product_image);
    return (
        <div className='mt-10'>
              <div className='bg-gray-100  flex gap-8 h-48 overflow-hidden rounded-xl px-3 py-2 p-2'>
                <div className='w-3/12 overflow-hidden'>
                    <img  className='rounded-xl w-full h-full object-cover' src={product.product_image} alt="" />
                </div>
                <div className='space-y-5 flex-1 my-3 py-3'>
                    <h3 className='text-xl font-bold text-black'>{product.product_title}</h3>
                    <p>{product.description}</p>
                    <p className='font-bold'>Price : ${product.price}</p>
                </div>
                <div className=' mr-10 mt-10'>
                    <h3   className='text-red-600 border p-3 rounded-full border-red-700'><  FaXmark size={12} /></h3>
                </div>
            </div>

        </div>
    );
};

export default CartDetails;