import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "../posts/index.mjs";

/**
 * This function will retrieve profile information.
 * @param {string} name this is the name of the profile we will receive info about 
 * @returns the profile information. 
 */
export async function getProfileInfo(name) {
    const getProfileUrl = `${API_BASE_SOCIAL}/profiles/${name}`
    const response = await authFetch(getProfileUrl);
    const profileInfo = await response.json();
    return profileInfo;
}