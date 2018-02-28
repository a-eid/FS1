import React, { Component } from "react"
import "./Parameters.sass"

class Parameters extends Component {
  render() {
    return (
      <div className="Parameters">
        <div className="Parameters__content">
          <h3>General Parameters and Defaults</h3>
          <div className="Parameters__cards">
            <div className="Parameters__card Parameters__card__labels">
              <span className="Parameters__card__label">Para 1 Days:</span>
              <span className="Parameters__card__label">Para 2 Mit:</span>
              <span className="Parameters__card__label">Para 3 Std:</span>
              <span className="Parameters__card__label">Leverage:</span>
              <span className="Parameters__card__label Parameters__card__label--new">
                <span><span>New</span></span>
                <span>Input Date Starting Date:</span>
              </span>
              <span className="Parameters__card__label">Input Date End Date:</span>
              <span className="Parameters__card__label">Results Starting Date:</span>
              <span className="Parameters__card__label">Results End Date:</span>
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
            </div>
          </div>
        </div>
        <div className="Parameters__image" />
      </div>
    )
  }
}

export default Parameters
