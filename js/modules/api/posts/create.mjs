import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "POST";

/**
 * This function will create a post using the "POST" method with
 * the authFetch function.
 * @param {object} postData should contain what the user wants to post.
 */

export async function create(postData) {
    const createPostURL = API_BASE_SOCIAL + action;

    const response = await authFetch(createPostURL, {
        method, 
        body: JSON.stringify(postData)
    })
    return await response.json();
}