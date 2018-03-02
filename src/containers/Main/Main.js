import React, { Component } from "react"
import Switch from "../components/Switch"
import Nav from "../Nav/Nav"
import ExposureManagement from "./components/ExposureManagement"
import TradingRebalancing from "./components/TradingRebalancing"
import AutomatingTrading from "./components/AutomatingTrading"
import HedgePerformance from "./components/HedgePerformance"
import HistoricalPerformance from "./components/HistoricalPerformance"

import "./Main.sass"

class Main extends Component {
  state = {
    opened: false,
    closed: false,
  }

  toggleButton = (name, checked) => {
    this.setState({
      [name]: checked,
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="Main">
          <ExposureManagement opened={this.state.opened} closed={this.state.closed} toggleButton={this.toggleButton} />
          <TradingRebalancing />
          <AutomatingTrading />
          <HedgePerformance />
          <HistoricalPerformance />
        </div>
      </div>
    )
  }
}

export default Main
