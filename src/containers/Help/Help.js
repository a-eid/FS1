import React, { Component } from "react"
import Nav from "../Nav/Nav"
import "./Help.sass"

class Help extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Help">
          <div className="Help__left" >
            <HelPLeftHeader>Instrument Names and Lists</HelPLeftHeader>
            <HelPLeftHeader className="blue">Currencies Names and Codes</HelPLeftHeader>
            <HelPLeftHeader>Available Currency Pair</HelPLeftHeader>
            <HelPLeftHeader>User Manual</HelPLeftHeader>
            <HelPLeftHeader>Lorem ipsum dolor sit amet</HelPLeftHeader>
            <HelPLeftHeader>Currencies Names and Codes
Currencies Names and Codes</HelPLeftHeader>
            <HelPLeftHeader>Currencies Names and Codes
Currencies Names and Codes</HelPLeftHeader>
          </div>
          <div className="Help__right" />
        </div>
      </div>
    )
  }
}

const HelPLeftHeader = ({ children, className }) => (
  <div className={`HelPLeftHeader ${className}`}>
    <h3>{children}</h3>
  </div>
)

export default Help
