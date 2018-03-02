import React, { Component } from "react"
import classnames from "classnames"
import Nav from "../Nav/Nav"
import "./Client.sass"

class Client extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Client">
          <div className="Client__content">
            <h3 className="page__header">Client Monitoring</h3>
            <div className="Client__table card__shadow">
              <div className="Client__table__header">
                <div className="Client__table__index">
                  <span>#</span>
                </div>
                <div className="Client__table__fn">
                  <span>First Name</span>
                </div>
                <div className="Client__table__ln">
                  <span>Last Name</span>
                </div>
                <div className="Client__table__email">
                  <span>Email</span>
                </div>
                <div className="Client__table__un">
                  <span>Username</span>
                </div>
                <div className="Client__table__pass">
                  <span>Password</span>
                </div>
                <div className="Client__table__phone">
                  <span>Phone Number</span>
                </div>
                <div className="Client__table__country">
                  <span>Country</span>
                </div>
                <div className="Client__table__access">
                  <span>Access</span>
                </div>
                <div className="Client__table__view">
                  <span />
                </div>
              </div>
              <div className="Client__table__body">
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={true} />
                <TableBodyItem allowed={true} />
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={true} />
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={true} />
                <TableBodyItem allowed={false} />
                <TableBodyItem allowed={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const TableBodyItem = ({ allowed }) => (
  <div className="Client__table__item">
    <div className="Client__table__index">
      <span>1</span>
    </div>
    <div className="Client__table__fn">
      <span>John</span>
    </div>
    <div className="Client__table__ln">
      <span>Doe</span>
    </div>
    <div className="Client__table__email">
      <span>johndoe@mail.com</span>
    </div>
    <div className="Client__table__un">
      <span>johndoe</span>
    </div>
    <div className="Client__table__pass">
      <span>johndoe123</span>
    </div>
    <div className="Client__table__phone">
      <span>+1 234 456 2345</span>
    </div>
    <div className="Client__table__country">
      <span>USA</span>
    </div>
    <div className="Client__table__access">
      <span
        className={classnames({
          green: allowed,
          red: !allowed,
        })}
      >
        {allowed ? "Allowed" : "Denied"}
      </span>
    </div>
    <div className="Client__table__view">
      <div className="Client__table__view__button">
        <span>view details</span>
      </div>
    </div>
  </div>
)

export default Client
