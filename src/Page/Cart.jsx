import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { GiSettingsKnobs } from "react-icons/gi";
import { getAddtoCart } from '../Component/Uliti/AddTo';
import CartDetails from './CartDetails';
const Cart = () => {
    const [addCard, setAddCard] = useState([]);

     const allData=useLoaderData([])
    // const [data,setData]=useState([])
     useEffect(()=>{
         const storeData=getAddtoCart();
        const storeDataInt=storeData.map(id=>parseInt(id))
         const StoreShoe=allData.filter(job=>storeDataInt.includes(job.product_id))
         setAddCard(StoreShoe);
    //     console.log(storeData,storeDataInt,StoreShoe);
     },[])

    // useEffect(()=>{
    //     const storeList=getAddtoCart();
    //     setAddCard(storeList)
        
    // },[])
    
    console.log('kire aise ni',addCard);
    const handelshort = ( sortPrcee) => {
        if(sortPrcee === 'Short by Price '){
            const sortprize = [...addCard].sort((a, b) => b.price - a.price);
            setAddCard(sortprize)
        }
        
    }
    const handelPurchase = () => {

        if (localStorage.length < 1) {
            return toast.error('Please Add Data and then purshase')
        } else {

            document.getElementById('my_modal_1').showModal();
            setTimeout(() => {
                localStorage.clear('cart');
                setAddCard([])
                navigate('/')
            }, 2000)


        }}
    return (
        <div className='my-12'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-xl'>Cart</h3>
                <div className='flex items-center gap-10'>
                    <h3 className='font-bold text-xl'>Total Cost : {addCard.reduce((pre, sum) => {
                        return pre + sum.price
                    }, (0))} </h3>
                    <NavLink onClick={()=>handelshort('Short by Price ')}  to='/dashboard' className=" border flex items-center gap-2 rounded-full px-4 py-2 border-purple-600 font-medium hover:bg-white hover:text-whi te" >Short by Price <GiSettingsKnobs size={20} color='purple-500' /></NavLink>
                    <NavLink onClick={handelPurchase} className=" border  bg-[#9538E2] rounded-full px-4 py-2 hover:text-white hover:bg-[#9538E2] border-purple-600"  > Purchase </NavLink>
                </div>
            </div>
            <div>
                {
                    addCard.map(product =><CartDetails key={product.product_id} product={product}></CartDetails>)
                }
            </div>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg flex items-center justify-center"><img src="https://img.icons8.com/?size=64&id=118993&format=png" alt="" /></h3>
                        <h3 className='text-xl font-bold text-black text-center mb-5 '>Payment SuccessFull</h3>
                        <hr />
                        <p className='text-gray-500 mt-2 text-center'>Thanks for Purchasing</p>
                        <h3 className=' text-xl text-gray-500 text-center'>Total Cost : {addCard.reduce((pre, sum) => {
                            return pre + sum.price
                        }, (0))} </h3>
                        <div className="modal-action">  
                                <Link to='/' className="btn w-full">Close</Link>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Cart;