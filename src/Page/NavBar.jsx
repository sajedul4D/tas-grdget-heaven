import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { NavLink, useLocation } from 'react-router-dom';
const NavBar = () => {
  const {pathname}=useLocation([])
    return (
        <div className={` w-11/12 mx-auto ${pathname === '/' ? ' bg-[#9538E2]' : ""}  `}>
           <div className="max-w-6xl conatiner mx-auto   navbar shadow-sm  mt-5">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink className={({isActive})=>`${isActive ? "text-warning":'hover:text-warning'}`}>Home</NavLink>
        <NavLink className={({isActive})=>`${isActive ? "text-warning":'hover:text-warning'}`}>Statistics</NavLink>
        <NavLink className={({isActive})=>`${isActive ? "text-warning":'hover:text-warning'}`}>DashBorad</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Tas_Grdget_</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-16 px-1 text-xl font-bold">
    <NavLink to='/' className={({isActive})=>`${isActive ? "bg-black text-white p-2 rounded-2xl":'hover:text-warning p-2'}`}>Home</NavLink>
        <NavLink to='/statistics' className={({isActive})=>`${isActive ? "bg-black text-white p-2 rounded-2xl":'hover:text-warning p-2'}`}>Statistics</NavLink>
        <NavLink to='/dashboard' className={({isActive})=>`${isActive ? "bg-black text-white p-2 rounded-2xl":'hover:text-warning p-2'}`}>DashBorad</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex gap-10 mr-5 text-2xl font-bold">
    <FaShoppingCart></FaShoppingCart>
    <GiSelfLove></GiSelfLove>
  </div>
</div> 
        </div>
    );
};

export default NavBar;