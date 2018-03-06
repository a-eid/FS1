import * as api from "../api/api"
import * as actions from "./actions"

export const getComputedParams = (queryString, data) => dispatch => {
  const { getComputedParamsRequest, getAdminParamsError, getAdminParamsSuccess } = actions
  dispatch(getComputedParamsRequest())
  api
    .getComputedParams(queryString, data)
    .then(res => {
      dispatch(getAdminParamsSuccess(res.data))
    })
    .catch(error => dispatch(getAdminParamsError(error)))
}

export const editUserDetails = (id, data) => dispatch => {
  const { editUserDetailsRequest, editAdminParamsError, editAdminParamsSuccess } = actions
  dispatch(editUserDetailsRequest())
  api
    .editUserDetails(id, data)
    .then(res => {
      dispatch(editAdminParamsSuccess(res.data))
    })
    .catch(error => dispatch(editAdminParamsError(error)))
}

export const login = data => dispatch => {
  const { loginFailure, loginRequest, loginSuccess } = actions
  dispatch(loginRequest())
  api
    .login(data)
    .then(res => {
      dispatch(loginSuccess(res.data))
    })
    .catch(error => {
      dispatch(loginFailure(error))
    })
}

export const signup = data => dispatch => {
  const { signupRequest, signupFailure, signupSuccess } = actions
  dispatch(signupRequest())
  api
    .signup(data)
    .then(res => {
      dispatch(signupSuccess(res.data))
    })
    .catch(error => {
      dispatch(signupFailure(error))
    })
}

export const saveNewPortfolioForUser = data => dispatch => {
  const { saveNewPortfolioForUserError, saveNewPortfolioForUserRequest, saveNewPortfolioForUserSuccess } = actions
  dispatch(saveNewPortfolioForUserRequest())
  api
    .saveNewPortfolioForUser(data)
    .then(res => {
      dispatch(saveNewPortfolioForUserSuccess(res.data))
    })
    .catch(error => {
      dispatch(saveNewPortfolioForUserError(error))
    })
}

export const getPortfoliosForUser = (id, data) => dispatch => {
  const { getPortfoliosForUserError, getPortfoliosForUserRequest, getPortfoliosForUserSuccess } = actions
  dispatch(getPortfoliosForUserRequest())
  api
    .getPortfoliosForUser(id, data)
    .then(res => {
      dispatch(getPortfoliosForUserSuccess(res.data))
    })
    .catch(error => {
      dispatch(getPortfoliosForUserError(error))
    })
}

export const getAllPortfolios = data => dispatch => {
  const { getAllPortfoliosError, getAllPortfoliosRequest, getAllPortfoliosSuccess } = actions
  dispatch(getAllPortfoliosRequest())
  api
    .getAllPortfolios(data)
    .then(res => {
      dispatch(getAllPortfoliosSuccess(res.data))
    })
    .catch(error => {
      dispatch(getAllPortfoliosError(error))
    })
}
export const getAllUsers = data => dispatch => {
  const { getAllUsersError, getAllUsersRequest, getAllUsersSuccess } = actions
  dispatch(getAllUsersRequest())
  api
    .getAllUsers(data)
    .then(res => {
      dispatch(getAllUsersSuccess(res.data))
    })
    .catch(error => {
      dispatch(getAllUsersError(error))
    })
}

export const editAdminParams = (id, data) => dispatch => {
  const { editAdminParamsError, editAdminParamsRequest, editAdminParamsSuccess } = actions
  dispatch(editAdminParamsRequest())
  api
    .editAdminParams(id, data)
    .then(res => {
      dispatch(editAdminParamsSuccess(res.data))
    })
    .catch(error => {
      dispatch(editAdminParamsError(error))
    })
}

export const getAdminParams = (id, data) => dispatch => {
  const { getAdminParamsError, getAdminParamsRequest, getAdminParamsSuccess } = actions
  dispatch(getAdminParamsRequest())
  api
    .getAdminParams(id, data)
    .then(res => {
      dispatch(getAdminParamsSuccess(res.data))
    })
    .catch(error => {
      dispatch(getAdminParamsError(error))
    })
}
