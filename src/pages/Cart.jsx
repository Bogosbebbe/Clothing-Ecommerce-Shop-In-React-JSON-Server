import React from 'react'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
  
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
    <SectionTitle title="Cart" path="Home | Cart" />
    <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState ? (
            <Link to='/checkout' className='btn bg-blue-600 hover:bg-blue-500 text-white btn-block mt-8'>
              proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart