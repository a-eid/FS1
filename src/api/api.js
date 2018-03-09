import axios from "axios"

const baseURL = "http://52.90.148.239:5000/api/"
var api = axios.create({
  baseURL,
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
	  host: '52.90.148.239',
	  port: 5000
	}
})

export const getComputedParams = (queryString, data) => {
  return api.get(`compute?${queryString}`, data)
}

export const editUserDetails = (id, data) => {
  return api.patch(`/s1extuser/${id}`, data)
}

export const login = data => {
  return api.post("login", data)
}

export const signup = data => {
  return api.post("s1extuser", data)
}

export const saveNewPortfolioForUser = data => {
  return api.post("portfolio", data)
}

export const getPortfoliosForUser = (id, data) => {
  return api.get(`s1extuser/${id}/portfolios`, data)
}

export const getAllPortfolios = data => {
  return api.get("portfolio", data)
}
export const getAllUsers = data => {
  return api.get("s1extuser", data)
}

export const editAdminParams = (id, data) => {
  return api.post(`admin_parameters/${id}`, data)
}

export const getAdminParams = (id, data) => {
  return api.get(`admin_parameters/${id}`, data)
}
