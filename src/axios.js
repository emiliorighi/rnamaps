import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_PATH

const base = axios.create({
  baseURL:"https://api.flybase.org/api/v1.0",
  headers: {
    "Content-type": "application/json"
  }
})

// base.interceptors.response.use(response => {

// }, error => {
//   return Promise.reject(error)
// });

export default {
    flyBase: base,
}