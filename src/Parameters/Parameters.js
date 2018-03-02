import React, { Component } from "react"
import Nav from "../containers/Nav/Nav"
import "./Parameters.sass"
// import DatePicker from "react-datepicker"
// import moment from "moment"

class Parameters extends Component {
  state = {
    dataStartDate: null,
    dataEndDate: null,
    resultStartDate: null,
    resultEndDate: null,
  }

  render() {
    return (
      <div >
      <Nav />
      <div className="Parameters">
        <div className="Parameters__content">
          <h3 className="page__header">General Parameters and Defaults</h3>
          <div className="Parameters__cards">
            <div className="Parameters__card Parameters__card__labels">
              <div className="Parameters__card__label">Para 1 Days:</div>
              <div className="Parameters__card__label">Para 2 Mit:</div>
              <div className="Parameters__card__label">Para 3 Std:</div>
              <div className="Parameters__card__label">Leverage:</div>

              <div className="Parameters__card__label Parameters__card__label--new">
                <span>New</span>
                Input Date Starting Date:
              </div>
              <div className="Parameters__card__label">Input Date End Date:</div>
              <div className="Parameters__card__label">Results Starting Date:</div>
              <div className="Parameters__card__label">Results End Date:</div>
            </div>
            <div className="Parameters__card Parameters__card__values">
              <div className="Parameters__card__value">
                <input type="text" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" />
              </div>
              <div className="Parameters__card__value Parameters__card__value--new">
                <input type="text" className="dateIcon" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" className="dateIcon" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" className="dateIcon" />
              </div>
              <div className="Parameters__card__value">
                <input type="text" className="dateIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="Parameters__image" />
      </div>
      </div>
    )
  }
}

export default Parameters
