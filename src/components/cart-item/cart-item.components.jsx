import React from 'react'
import './cart-item.styles.scss'


const CartItem = ({item}) => {
    const { imageUrl, price, name, quantity } = item || {};
    return (
        <div className='cart-item'>
          {
            ( item ? 
           <div>
           <img className='imageUrl' src={imageUrl} alt='item' />
            <div className='cart-content'>
                    <span>{quantity} X ${price}</span>
                    <span>{name}</span>
            </div>

           </div> : null  )
          }
             
                
        </div>
      )
}


export default CartItem