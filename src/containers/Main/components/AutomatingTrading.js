import React from "react"
import { connect } from "react-redux"
import { SectionHeader } from "../../components/shared"
import Switch from "../../components/Switch"

const AutomatingTrading = ({}) => (
  <div className="main__section__container">
    <SectionHeader text="Automated Trading and Rebalancing" />
    <div className="main__section">
      <div className="main__section_1c">
        <div className="card__item">
          <span>Automated Trading: </span>
        </div>
      </div>
      <div className="main__section_1c flexCenter">
        <div className="flexCenter m0">
          <span className="switch__label">Open</span>
          <Switch checked={true} onColor="#eee" offColor="#eee" name={"opened"} onChange={f => f} />
        </div>
      </div>
      <div className="main__section_1c flexCenter">
        <div className="flexCenter m0">
          <span className="switch__label">Closed</span>
          <Switch checked={false} onColor="#eee" offColor="#eee" name={"opened"} onChange={f => f} />
        </div>
      </div>
      <div className="noBackground" />
    </div>
  </div>
)

export default connect()(AutomatingTrading)
