import React, { Component } from "react"

import "./Intro.sass"

class Intro extends Component {
  render() {
    return (
      <div className="intro__page flexCenter">
        <div className="intro__overlay" />
        <div className="intro__page__content flexCenter">
          <img src={require("./logo_s1_flat.png")} alt="S1" />
          <h3>S1 Technologies LLC</h3>
          <button className="button button--intro">ENTER NOW</button>
        </div>
      </div>
    )
  }
}

export default Intro
