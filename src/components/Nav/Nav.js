import React, { Component } from "react"

import "./Nav.sass"
import "./NumberIcon.sass"

class Nav extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="mainNav__logo">
          <img src={require("./logo_s1_flat.png")} alt="logo" /> <span>Technologies</span>
        </div>
        <div className="mainNav__title">
          <h4>S1 Currency Hedges and Risk Management</h4>
          <div className="mainNav__userStatus">
            <div className="mainNav__notification">
              <NumberIcon number={5} icon="envelope" />
              <NumberIcon number={5} icon="bell" />
            </div>
            <div className="mainNav__profile">
              <div className="mainNav__userInfo">
                <h5>Welcome Back</h5>
                <span>John</span>
              </div>
              <img src={require("./profile.png")} alt="user_image"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const NumberIcon = ({ number, icon }) => (
  <div className="NumberIcon">
    <span>{number}</span>
    <i class={`far fa-${icon}`} />
  </div>
)

export default Nav
