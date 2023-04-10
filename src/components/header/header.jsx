import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import IconCart from '../icon-cart/icon-cart'
import CartDropdown from '../cart-dropdown/cart-dropdown'
const Header = ({currentUser, hidden}) => {
  return (
 
    <>
      <nav className='nav-menu'>
      <div className='logo'> 
        <a href={`/`}>ShopApp</a>
        </div>
        <div className='option-menu'> 
           <a href={`/shop`}>Shop</a>
           {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut() }>Sign Out</div>
            : 
           <a href={`/sign-in`}>Sign In</a>
           }
           <a href={`/contact`}>Contact</a>

           <IconCart/>
        </div>
      </nav>
        {
          hidden ? null : 
          
          <CartDropdown/>
        }
    </>
  
  )
}

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
     currentUser,
     hidden
});


export default connect(mapStateToProps)(Header)