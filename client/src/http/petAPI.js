import { $clientHost, $adminHost } from "./index";

export const fetchCats = async () => {
    const {data} = await $clientHost.get('api/pet/allCats')
    return data.pets
}

export const fetchOneCat = async (id) => {
    const {data} = await $clientHost.post('api/pet/takeCat/' + id)
    return data.pet
}

export const fetchDogs = async () => {
    const {data} = await $clientHost.get('api/pet/allDogs')
    return data.pets
}

export const fetchOneDog = async (id) => {
    const {data} = await $clientHost.post('api/pet/takeDog/' + id)
    return data.pet
}