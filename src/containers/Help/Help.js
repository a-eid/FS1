import React, {Component} from "react"
import Nav from "../Nav/Nav"
import "./Help.sass"


class Help extends Component {
  render(){
    return (
      <div>
        <Nav />
        <div className="Help">
          <div className="Help__left"></div> 
          <div className="Help__right"></div>
        </div>
      </div>
    )
  }
}

export default Help 