import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "DELETE";
/**
 * This function will delete a post using the "DELETE" method with
 * the authFetch function.
 * @param {number} id should contain the id of the
 * post the user wants to delete.
 */
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