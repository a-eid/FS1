import React, { Component } from "react"
import Nav from "../Nav/Nav"
import ExpandCard from "./ExpandCard"

import "./Introduction.sass"

class Introduction extends Component {
  state = {}
  render() {
    return (
      <div>
        <Nav />
        <div className="Introduction">
          <div className="introduction__left">
            <div className="introduction__content">
              <h3 class="page__header">Current Exposure Management</h3>
              <div className="introduction__card">
                <ExpandCard title="Why currency exposure risk management" expanded={true}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis tempora laboriosam veritatis temporibus recusandae nemo quo, laudantium sapiente, nihil itaque unde impedit id asperiores fugit? Magni, omnis libero! Nemo, corporis. 
                </ExpandCard>
                <ExpandCard title="Currency exposure risk management option">..</ExpandCard>
                <ExpandCard title="S1 Active Currency Risk Manag">..</ExpandCard>
                <ExpandCard title="The innovative concept of “Continuous Risk Management”">..</ExpandCard>
                <ExpandCard title="The innovative concept of “Continuous Risk Management”">..</ExpandCard>
              </div>
              <footer className="introduction__footer">
                <p>
                  Telia Company: Fourth Quarter Results Show Impact Of New Strategy{" "}
                  <span className="blue">Jan, 15. 2018</span> About : 
                  <span className="blue">Telia Company (TLSNF)</span>
                </p>
                <p>
                  On Friday, January 26, 2017, Swedish telecommunications giant Telia Company (OTCPK:TLSNF) announced
                  its fourth quarter and full-year 2017 earnings results. Telia, like many international
                  telecommunications firms, is a historically very stable company and these results reflect that. The
                  results were overall more or less what we expected, with a small amount of organic growth marred by
                  some adverse currency movements. Telia cont
                </p>
              </footer>
            </div>
          </div>
          <div className="introduction__right" />
        </div>
      </div>
    )
  }
}

export default Introduction
