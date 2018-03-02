import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Parameters from "./Parameters/Parameters"
import Main from "./containers/Main/Main"
import Login from "./containers/Login/Login"
import Intro from "./containers/Intro/Intro"
import Introduction from "./containers/Introduction/Introduction"
import Charts from "./containers/Charts/Charts"
import Barometers from "./containers/Barometers/Barometers"
import Help from "./containers/Help/Help"
import Disclaimer from "./containers/Disclaimer/Disclaimer"
import "./App.sass"

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          {/* <Nav /> */}
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/parameters" component={Parameters} />
          <Route path="/intro" component={Intro} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/charts" component={Charts} />
          <Route path="/barometers" component={Barometers} />
          <Route path="/help" component={Help} />
          <Route path="/Disclaimer" component={Disclaimer} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
