import React, { useState } from 'react'
import { Session } from '../requests'

const SignInPage = props => {
  const [errors, setErrors] = useState([])

    const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget: form} = event;
    const formData = new FormData(form)

    
    
    Session.create({
      email: formData.get('email'),
      password: formData.get('password'),
    }).then(data => {
      if (data.status === 404){
        setErrors([...errors, {message: "Wrong Email or Password"}]);
      } else {
        props.history.push('/');
        if(typeof props.onSignIn === "function"){
          props.onSignIn();
        }
      }
    });
  };

  return (
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 ? (
          <div>
            <div>Failed to Sign In</div>
            <p>{errors.map(error => error.message).join(", ")}</p>
          </div>
        ) : (
          ""
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Sign In" />
      </form>
    </main>
  )
}

export default SignInPage