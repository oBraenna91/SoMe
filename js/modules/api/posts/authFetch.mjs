import { getFromLocal } from "../../storage/index.mjs";
/**
 * This function contains the necessary headers of the authorized
 * API call. It retrieves the accesstoken from localstorage.
 */
export function headers() {
    const token = getFromLocal('accessToken');
    return {
        'Content-Type' : 'application/json',
        Authorization : `Bearer ${token}`,
    }
}
/**
 * This function sends an authorized API call.
 * @param {string} url this is the URL where you want to send the request.
 * @param options this is the options of the request, such as
 * what kind of request you will send and what body you will send.
 * (for examples, see JS Docs for other files in /posts folder)
 */
export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}