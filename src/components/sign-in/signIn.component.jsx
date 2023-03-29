import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

export class SignIn extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
  }

   handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value })
  }

  render() {
    
    return (
      <div className='sign-in'>
          <h2> I already have an account</h2>
          <span> Sign in with your email and password </span>

          <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
          <input 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            onChange={this.handleChange}
            />

            <label> Email </label>
          </div>
           <div className='form-group'>
           <input 
            name="password" 
            type="password" 
            value={this.state.password } 
            onChange={this.handleChange} 
            required 

            />
            <label> Password </label>
           </div>
            <div className='button'>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle}> SignIn with Google </CustomButton>
            </div>
          </form>
      </div>
    )
  }
}

export default SignIn