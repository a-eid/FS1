import React, { Component } from "react"
import classnames from "classnames"
import { connect } from "react-redux"
import { signup } from "../../actions/thunks"

class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    errors: {
      username: "",
      email: null,
      password: null,
      confirmPassword: null,
    },
  }

  // remove errors
  errors = {
    email: null,
    password: null,
    confirmPassword: null,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: this.errors,
    })
  }

  signup = () => {
    if (this.validSignup()) {
      this.props.signup({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
    }
  }

  validSignup() {
    return true
  }

  render() {
    return (
      <div className="login__form">
        <div
          className={classnames("login__form__input", {
            "login__input--error": this.state.errors.username,
          })}
        >
          <label htmlFor="email">Username</label>
          <input name="username" type="text" id="username" onChange={this.handleChange} value={this.state.username} />
        </div>

        <div
          className={classnames("login__form__input", {
            "login__input--error": this.state.errors.email,
          })}
        >
          <label htmlFor="email">Email</label>
          <input name="email" type="text" id="email" onChange={this.handleChange} value={this.state.email} />
        </div>

        <div
          className={classnames("login__form__input", {
            "login__input--error": this.state.errors.password,
          })}
        >
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div
          className={classnames("login__form__input", {
            "login__input--error": this.state.errors.confirmPassword,
          })}
        >
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
        </div>
        <button className="button button--login" onClick={this.signup}>
          Sign Up
        </button>
      </div>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = {
  signup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
