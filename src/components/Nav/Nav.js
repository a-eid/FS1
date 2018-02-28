import React, { Component } from "react"
import TopBar from "./components/TopBar"
import NavContent from "./components/NavContent"

import "./Nav.sass"

class Nav extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <NavContent />
      </div>
    )
  }
}

export default Nav
