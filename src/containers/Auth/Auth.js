import React, { Component } from "react"
import { NavLink as Link, Route, Switch } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"

import "./Login.sass"

class Auth extends Component {
  render() {
    return (
      <div className="Login">
        <div className="login__left flexCenter">
          <div className="login__right__overlay login__left__overlay" />
          <div className="login__left__content">
            <div className="login__nav">
              <Link exact to="/auth" activeClassName="active">
                Log In
              </Link>
              <Link to="/auth/signup" activeClassName="active">
                Sign Up
              </Link>
            </div>

            <Switch>
              <Route exact path="/auth" component={Login} />
              <Route path="/auth/signup" component={SignUp} />
            </Switch>
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

export default Auth
