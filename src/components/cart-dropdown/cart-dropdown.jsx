import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.components'
import {selectCartItems}  from '../../redux/cart/cart.selector' 


const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
         
        {
          cartItems.length 
          ?
          cartItems.map(cartItem => (
                   <CartItem key={cartItem.id} item={cartItem} />
           ))

           :  <span> Cart is Empty </span>  

        }

       </div>
      <CartItem/>
      <CustomButton> Checkout </CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown)