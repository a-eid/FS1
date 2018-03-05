import React, { Component } from "react"

import "./ChartCard.sass"

class ChartCard extends Component {
  render() {
    return (
      <div className="ChartCard card__shadow">
        <div className="ChartCard__head">
          <span>{this.props.title || "untiteled"}</span>
        </div>
        <div className="ChartCard__body" >
          TODO
        </div>
        <div className="ChartCard__footer">

            <div className="ChartCard__color">
              <span className="ChartCard__color--blue" />
              <span className="ChartCard__color__title">Name 1</span>
            </div>

            <div className="ChartCard__color">
              <span className="ChartCard__color--green" />
              <span className="ChartCard__color__title">Name 2</span>
            </div>

            <div className="ChartCard__color">
              <span className="ChartCard__color--red" />
              <span className="ChartCard__color__title">Name 3</span>
            </div>

        </div>
      </div>
    )
  }
}

export default ChartCard
