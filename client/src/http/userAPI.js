import { $clientHost, $adminHost } from "./index";
import jwt_decode from "jwt-decode";

export const registrationClient = async (client_name, client_bday, client_email, client_login, client_password, client_phone, client_address) => {
    const {data} = await $clientHost.post('api/client/registration', {client_name, client_bday, client_email, client_login, client_password, client_phone, client_address})
    localStorage.setItem('token', data)
    return jwt_decode(data)
}

export const loginUser = async (login, password) => {
    const {data} = await $clientHost.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const checkUser = async (login) => {
    const {data} = await $clientHost.post('api/user/check', {login})
    return data.isAdmin
}

export const getPersonalCabinet = async (req_client_id) => {
    const {data} = await $clientHost.post('api/request/personalCabinet/' + req_client_id, {req_client_id})
    return data.requests
}

export const clientRegs = async () => {
    const {data} = await $clientHost.post('api/client/clientStatistics')
    return data
}