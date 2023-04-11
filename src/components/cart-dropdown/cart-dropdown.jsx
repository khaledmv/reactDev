import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.components'
import {selectCartItems}  from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect' 
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { useHistory } from "react-router-dom"




const CartDropdown = ({cartItems, dispatch}) => {
  const history = useHistory()
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
      <a className='checkout' 
        onClick={() => { dispatch(toggleCartHidden()) }} 
        href='/checkout'>
        <CustomButton className="checkout"> Checkout </CustomButton>
      </a>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))