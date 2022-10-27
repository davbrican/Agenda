import React from 'react'
import "../style/login.css";

const Signin = () => {
  return (
    <div className='center'>
      <form action="">
        Sign in
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="button-8" type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Signin