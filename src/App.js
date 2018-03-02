import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Parameters from "./Parameters/Parameters"
import Main from "./containers/Main/Main"
import Nav from "./containers/Nav/Nav"
import Login from "./containers/Login/Login"
import "./App.sass"

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/parameters" component={Parameters} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
