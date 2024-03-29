import React from "react"
import { connect } from "react-redux"
import { SectionHeader } from "../../components/shared"
import Switch from "../../components/Switch"

const HedgePerformance = ({}) => (
  <div className="main__section__container">
    <SectionHeader text="Hedge Performance" />
    <div className="main__section">
      <div className="main__section_1c">
        <div className="card__item">
          <span> No Hedge</span>
          <span className="card__item__sub">&nbsp;(Maximum):</span>
        </div>
        <div className="card__item">
          <span> No Hedge</span>
          <span className="card__item__sub">&nbsp;(Minimum):</span>
        </div>
        <div className="card__item">
          <span> No Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="cardd__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
        <div className="card__item">
          <span> Dynamic S1 Hedge</span>
          <span className="card__item__sub">&nbsp;(Medien):</span>
        </div>
      </div>
      <div className="main__section_1c">
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>

        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span> 11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span>11.55 </span>
        </div>
        <div className="card__item flexCenter m0">
          <span>11.55 </span>
        </div>
      </div>
      <div className="noBackground" />
      <div className="noBackground" />
    </div>
  </div>
)

export default connect()(HedgePerformance) 
