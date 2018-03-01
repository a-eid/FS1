import React, { Component } from "react"
import classnames from "classnames"

import Switch from "./Switch/Switch"
import SearchInput from "./SearchInput/SearchInput"

import "./ParametersCard.css"
import "./Parameters.css"
import logo from "./nav_logo.png"
import profileImg from "./profile.png"

class Parameters extends Component {
  state = {}
  render() {
    return (
      <div className="parameters">
        <Nav />
        <div className="parameters__main">
          <header>
            <h3>S1 Currency Hedges and Currency Management</h3>
            <div className="parameters__user__status">
              <div className="parameters__user__status__icons">
                <div className="parameters__user__status__icon">
                  <span>3</span>
                  <i class="far fa-envelope" />
                </div>
                <div className="parameters__user__status__icon">
                  <span>4</span>
                  <i class="far fa-bell" />
                </div>
              </div>
              <div className="parameters__user__status__profile">
                <div>
                  <h5>Welcome Back</h5>
                  <span>John</span>
                </div>
                <img src={profileImg} />
              </div>
            </div>
          </header>
          <main>
            <div className="parameters__control">
              <div className="parameters__row">
                <div className="parameters__search">
                  <SearchInput />
                  <div className="parameters__control__right">
                    <div>
                      <span>Strategy:</span>
                      <span>LONG</span>
                    </div>
                    <div>
                      <span>instrument</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>

              <div className="parameters__row">
                <div className="parameters__card card__shadow">
                  <h3>Current Exposure Manegement</h3>
                  <span>
                    <i class="fas fa-chevron-left" />
                  </span>
                </div>
              </div>

              <div className="parameters__row">
                <div className="parameters__card card__shadow">
                  <h3>Automation Trading and Rebalancing</h3>
                  <div>
                    <span className="small__label">START ALL</span>
                    <Switch />
                  </div>
                </div>
                <div className="parameters__card parameters__card--bottom card__shadow">
                  <h3>Trading and Rebalancing</h3>
                  <span>
                    <i class="fas fa-chevron-left" />
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

class Nav extends Component {
  state = {
    expanded: false,
  }

  expanNav = () => {
    console.log("huh")
    this.setState(ps => ({
      expanded: !ps.expanded,
    }))
  }
  render() {
    return (
      <div className="parameters__sidebar">
        <div className="parameters__logo">
          <img src={logo} alt="logo" />
          <span>Technologies</span>
        </div>
        <div className="parameter__nav">
          <div className="parameters__nav__expander parameters__nav__item">
            <div
              className={classnames("parameters__nav__item__inner", {
                "parameters__nav__item--active": this.state.expanded,
              })}
              onClick={this.expanNav}
            >
              <div>
                <i className="fas fa-align-left" aria-hidden="true" />
                <span>Main</span>
              </div>
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </div>
          </div>
          <div
            className={classnames("parameters__nav__items", {
              "parameters__nav__items--collapes": !this.state.expanded,
            })}
          >
            <NavItem text="Parameters" icon="fa-bars" />
            <NavItem text="Charts" icon="fa-chart-pie" />
            <NavItem text="Barometers" icon="fa-tachometer-alt" />
            <NavItem text="Help" icon="fa-question-circle" />
            <NavItem text="Disclaimer" icon="fa-hand-paper" />
          </div>
          <div className="parameters__sidebar__buttons">
            <button>Open Portfolio</button>
            <button>Save</button>
            <button>Save As</button>
          </div>
        </div>
      </div>
    )
  }
}

const NavItem = ({ text, icon }) => (
  <div className="parameters__nav__item">
    <div className="parameters__nav__item__inner">
      <div>
        <i className={`fas ${icon}`} aria-hidden="true" />
        <span>{text}</span>
      </div>
      <span />
    </div>
  </div>
)

export default Parameters
