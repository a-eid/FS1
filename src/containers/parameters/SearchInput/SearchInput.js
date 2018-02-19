import React, { Component } from "react"
import "./SearchInput.css"

export default class SearchInput extends Component {
  state = {
    value: "",
  }

  render() {
    return (
      <div className="__search card__shadow">
        <input type="text" placeholder="Search" />
        <i class="fas fa-search" />
      </div>
    )
  }
}
