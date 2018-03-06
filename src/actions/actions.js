import * as at from "./actionTypes"

export const loginRequest = () => ({
  type: at.LOGIN_REQUEST,
})

export const loginFailure = error => ({
  type: at.LOGIN_ERROR,
  payload: {
    error,
  },
})

export const loginSuccess = userDate => ({
  type: at.LOGIN_REQUEST,
  payload: {
    userDate,
  },
})

export const signupRequest = () => ({
  type: at.SIGNUP_REQUEST,
})

export const signupFailure = error => ({
  type: at.SIGNUP_ERROR,
  payload: {
    error,
  },
})

export const signupSuccess = userDate => ({
  type: at.SIGNUP_SUCCESS,
  payload: {
    userDate,
  },
})

export const getComputedParamsRequest = () => ({
  type: at.GET_COMPUTED_PARAMS_REQUEST,
})

export const getComputedParamsSuccess = data => ({
  type: at.GET_COMPUTED_PARAMS_SUCCESS,
  payload: {
    data,
  },
})

export const getComputedParamsError = error => ({
  type: at.GET_COMPUTED_PARAMS_ERROR,
  payload: {
    error,
  },
})

export const editUserDetailsRequest = () => ({
  type: at.EDIT_USER_REQUEST,
})

export const editUserDetailsError = error => ({
  type: at.EDIT_USER_ERROR,
  payload: {
    error,
  },
})

export const editUserDetailsSuccess = data => ({
  type: at.EDIT_USER_SUCCESS,
  payload: {
    data,
  },
})

export const saveNewPortfolioForUserRequest = () => ({
  type: at.SAVE_PORTFOLIO_REQUEST,
})

export const saveNewPortfolioForUserError = error => ({
  type: at.SAVE_PORTFOLIO_ERROR,
  payload: {
    error,
  },
})

export const saveNewPortfolioForUserSuccess = data => ({
  type: at.SAVE_PORTFOLIO_SUCCESS,
  payload: {
    data,
  },
})

export const getPortfoliosForUserRequest = () => ({
  type: at.GET_PORTFOLIOS_REQUEST,
})

export const getPortfoliosForUserError = error => ({
  type: at.GET_PORTFOLIOS_REQUEST,
  payload: {
    error,
  },
})

export const getPortfoliosForUserSuccess = data => ({
  type: at.GET_PORTFOLIOS_REQUEST,
  payload: {
    data,
  },
})

export const getAllPortfoliosRequest = () => ({
  type: at.GET_ALL_PORTFOLIOS_REQUEST,
})

export const getAllPortfoliosError = error => ({
  type: at.GET_ALL_PORTFOLIOS_ERROR,
  payload: {
    error,
  },
})

export const getAllPortfoliosSuccess = data => ({
  type: at.GET_ALL_PORTFOLIOS_SUCCESS,
  payload: {
    data,
  },
})

export const getAllUsersRequest = () => ({
  type: at.GET_ALL_USERS_REQUEST,
})

export const getAllUsersError = error => ({
  type: at.GET_ALL_USERS_ERROR,
  payload: {
    error,
  },
})

export const getAllUsersSuccess = data => ({
  type: at.GET_ALL_USERS_SUCCESS,
  payload: {
    data,
  },
})

export const editAdminParamsRequest = () => ({
  type: at.EDIT_ADMIN_PARAMS_REQUEST,
})

export const editAdminParamsError = error => ({
  type: at.EDIT_ADMIN_PARAMS_ERROR,
  payload: {
    error,
  },
})

export const editAdminParamsSuccess = data => ({
  type: at.EDIT_ADMIN_PARAMS_SUCCESS,
  payload: {
    data,
  },
})

export const getAdminParamsRequest = () => ({
  type: at.GET_ADMIN_PARAMS_REQUEST,
})

export const getAdminParamsError = error => ({
  type: at.GET_ADMIN_PARAMS_ERROR,
  payload: {
    error,
  },
})

export const getAdminParamsSuccess = data => ({
  type: at.GET_ADMIN_PARAMS_REQUEST,
  payload: {
    data,
  },
})
