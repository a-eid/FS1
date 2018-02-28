import React, { Component } from "react"
import classnames from "classnames"
import "./NavContent.sass"

class NavContent extends Component {
  navItems = [
    { name: "Main" },
    { name: "Introduction" },
    { name: "Parameters", active: true },
    { name: "Charts" },
    { name: "Barometers" },
    { name: "Help" },
    { name: "Disclaimer" },
  ]
  render() {
    return <div className="NavContent">{this.navItems.map((item, i) => <NavContentItem key={i} {...item} />)}</div>
  }
}

const NavContentItem = ({ icon, name, active }) => (
  <div
    className={classnames("NavContentItem", {
      "NavContentItem--active": active,
    })}
  >
    <img src={require(`./icons/${name.toLowerCase()}.png`)} alt={`${name}-icon`} />
    <span>{name}</span>
  </div>
)

export default NavContent
