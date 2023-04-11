import React from 'react'
import './checkout-item.style.scss'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  return (
        <div className='data-content'>
            <div className='checkout-img'> <img src={item.imageUrl} alt={item.name } /> </div>
            <div className='checkout-name'> {item.name} </div>
            <div className='checkout-quantity'>
             <span onClick={() => removeItem(item)}> &#10134; </span>
                {item.quantity }  
              <span onClick={() => addItem(item)}> &#10133; </span></div>
            <div className='checkout-price'> ${item.price }</div>
            <div onClick={() => clearItem(item)} className='chekout-remove'> &#10005; </div>
        </div>
  )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItem)