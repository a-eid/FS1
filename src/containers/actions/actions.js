import * as at from "./actionTypes"

const loginRequest = () => ({
  type: at.LOGIN_REQUEST,
})

const loginFailure = error => ({
  type: at.LOGIN_FAILURE,
  payload: {
    error,
  },
})

const loginSuccess = userDate => ({
  type: at.LOGIN_REQUEST,
  payload: {
    userDate,
  },
})



