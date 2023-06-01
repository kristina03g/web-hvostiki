import { $clientHost, $adminHost } from "./index";

export const createPetAndRequest = async (petAndRequest) => {
    const {data} = await $clientHost.post('api/request/givePet', petAndRequest)
    return data
}

export const createWantPetRequest = async (req_client_id, req_pet_id, purpose) => {
    req_client_id = String(req_client_id)
    const {data} = await $clientHost.post('api/request/takePet', {req_client_id, req_pet_id, purpose})
    return data
}

export const allAccepted = async () => {
    const {data} = await $clientHost.post('api/request/getAccepted')
    return data.requests
}

export const allApproved = async () => {
    const {data} = await $clientHost.post('api/request/getApproved')
    return data.requests
}

export const allRejected = async () => {
    const {data} = await $clientHost.post('api/request/getRejected')
    return data.requests
}

export const updateAcceptedRequestsToOk = async (id) => {
    const {data} = await $clientHost.put('api/request/updateAcceptedToOk/' + id, {id})
    return data.requests
}

export const updateAcceptedRequestsToCancel = async (id) => {
    const {data} = await $clientHost.put('api/request/updateAcceptedToCancel/' + id, {id})
    return data.requests
}

export const updateRejectedRequestsToCancel = async (id) => {
    const {data} = await $clientHost.put('api/request/updateRejectedToCancel/' + id, {id})
    return data.requests
}

export const updateApprovedRequestsToCancel = async (id) => {
    const {data} = await $clientHost.put('api/request/updateApprovedToCancel/' + id, {id})
    return data.requests
}

export const updateApprovedRequestsToOk = async (id) => {
    const {data} = await $clientHost.put('api/request/updateApprovedToOk/' + id, {id})
    return data.requests
}