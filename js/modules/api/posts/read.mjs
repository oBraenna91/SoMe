import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

const action = "/posts";


/**
 * This function will retrieve 100 posts from the
 * database.
 */
export async function getPosts() {
    const getPostsURL = `${API_BASE_SOCIAL}${action}`
    const response = await authFetch(getPostsURL);
    return await response.json();
}
/**
 * This function will retrieve a single post from
 * it's id.
 * @param {number} id This will be the post id. 
 */
export async function getPost(id) {
    if(!id) {
        throw new Error("Get requires postID")
    }
    const getPostURL = `${API_BASE_SOCIAL}${action}/${id}`
    const response = await authFetch(getPostURL);
    return await response.json();
}
/**
 * This function will retrieve all the posts
 * from a profile, using the name of the
 * profile.
 * @param {string} name This will be the name of the user who's
 * posts will be retrieved.
 */
export async function getProfilePosts(name) {
    const getPostsUrl = `${API_BASE_SOCIAL}/profiles/${name}/posts`;
    const response = await authFetch(getPostsUrl);
    const profilePosts = await response.json();
    return profilePosts;
}