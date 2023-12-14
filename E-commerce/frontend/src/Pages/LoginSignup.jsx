import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' required/>
            <input type="email" placeholder='Email Address' required/>
            <input type="password" placeholder='Password' required/>
            
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Don't have an account? <span>Sign up here</span></p>
         <div className="loginsignup-login">
            <input type="checkbox" name='' id='' />
            By continue, i agree to the terms of use & privacy policy.
         </div>
         
    </div>
    
</div>
  )
}
export default LoginSignup
