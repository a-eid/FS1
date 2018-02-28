import React, { Component } from "react"
// import Parameters from "./containers/parameters/Parameters"
import Nav from "./components/Nav/Nav"
import Parameters from "./components/Parameters/Parameters"
import "./App.sass"

class App extends Component {
  state = {}
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Parameters />
      </div>
    )
  }
}

export default App
