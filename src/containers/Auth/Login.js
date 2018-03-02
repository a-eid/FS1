import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login = () => {
    const {history: {push}} = this.props
    push("/main")
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
          <p className="flexCenter">Forgot password ?</p>
          <button className="button button--login" onClick={this.login}>
            LOG IN
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
