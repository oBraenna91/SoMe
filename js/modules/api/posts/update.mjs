import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "PUT";

/**
 * This function will update a post using the "PUT" method with
 * the authFetch function.
 * @param {object} postData should contain the data of the post the user wants to update.
 * ID is required.
 * If no id provided, error will be shown.
 */
export async function update(postData) {
    if(!postData.id) {
        throw new Error("update requires postID")
    }
    const updatePostURL = `${API_BASE_SOCIAL}${action}/${postData.id}`

    const response = await authFetch(updatePostURL, {
        method, 
        body: JSON.stringify(postData)
    })
    const result = await response.json();
    if (response.ok === true) {
        alert("Updated successfully!")
        window.location.href = "/profile.html";
    }
    return  result;
}