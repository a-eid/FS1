import React, { Component } from "react"
import Nav from "../Nav/Nav"
import "./Contact.sass"

class Contact extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Contact">
          <div className="Contact__left">
            <div className="Contact__left__content">
              <h3>Contact</h3>
              <div className="Contact__card card__shadow">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="Contact__card card__shadow">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="Contact__card card__shadow">
                <input type="text" placeholder="Your phone (optional)" />
              </div>
              <div className="Contact__card card__shadow">
                <textarea type="text" placeholder="Your phone (optional)" />
              </div>
              <button className="button">
                SEND
              </button>
            </div>
          </div>
          <div className="Contact__right" />
        </div>
      </div>
    )
  }
}

export default Contact
