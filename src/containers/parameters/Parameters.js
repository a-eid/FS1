import React, { Component } from "react"

class Parameters extends Component {
  state = {}
  render() {
    return (<div className="parameters" >
      <Nav />
    </div>)
  }
}

const Nav = () => (
  <div className="parameters__nav">
    <div className="parameters__logo">
      nav
    </div>
  </div>
)

export default Parameters