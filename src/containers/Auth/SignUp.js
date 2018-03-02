import React, { Component } from "react"

class SignUp extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div className="login__form">
        <div className="login__form__input">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" id="email" onChange={this.handleChange} value={this.state.email} />
        </div>

        <div className="login__form__input">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="login__form__input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
        </div>
        <button className="button button--login">Sign Up</button>
      </div>
    )
  }
}

export default SignUp
