import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import loginimg from '../assets/loginimg.png'
import logo from '../assets/logo.png'
import text from '../assets/text.png'
import zoroinc from '../assets/zoroInc.png'
import '../checkbox.css'

import '../App.css'

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: '', password: '' })
  const submitHandler = (e) => {
    e.preventDefault()
    Login(details)
  }
  return (
    <div className="d-xl-flex ">
      <div className="rounded " id="raunded">
        <img src={logo} className="logo" />
        <img src={text} className="text" />
        <img src={zoroinc} className="zoroinc" />
        <img src={loginimg} />
      </div>

      <div className="rightBlock">
        <span>Welcome back</span>
        <form onSubmit={submitHandler} className="form">
          <div className="form-inner ">
            <span className="loginAcc">Login to your account</span>
            {error != '' ? <div className="error">{error}</div> : ''}

            <div className="form-group">
              <label for="email">Username or Email</label>
              <input
                className="form-control formInput"
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <label for="password">Password</label>
              <input
                className="form-control formInput"
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <div className="d-xl-flex justify-content-between">
              <div id="ForgotPassword">
                <input className="inp-cbx" id="cbx" type="checkbox" />
                <label class="cbx" for="cbx">
                  <span>
                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1" />
                    </svg>
                  </span>
                  <span>Remember me</span>
                </label>

                <a href="/" className="forgotPass">
                  Forgot password?
                </a>
              </div>
            </div>
            <input type="submit" value="Login now" className="inputButton" />
            {/* <span className="bottomLink">
                <a href="/">Don`t have an account? </a> Ask the link from your
                teacher
              </span> */}
          </div>
        </form>
        <div>
          <span className="bottomLink">
            <a href="/">Don`t have an account? </a> Ask the link from your
            teacher
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
