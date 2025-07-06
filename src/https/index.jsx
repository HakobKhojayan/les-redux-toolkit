import axios from "axios"

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const $authHost = axios.create({
    withCredentials: true,
    headers
})

export const $host = axios.create({
    headers
})