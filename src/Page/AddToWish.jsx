import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  getwshToLocalStorage } from '../Component/Uliti/AddTo';
import WishDetails from './WishDetails';

const AddToWish = () => {
    const [addWish, setAddWish] = useState([]);
    const allData=useLoaderData([])
    useEffect(() => {
        const products =  getwshToLocalStorage();
       const productsInt=products.map(id=>parseInt(id))
       const dataFilter=allData.filter(product=>productsInt.includes(product.product_id))
       setAddWish(dataFilter);
        
    }, [])
    console.log("data se ",addWish);
    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold'>WishList</h2>
            <div>
                {
            addWish.map(item=><WishDetails key={item.product_id} item={item} ></WishDetails>)
                }
            </div>
        </div>
    );
};

export default AddToWish;