import React from 'react'

const CustomButton = ({children, ...otherProps}) => {
  return (
    <button className='custom-buton' {...otherProps}>
     {children}
    </button>
  )
}

export default CustomButton