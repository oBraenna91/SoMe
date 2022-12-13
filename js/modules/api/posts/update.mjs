import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "PUT";

export async function update(postData) {
    if(!postData.id) {
        throw new Error("post requires postID")
    }
    const updatePostURL = `${API_BASE_SOCIAL}${action}/${postData.id}`

    const response = await authFetch(updatePostURL, {
        method, 
        body: JSON.stringify(postData)
    }) 
    return await response.json();
}