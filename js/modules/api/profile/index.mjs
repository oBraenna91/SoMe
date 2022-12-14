import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

import { authFetch } from "../posts/index.mjs";

export async function getProfileInfo(name) {
    const getProfileUrl = `${API_BASE_SOCIAL}/profiles/${name}`
    const response = await authFetch(getProfileUrl);
    const profileInfo = await response.json();
    return profileInfo;
}