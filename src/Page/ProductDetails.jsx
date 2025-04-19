import React, { useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import {  AddtoCartList, setwishToLocalStorage } from '../Component/Uliti/AddTo';


const ProductDetails = () => {
    const {productDetails}=useParams();
   
    const id=parseInt(productDetails)
  
    const allData=useLoaderData()

    const data=allData.find(product=>product.product_id ===id)
    console.log( "paise params",data);
    const {product_id,product_title, product_image, price, description, specification, availability, rating}=data
   
    const [isDisabled , setIsDisabled] = useState(false)
const HandleAddToCart=id=>{

    AddtoCartList(id)
}
const HandleWishList=id=>{
    setwishToLocalStorage(id)
    setIsDisabled(true)
}

    return (
        <div>
          <div className='bg-[#9538E2] pb-20 h-[400px]'>
          <div className="text-white text-center pt-10">
                <h1 className="font-bold text-4xl">Product Details</h1> <br />
                <p className="opacity-60 max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p> <br />
            </div>
          </div>
          <div className='p-8  rounded-2xl flex w-10/12 mx-auto gap-8 bg-white relative -top-44'>
          <div className="w-2/5 rounded-2xl flex items-center justify-center bg-gray-300">
                    <img className="" src={product_image} alt="Image" />
                </div>
                <div className="space-y-5">
                    <h1 className="font-semibold text-3xl">{product_title}</h1>
                    <h3 className="font-semibold text-xl">Price : {price}</h3>
                    <div className=''>
                        {
                            availability ?
                                <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center">In Stock</h1> :
                                <h1 className="outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center">Out of Stock</h1>
                        }
                    </div>
                    <p>{description}</p>
                    <div>
                        <h1 className="font-bold">Specification:</h1>
                        <div className="pl-5 space-y-2 mt-2">
                            {
                                specification && specification.map((data, index) => <h1>
                                    <span className="font-bold">{index + 1}.</span> <span className="font-medium pl-2">{data}</span>
                                </h1>)
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold">Rating</h1>
                        <div className="flex gap-3 mt-2">
                        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
                            <h1 className="bg-slate-200 p-1 rounded-md text-sm">{rating}</h1>
                        </div>
                        <div className='flex  items-center gap-5 mt-5'>
            <button onClick={()=>HandleAddToCart(product_id)} className='btn bg-[#9538E2] rounded-3xl '>Add To Cart <span className='text-2xl font-bold'><CiShoppingCart></CiShoppingCart></span></button>
            <button onClick={()=>HandleWishList(product_id)} disabled={isDisabled} className='btn text-2xl font-bold'><FaRegHeart></FaRegHeart></button>
          </div>
                    </div>
                    </div>
          </div>
          
        </div>
    );
};

export default ProductDetails;