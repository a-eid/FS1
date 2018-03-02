import React, { Component } from "react"
import Nav from "../Nav/Nav"
import "./Help.sass"

class Help extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Help">
          <div className="Help__left">
            <HelPLeftHeader>Instrument Names and Lists</HelPLeftHeader>
            <HelPLeftHeader className="blue">Currencies Names and Codes</HelPLeftHeader>
            <HelPLeftHeader>Available Currency Pair</HelPLeftHeader>
            <HelPLeftHeader>User Manual</HelPLeftHeader>
            <HelPLeftHeader>Lorem ipsum dolor sit amet</HelPLeftHeader>
            <HelPLeftHeader>Currencies Names and Codes Currencies Names and Codes</HelPLeftHeader>
            <HelPLeftHeader>Currencies Names and Codes Currencies Names and Codes</HelPLeftHeader>
          </div>
          <div className="Help__right">
            <div className="Help__right__content">
              <h3>Product Names</h3>
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
              <HelpRow text1="Application Names" text2="Official Names" text3="RIP Codes" text4="1 Month  Depo RIP Codes" />
            </div>
          </div>
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

const HelpRow = ({text1, text2 , text3 , text4}) => (
  <div className="HelpRow">
    <div>{text1}</div>
    <div>{text2}</div>
    <div>{text3}</div>
    <div>{text4}</div>
  </div>
)

export default Help
