import { getFromLocal } from "../../handlers/storage.mjs";
import { itemFromLocal } from "../../handlers/storage.mjs";

export function headers() {
    const token = itemFromLocal('accessToken');
    return {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}`,
    }
}

export async function authFetch(url, options) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}