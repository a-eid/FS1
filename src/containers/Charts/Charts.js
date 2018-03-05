import React, { Component } from "react"
import Nav from "../Nav/Nav"
import ChartCard from "./components/ChartCard"
import Switch from "../components/Switch"
import "./Charts.sass"

class Charts extends Component {
  state = {
    instrument: true,
  }

  handleToggle = (name, checked) => {
    this.setState({
      [name]: checked,
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="Charts">
          <div className="Charts__topRow">
            <div className="Charts__topRow__left" />
            <div className="Charts__topRow__right">
              <div>
                <span className="switch__label">Strategy</span>
                <span className="blue switch__label">LONG</span>
              </div>
              <div>
                <span className="switch__label">Instrument</span>
                <Switch checked={this.state.instrument} name={"instrument"} onChange={this.handleToggle} />
              </div>
            </div>
          </div>
          <div className="Charts__row">
            <ChartCard title="Current Hedge" />
          </div>
          <div className="Charts__row">
            <ChartCard title="Historical Culminative"/>
            <ChartCard title="Last Price" />
          </div>
          <div className="Charts__row">
            <ChartCard title="Historical Rolling Yearly" />
          </div>
        </div>
      </div>
    )
  }
}

export default Charts
