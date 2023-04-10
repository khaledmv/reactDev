import React from 'react'
import './custom-button.style.scss'
const CustomButton = ({children, inverted, ...otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : '' }`} {...otherProps}>
     {children}
    </button>
  )
}

export default CustomButton