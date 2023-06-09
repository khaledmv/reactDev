import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './icon-cart.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount} from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';

const IconCart = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='icon-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(IconCart)