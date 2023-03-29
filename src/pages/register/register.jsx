import React from 'react'
import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/sign-up'

import './register.styles.scss';

const Register = () => {
  return (
     <div className='signup-box'>
        <SignIn/>
       <SignUp/>
     </div>
  )
}

export default Register