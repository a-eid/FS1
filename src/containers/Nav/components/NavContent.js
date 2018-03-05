import React, { Component } from "react"
import { NavLink as Link } from "react-router-dom"
// import classnames from "classnames"
import { withRouter } from "react-router-dom"
import "./NavContent.sass"

class NavContent extends Component {
  navItems = [
    { name: "Main", to: "/main" },
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

const NavContentItem = withRouter(({ icon, name, active, to, match }) => (
  <Link exact activeClassName="nav__item--active" to={to}>
    {console.log(match)}
    <div className="NavContentItem">
      {match.url.startsWith(`/${name.toLowerCase()}`) ? (
        <img src={require(`./icons/${name.toLowerCase()}-active.png`)} alt={`${name}-icon`} />
      ) : (
        <img src={require(`./icons/${name.toLowerCase()}.png`)} alt={`${name}-icon`} />
      )}
      <span>{name}</span>
    </div>
  </Link>
))

export default withRouter(NavContent)
