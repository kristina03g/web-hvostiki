import { $clientHost, $adminHost } from "./index";

export const createDonat = async (dnt_client_id, amount, purpose) => {
    dnt_client_id = String(dnt_client_id)
    const {data} = await $clientHost.post('api/donation/addDonation', {dnt_client_id, amount, purpose})
    return data
}

export const sortDonatAmount = async () => {
    const {data} = await $clientHost.post('api/donation/donationStatisticsAmount')
    return data.donations
}

export const sortDonatDate = async () => {
    const {data} = await $clientHost.post('api/donation/donationStatisticsDate')
    return data.donations
}