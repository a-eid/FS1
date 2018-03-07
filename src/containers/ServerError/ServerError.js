import React from "react"
import { Link } from "react-router-dom"
import TopBar from "../Nav/components/TopBar"

import "../NotFound/NotFound.sass"

class NotFound extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector(".Error__message") &&
        document.querySelector(".Error__message").classList.add("Error__message--animated")
    }, 500)
  }
  render() {
    return (
      <div className="Error">
        <TopBar />
        <div className="seperator" />
        <div className="Error__message">
          <h1>500</h1>
        </div>
      </div>
    )
  }
}

export default NotFound
