import React, { Component } from "react"
import Nav from "../Nav/Nav"
import { SectionHeader } from "../components/shared"
import Header from "./Header"
import LC from "./LabeledCircle"
import "./Barometers.sass"

class Barometers extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Barometers">
          <SectionHeader text="Barometers" />
          <Header />
          <div className="Barometers__ratio">
            <div>
              <div className="barometers_item flexCenter">
                <span>LONG RATIO</span>
              </div>
              <div className="barometers_item flexCenter">
                <span>SHORT RATIO</span>
              </div>
            </div>
            <div>
              <div className="barometers_item flexCenter">
                <span className="green">0.35</span>
              </div>
              <div className="barometers_item flexCenter ">
                <span className="red">0.65</span>
              </div>
            </div>
            <div>
              <div className="barometers_item flexCenter">
                <span className="green">0.35</span>
              </div>
              <div className="barometers_item flexCenter">
                <span className="red">0.65</span>
              </div>
            </div>
            <div>
              <div className="barometers_item flexCenter">
                <span className="green">0.35</span>
              </div>
              <div className="barometers_item flexCenter">
                <span className="red">0.65</span>
              </div>
            </div>
            <div className="noBackground" />
            <div className="noBackground" />
            <div className="noBackground" />
          </div>
          <div className="Barometers__values">
            <div>
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
            </div>

            <div>
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
            </div>
            <div>
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
            </div>
            <div>
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
              <LC title="10" circleColor="#27ae60" titleColor="d8d8d8" />
            </div>
            <div className="noBackground" />
            <div className="noBackground" />
            <div className="noBackground" />
          </div>
        </div>
      </div>
    )
  }
}

export default Barometers
