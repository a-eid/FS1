import React, { Component } from "react"
import "./Login.sass"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="Login">
        <div className="login__left flexCenter">
          <div className="login__right__overlay login__left__overlay" />
          <div className="login__left__content">
            <div className="login__nav">
              <h3 className="active">Log In</h3>
              <h3 className="">Sign Up</h3>
            </div>
            <div className="login__form">
              <div className="login__form__input">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" id="email" onChange={this.handleChange} value={this.state.email} />
              </div>

              <div className="login__form__input">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" onChange={this.handleChange} value={this.state.password} />
                <p className="flexCenter">Forgot password ?</p>
                <button className="button button--login">LOG IN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="login__right">
          <div className="login__right__overlay" />
          <div className="login__right__content">
            <img src={require("./logo_s1_flat.png")} alt="S1" />
            <h3>S1 Currency Risk Manage</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
