import React from 'react'

const CartTotals = () => {
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>$900</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>$50</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>$50</span>
        </p>
        {/* Order Total */}
        <p className='flex justify-between text-sm mt-4 pb-2'>
          <span>Order Total</span>
          <span className='font-medium'>$1000</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals