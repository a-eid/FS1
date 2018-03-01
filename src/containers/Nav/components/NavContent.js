import React, { Component } from "react"
import { NavLink as Link } from "react-router-dom"
import classnames from "classnames"
import "./NavContent.sass"

class NavContent extends Component {
  navItems = [
    { name: "Main", to: "/" },
    { name: "Introduction", to: "/introduction" },
    { name: "Parameters", to: "/parameters" },
    { name: "Charts", to: "/charts" },
    { name: "Barometers", to: "/barometers" },
    { name: "Help", to: "/help" },
    { name: "Disclaimer", to: "/disclaimer" },
  ]
  render() {
    return <div className="NavContent">{this.navItems.map((item, i) => <NavContentItem key={i} {...item} />)}</div>
  }
}

const NavContentItem = ({ icon, name, active, to }) => (
  <Link exact activeClassName="nav__item--active" to={to}>
    <div className="NavContentItem">
      <img src={require(`./icons/${name.toLowerCase()}.png`)} alt={`${name}-icon`} />
      <span>{name}</span>
    </div>
  </Link>
)

export default NavContent
