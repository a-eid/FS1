import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Parameters from "./Parameters/Parameters"
import Main from "./containers/Main/Main"
import Auth from "./containers/Auth/Auth"
import Intro from "./containers/Intro/Intro"
import Introduction from "./containers/Introduction/Introduction"
import Charts from "./containers/Charts/Charts"
import Barometers from "./containers/Barometers/Barometers"
import Help from "./containers/Help/Help"
import Disclaimer from "./containers/Disclaimer/Disclaimer"
import Contact from "./containers/Contact/Contact"
import Client from "./containers/Client/Client"
import ServerError from "./containers/ServerError/ServerError"
import NotFound from "./containers/NotFound/NotFound"
import "./App.sass"
// import 'react-datepicker/dist/react-datepicker.css';
import "react-datepicker/dist/react-datepicker-cssmodules.css"

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/main" component={Main} />
            <Route path="/auth" component={Auth} />
            <Route path="/parameters" component={Parameters} />
            <Route path="/intro" component={Intro} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/charts" component={Charts} />
            <Route path="/barometers" component={Barometers} />
            <Route path="/help" component={Help} />
            <Route path="/Disclaimer" component={Disclaimer} />
            <Route path="/contact" component={Contact} />
            <Route path="/client" component={Client} />
            <Route path="/500" component={ServerError} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
