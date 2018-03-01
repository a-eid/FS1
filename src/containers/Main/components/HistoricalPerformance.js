import React from "react"
import { SectionHeader } from "./shared"
import Switch from "../../components/Switch"

const HistoricalPerformance = ({}) => (
  <div className="main__section__container">
    <SectionHeader text="Historical Culminative Performance" />
    <div className="main__section">
      <div className="main__section_1c">
        <div class="card__item">
          <span>No Hedge</span>
          <span className="car__item__sub">&nbsp;(Culminative):</span>
        </div>
        <div class="card__item">
          <span>No Hedge</span>
          <span className="car__item__sub">&nbsp;(Culminative):</span>
        </div>
        <div class="card__item">
          <span>No Hedge</span>
          <span className="car__item__sub">&nbsp;(Culminative):</span>
        </div>
      </div>
      <div className="main__section_1c">
        <div className="card__item flexCenter m0">
          <span>-14.11%</span>
        </div>
        <div className="card__item flexCenter m0">
          <span>-14.11%</span>
        </div>
        <div className="card__item flexCenter m0">
          <span>-14.11%</span>
        </div>
      </div>
      <div className="noBackground" />
      <div className="noBackground" />
    </div>
  </div>
)

export default HistoricalPerformance
