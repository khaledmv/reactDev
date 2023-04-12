import React from 'react'
import './chekout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeButton from '../../firebase/stripe-button'

const CheckOut = ({cartItems, total }) => {
  return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
         <div className='checkout-data'>
         {
                cartItems.map(item => (
                  <CheckoutItem key={item.id} item={item} />
                ) )
            }

         </div>
        <div className='total'> Total : ${total}</div>
        <div> Use this test credit card <span>4242 4242 4242 4242 </span> <span> Exp: 01/24</span> <span>CW: 123</span></div>
        <StripeButton price={total} />
    </div>
  )
}

const mapStateProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateProps)(CheckOut)