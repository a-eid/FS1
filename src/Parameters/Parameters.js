import React, { Component } from "react"
import { connect } from "react-redux"
import Nav from "../containers/Nav/Nav"
import "./Parameters.sass"
import DatePicker from "react-datepicker"
import moment from "moment"
import { editAdminParams, getAdminParams } from "../actions/thunks"

class Parameters extends Component {
  state = {
    data: this.props.data || {},
  }

  componentWillMount() {
    this.props.getAdminParams(1)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [name]: value,
      },
    })
  }

  handleDateChange = (name, date) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [name]: date,
      },
    })
  }

  handleFocus = e => {
    const { name } = e.target
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [name]: "",
      },
    })
  }

  render() {
    const { error, loading } = this.props
    const { data } = this.state

    if (loading) {
      /* loading */
    }
    if (error) {
      /* error */
    }

    return (
      <div>
        <Nav />
        <div className="Parameters">
          <div className="Parameters__content">
            <h3 className="page__header">General Parameters and Defaults</h3>
            <div className="Parameters__cards">
              <div className="Parameters__card Parameters__card__labels">
                <div className="Parameters__card__label">Para 1 Days:</div>
                <div className="Parameters__card__label">Para 2 Mlt:</div>
                <div className="Parameters__card__label">Para 3 Std:</div>
                <div className="Parameters__card__label">Leverage:</div>

                <div className="Parameters__card__label Parameters__card__label--new">
                  <span>New</span>
                  Input Data Starting Date:
                </div>
                <div className="Parameters__card__label">Input Data End Date:</div>
                <div className="Parameters__card__label">Results Starting Date:</div>
                <div className="Parameters__card__label">Results End Date:</div>
              </div>
              <div className="Parameters__card Parameters__card__values">
                <div className="Parameters__card__value">
                  {/* para 1 days  */}
                  <div className="input_value__container">
                    <input type="text" name="days" onChange={this.handleChange} value={data.days} />
                  </div>
                </div>
                <div className="Parameters__card__value">
                  {/* para 2 days  */}
                  <div className="input_value__container">
                    <input type="text" name="mlt" onChange={this.handleChange} value={data.mlt} />
                  </div>
                </div>
                <div className="Parameters__card__value">
                  {/* para 3 days  */}
                  <div className="input_value__container">
                    <input type="text" name="std" onChange={this.handleChange} value={data.std} />
                  </div>
                </div>
                <div className="Parameters__card__value">
                  {/* laverage  */}
                  <div className="input_value__container">
                    <input
                      type="text"
                      name="leverage"
                      value={parseInt(data.leverage, 10).toFixed(2)}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="Parameters__card__value">
                  <div className="input_value__container input_value__container--new">
                    <DatePicker
                      selected={moment(data.input_data_start_date)}
                      className="dateIcon"
                      onChange={date => this.handleDateChange("input_data_start_date", date)}
                    />
                  </div>
                </div>
                <div className="Parameters__card__value">
                  {/* input data ending date */}
                  <div className="dateIcon__container">
                    <div className="input_value__container">
                      <DatePicker
                        selected={data.input_data_ending_date ? moment(data.input_data_ending_date) : null}
                        className="dateIcon"
                        onChange={date => this.handleDateChange("input_data_ending_date", date)}
                        placeholderText="Continuous"
                      />
                    </div>
                  </div>
                </div>
                <div className="Parameters__card__value">
                  {/* results_start_date */}
                  <div className="dateIcon__container">
                    <div className="input_value__container">
                      <DatePicker
                        selected={moment(data.results_start_date)}
                        className="dateIcon"
                        onChange={date => this.handleDateChange("results_start_date", date)}
                      />
                    </div>
                  </div>
                </div>
                <div className="Parameters__card__value">
                  <div className="dateIcon__container">
                    <div className="input_value__container">
                      <DatePicker
                        selected={data.results_end_date ? moment(data.results_end_date) : null}
                        className="dateIcon"
                        onChange={date => this.handleDateChange("results_end_date", date)}
                        placeholderText="Continuous"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flexCenter" style={{marginBottom: "50px"}}>
              <button className="button" style={{width: "200px"}}>Save Changes</button>
            </div>
          </div>
          <div className="Parameters__image" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.parameters,
})

const mapDispatchToProps = {
  editAdminParams,
  getAdminParams,
}

export default connect(mapStateToProps, mapDispatchToProps)(Parameters)
