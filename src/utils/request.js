import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 40000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        // if (store.getters.token) {
        //     config.headers['token'] = getToken()
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        return response
    }
)

export default service