import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './icon-cart.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const IconCart = ({toggleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='icon-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(IconCart)