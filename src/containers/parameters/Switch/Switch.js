import React, { Component } from "react"
import "./Switch.css"
import { v4 } from "node-uuid"

export default class Switch extends Component {
  state = {
    on: false,
  }

  componentWillMount(){
    this.id = v4()
    this.name = v4()
  }

  render() {
    const { name, id } = this
    return (
      <div>
        <input type="checkbox" id={id} name={name} class="switch-input" />
        <label for={id} class="switch-label" />
      </div>
    )
  }
}
