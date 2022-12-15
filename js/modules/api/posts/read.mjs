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

export async function getPostsCreatedAscending(){
    const ascending = "?sort=created&sortOrder=asc";
    const ascendingURL = `${API_BASE_SOCIAL}${action}${ascending}`
    const response = await authFetch(ascendingURL);
    console.log("asc");
    return await response.json();
}

export async function getPostsCreatedDescending(){
    const desc = "?sort=created&sortOrder=desc";
    const descendingURL = `${API_BASE_SOCIAL}${action}${desc}`
    const response = await authFetch(descendingURL);
    console.log("desc");
    return await response.json();
}
// GET /api/v1/social/posts?sort=created&sortOrder=desc
// GET /api/v1/social/posts?sort=title&sortOrder=asc