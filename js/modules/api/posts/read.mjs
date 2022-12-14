import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "./authFetch.mjs";

import { getFromLocal } from "../../storage/storage.mjs";

const action = "/posts";

export async function getPosts() {
    const getPostsURL = `${API_BASE_SOCIAL}${action}`
    const response = await authFetch(getPostsURL);
    return await response.json();
}

export async function getPost(id) {
    if(!id) {
        throw new Error("Get requires postID")
    }
    const getPostURL = `${API_BASE_SOCIAL}${action}/${id}`
    const response = await authFetch(getPostURL);
    return await response.json();
}

export async function getProfilePosts(name) {
    const getPostsUrl = `${API_BASE_SOCIAL}/profiles/${name}/posts`
    const response = await authFetch(getPostsUrl);
    const profilePosts = await response.json();
    return profilePosts;
}