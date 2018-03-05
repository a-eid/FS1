import axios from "axios"
const baseURL = "http://52.90.148.239:5000/api/"
var api = axios.create({
  baseURL,
  timeout: 2000,
  // headers: { "X-Custom-Header": "foobar" },
})



