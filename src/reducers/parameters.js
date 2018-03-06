import * as at from "../actions/actionTypes"

const initState = {
  loading: false,
  error: null,
  data: {
    calculation_start_date: "2014-01-01T00:00:00",
    days: 15,
    id: 1,
    input_data_start_date: "2014-01-01T00:00:00",
    leverage: 1,
    long_maximum_order_size: 10,
    long_minimum_order_size: 1,
    long_number_of_trades: 1,
    long_standard_order_size: -100000,
    long_time_difference: 60,
    mlt: 2.5,
    results_start_date: "2014-01-01T00:00:00",
    short_maximum_order_size: 10,
    short_minimum_order_size: 1,
    short_number_of_trades: 1,
    short_standard_order_size: -100000,
    short_time_difference: 60,
    std: 3,
  },
}
export default (state = initState, { payload, type }) => {
  switch (type) {
    case at.GET_ADMIN_PARAMS_REQUEST:
    case at.EDIT_ADMIN_PARAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case at.GET_ADMIN_PARAMS_ERROR:
    case at.EDIT_ADMIN_PARAMS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      }
    case at.GET_ADMIN_PARAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload.data,
      }
    default:
      return state
  }
}
