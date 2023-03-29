import React, { Component } from 'react'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName:  '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit= (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Password didn't match");
            return
        }

        try {
            const { user } =  auth.createUserWithEmailAndPassword(email, password);
              createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({[name]: value })
      }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
            <h2 className='title'> I do not have an account</h2>
            <span> Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={this.handleSubmit}>

            <div className='form-group'>
            <input 
            name="displayName" 
            type="text" 
            value={displayName} 
            required 
            onChange={this.handleChange}
            />

            <label> Name </label>
            </div>
            <div className='form-group'>
                <input 
                name="email" 
                type="email" 
                value={email} 
                required 
                onChange={this.handleChange}
                />

                <label> Email </label>
            </div>
          
            <div className='form-group'>
            <input 
            name="password" 
            type="password" 
            value={password } 
            onChange={this.handleChange} 
            required 

            />
            <label> Password </label>
            </div>

            <div className='form-group'>
            <input 
            name="confirmPassword" 
            type="password" 
            value={confirmPassword } 
            onChange={this.handleChange} 
            required 

            />
            <label>Confirm Password </label>
            </div>


            <div className='button'>
            <CustomButton type="submit"> Sign In </CustomButton>
            </div>
            </form>
      </div>
    )
  }
}

export default SignUp