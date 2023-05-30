import axios from "axios";

const $clientHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $adminHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const adminInterceptor = config => {
    config.headers.admin = `Bearer ${localStorage.getItem('token')}`
    return config
}

$adminHost.interceptors.request.use(adminInterceptor)

export {
    $clientHost,
    $adminHost
}