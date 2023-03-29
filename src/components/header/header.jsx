import React from 'react'
import { connect } from 'react-redux'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
const Header = ({currentUser}) => {
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


        </div>
      </nav>
    </>
  
  )
}

const mapStateToProps = state => ({
     currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(Header)