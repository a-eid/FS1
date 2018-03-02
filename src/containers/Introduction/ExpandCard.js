import React, { Component } from "react"
import classnames from "classnames"
import "./ExpandCard.sass"

class ExpandCard extends Component {
  state = {
    expanded: this.props.expanded || false,
  }
  handleHeaderClick = () => {
    this.setState(ps => ({
      expanded: !ps.expanded,
    }))
  }
  render() {
    const { title, children } = this.props
    return (
      <div
        className={classnames("ExpandCard", {
          "ExpandCard--expanded": this.state.expanded,
        })}
      >
        <div className="ExpandCard__header" onClick={this.handleHeaderClick}>
          <h3>{title}</h3>
          <span className="ExpandCard__icon flexCenter">
            <img src={require("./expandIcon.png")} alt="expands" />
          </span>
        </div>
        <div className="ExpandCard__body">
          <div className="ExpandCard__body__content">
            <p>{children}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpandCard
