import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({item}) => {
    const {category}=item
    return (
        <div>
                 <NavLink to={`/category/${category}`}
                className={({ isActive }) => `rounded-full btn w-full ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>{category}</NavLink> 
        </div>
    );
};

export default Category;