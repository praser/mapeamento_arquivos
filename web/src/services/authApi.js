import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
})

const authApi = {
  authenticate: async (username, password) => axios({
    method: 'post',
    url: 'authenticate',
    data: {
      credentials: { username, password }
    }
  })
}

export default authApi;