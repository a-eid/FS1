import React, { Component } from "react"
import Parameters from "./containers/parameters/Parameters"
import "./App.css"

class App extends Component {
  state = {}
  render() {
    return (
      <div className="wrapper">
        <Parameters />
      </div>
    )
  }
}

export default App
