import { API_BASE_SOCIAL } from "../../constants/constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";
/**
 * This will log in the user, save the accesstoken and profile information, and redirect
 * the user to the home page.
 * @param {object} profile the required profile information will be stringified and sent as body 
 * with the API-request.
 * @example
 * ```js
 * // Use this function to log in users and store the relevant information before redirecting
 * // them to the home page.
 * const profile =
 * [ email: user input
 * password: user input ]
 * login(profile)
 * // The accesstoken gets stored in local storage as "accessToken" and the rest of the
 * // profile info gets stored under "profile".
 * ```
 */
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

    const { accessToken, ...user} = await response.json();

    storage.saveToLocal("accessToken", accessToken);
    storage.saveToLocal("profile", user);
    if (response.status === 200) {
        alert("You are now logged in!")
        window.location.href = "/home.html";
    }else if (response.ok != true){
        alert("Something went wrong, please try again!")
    }
}
