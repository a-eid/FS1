import React, { Component } from "react"
import Switch from "../components/Switch"
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
      <div className="Main">
      <h1>Main</h1>
        {/* <ExposureManagement opened={this.state.opened} closed={this.state.closed} toggleButton={this.toggleButton} />
        <TradingRebalancing />
        <AutomatingTrading />
        <HedgePerformance />
        <HistoricalPerformance /> */}
      </div>
    )
  }
}


export default Main
