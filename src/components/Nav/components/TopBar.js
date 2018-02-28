import React, { Component } from "react"

import "./TopBar.sass"
import "./NumberIcon.sass"

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="topBar__logo">
          <img src={require("./logo_s1_flat.png")} alt="logo" /> <span>Technologies</span>
        </div>
        <div className="topBar__title">
          <h4>S1 Currency Hedges and Risk Management</h4>
          <div className="topBar__userStatus">
            <div className="topBar__notification">
              <NumberIcon number={5} icon="envelope" />
              <NumberIcon number={5} icon="bell" />
            </div>
            <div className="topBar__profile">
              <div className="topBar__userInfo">
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

export default TopBar
