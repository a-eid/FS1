import React from "react"
import { SectionHeader } from "../../components/shared"
import Switch from "../../components/Switch"

const TradingRebalancing = ({}) => (
  <div className="main__section__container">
    <SectionHeader text="Trading and Rebalancing" />

    <div className="main__section">
      <div className="main__section_1c">
        <div className="card__item">
          <span>Heading Strategy</span>
        </div>
        <div className="card__item">
          <span>Currency Pair</span>
        </div>
        <div className="card__item">
          <span>Last Price</span>
        </div>
        <div className="card__item">
          <span>Exposure Amount</span>
          <span className="card__item__sub">(Currency 1):</span>
        </div>
        <div className="card__item">
          <span>Exposure Amount</span>
          <span className="card__item__sub">(Currency 2):</span>
        </div>
        <div className="card__item">
          <span>Starting Date:</span>
        </div>
        <div className="card__item">
          <span>End Date:</span>
        </div>
        <div className="card__item">
          <span>Prediction</span>
          <span className="card__item__sub">(Low):</span>
        </div>
        <div className="card__item">
          <span>Prediction</span>
          <span className="card__item__sub">(Mid):</span>
        </div>
        <div className="card__item">
          <span>Prediction</span>
          <span className="card__item__sub">(High)</span>
        </div>
        <div className="card__item">
          <span>Hedge Ratio:</span>
        </div>
        <div className="card__item">
          <span> Established Hedge: </span>
        </div>
        <div className="card__item">
          <span>Required Hedge: </span>
        </div>
        <div className="card__item">
          <span>Difference: </span>
        </div>
        <div className="card__item">
          <span>Difference in %: </span>
        </div>
        <div className="card__item">
          <span>Adjustment:</span>
        </div>
      </div>
      <TradingSecondRow className="main__section_2c" />
      <TradingSecondRow className="main__section_3c" />
      <div className="noBackground" />
    </div>
  </div>
)

const TradingSecondRow = ({ className }) => (
  <div className={className}>
    <div className="card__item">
      <Switch checked={false} offHandleColor="#e74c3c" offColor="#eee" name={"TODO"}  onChange={f => f} />
    </div>
    <div className="card__item">
      <span className="Blue">USD/EUR</span>
    </div>
    <div className="card__item">
      <span className="green">0.8024</span>
    </div>
    <div className="card__item">
      <input type="text" />
    </div>
    <div className="card__item">
      <span>
        <input type="text" className="red" />
      </span>
    </div>
    <div className="card__item">
      <span className="blue">01,July,2018</span>
    </div>
    <div className="card__item">
      <span className="blue">Continouse</span>
    </div>
    <div className="card__item">
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span className="blue">0.7660</span>
    </div>

    <div className="card__item">
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span />
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span />
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span />
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span />
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span />
      <span className="blue">0.7660</span>
    </div>
    <div className="card__item">
      <span className="blue">0.7660</span>
    </div>
  </div>
)

export default TradingRebalancing
