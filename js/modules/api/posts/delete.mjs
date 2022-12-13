import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "DELETE";

export async function remove(id) {
    if(!id) {
        throw new Error("delete requires postID")
    }
    const removePostURL = `${API_BASE_SOCIAL}${action}/${id}`

    const response = await authFetch(removePostURL, {
        method, 
    }) 
    return await response.json();
}