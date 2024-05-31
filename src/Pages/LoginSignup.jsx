import React from 'react'
import './CSS/LoginSignup.css'
 const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Password'/>
        </div>
        <button>Continue</button>
    <p className="loginsignup-login"> Already have an account? <span>Login here</span></p>
    <div className="login-signup-agree">
      <input type='checkbox' name='' id=''></input>
      <p>By continuing, I agree to all the terms and policies </p>
    </div>
      </div>
    </div>
  )
}
export default LoginSignup