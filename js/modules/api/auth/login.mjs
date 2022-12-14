import { API_BASE_SOCIAL } from "../../constants/constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
    const loginURL = API_BASE_SOCIAL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL,{
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body,
    })

    const { accessToken, name} = await response.json();

    storage.saveToLocal("accessToken", accessToken);
    storage.saveToLocal("name", name);
    if (response.status === 200) {
        window.location.href = "/index.html";
    }
}