import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.components'


const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
         
        {
          cartItems.map(cartItem => (
                   <CartItem key={cartItem.id} item={cartItem} />
           ))       
        }

       </div>
      <CartItem/>
      <CustomButton> Checkout </CustomButton>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown)