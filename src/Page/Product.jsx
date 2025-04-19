import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({item}) => {
 
    const {product_title,price,product_image,product_id}=item
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className='h-[200px] mx-auto'
      src={product_image}
      alt="Digital Picture" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {product_title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Price:{price}</p>
    <div className='text-start'>
    <Link to={`/details/${product_id}`} className=' btn border-[#9538E2] text-[#9538E2] rounded-3xl'> View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;