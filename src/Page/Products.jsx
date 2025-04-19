import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  
    const loadData = useLoaderData();
    const { categoryname } = useParams();
    const [job,setJob]=useState([])
    

    useEffect(()=>{

        if(categoryname){
         const filters=[...loadData].filter(serch=>serch.category === categoryname)
         setJob(filters)
        } 
        else {
            setJob(loadData.slice(0,6))
        }
     },[categoryname,loadData])
  
    console.log(job);

    return (
        <div>
       <h2>{categoryname}</h2>
        <div className='grid grid-cols-3 gap-6'>
        {
                            job.map(item => <Product key={item.product_title} item={item}></Product>)
                        }
        </div>
        <button  className='btn border-[#9538E2] text-[#9538E2] rounded-3xl mt-3 hover:bg-[#9538E2] hover:text-white' onClick={()=>setJob(loadData)}>View More</button>
        </div>
    );
};

export default Products;