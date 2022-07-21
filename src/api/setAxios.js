import axios from 'axios'
//axios.defaults.baseURL = 'http://192.168.1.222:9001/'
//axios.defaults.baseURL = 'http://localhost:3333/'
const service = axios.create({
  timeout: 3000,
})

service.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    console.log(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    let res = {}
    res.status = response.data.code
    res.data = response.data.data
    return res

    //return config
  },
  (error) => {
    console.log(error)
  }
)

export default service
