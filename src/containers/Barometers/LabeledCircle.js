import React from "react"
import "./LabeledCircle.sass"

export default ({ title, circleColor, titleColor }) => (
  <div className="LabeledCircle barometers_item flexCenter">
    <span className="LabeledCircle__title" style={{ backgroundColor: titleColor }}>
      {title}
    </span>
    <span className="LabeledCircle__circle" style={{ backgroundColor: circleColor }} />
  </div>
)
