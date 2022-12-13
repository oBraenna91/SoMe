import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "POST";

export async function create(postData) {
    const createPostURL = API_BASE_SOCIAL + action;

    const response = await authFetch(createPostURL, {
        method, 
        body: JSON.stringify(postData)
    })
    return await response.json();
}