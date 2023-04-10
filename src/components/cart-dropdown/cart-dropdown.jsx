import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton> Checkout </CustomButton>
    </div>
  )
}

export default CartDropdown