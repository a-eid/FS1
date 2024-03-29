import React from "react"

import { connect } from "react-redux"
import Switch from "../../components/Switch"

const ExposureManagement = ({ opened, closed, toggleButton }) => (
  <div className="main__section__container">
    <ExposureHeader opened={opened} closed={closed} toggleButton={toggleButton} />
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
      <SecondRow className="main__section_2c" />
      <SecondRow className="main__section_3c" />
      <div className="noBackground" />
    </div>
  </div>
)

const SecondRow = ({ className }) => (
  <div className={className}>
    <div className="card__item">
      <span className="blue">LONG</span>
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
      <span className="blue date">01,July,2018</span>
    </div>
    <div className="card__item">
      <span className="blue date">Continouse</span>
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

const ExposureHeader = ({ opened, closed, toggleButton }) => (
  <div className="Exposure__header">
    <h3 className="page__header">Current Exposure Management</h3>
    <div style={{ justifyContent: "center" }}>
      <span className="switch__label">Open</span>
      <Switch checked={opened} name={"opened"} onChange={toggleButton} />
    </div>
    <div style={{ justifyContent: "center" }}>
      <span className="switch__label">Closed</span>
      <Switch checked={closed} name={"closed"} onChange={toggleButton} />
    </div>
    <div style={{ justifyContent: "center" }}>
      <span className="switch__label">new</span>
      <img src={require("./add.png")} style={{ cursor: "pointer" }} alt="new" className="new_icon" />
    </div>
  </div>
)

export default connect()(ExposureManagement) 
