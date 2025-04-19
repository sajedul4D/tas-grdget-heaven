import React from 'react';
import { NavLink } from 'react-router-dom';
import Category from './Category';

const Categories = ({category}) => {
    return (
        <div className='border bg-white rounded-2xl p-6 space-y-6'>
            
            <NavLink to='/' className={({ isActive }) => `rounded-full btn w-full ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`} >All Product</NavLink>
            {
                category.map(item=><Category key={item.id} item={item}></Category>)
            }
        </div>
    );
};

export default Categories;