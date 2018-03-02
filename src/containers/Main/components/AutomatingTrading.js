import React from "react"
import { SectionHeader } from "../../components/shared"
import Switch from "../../components/Switch"

const AutomatingTrading = ({}) => (
  <div className="main__section__container">
    <SectionHeader text="Automated Trading and Rebalancing" />
    <div className="main__section">
      <div className="main__section_1c">
        <div class="card__item">
          <span>Automated Trading: </span>
        </div>
      </div>
      <div className="main__section_1c flexCenter">
        <div className="flexCenter m0">
          <span className="switch__label">Open</span>
          <Switch checked={true} name={"opened"} onChange={f => f} />
        </div>
      </div>
      <div className="main__section_1c flexCenter">
        <div className="flexCenter m0">
          <span className="switch__label">Closed</span>
          <Switch checked={false} name={"opened"} onChange={f => f} />
        </div>
      </div>
      <div className="noBackground" />
    </div>
  </div>
)

export default AutomatingTrading
