import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

const action = "/auth/register";
const method = "POST";

/**
 * This will send a register user request and alert the user if registered successfully.
 * @param {object} profile the required information will be stringified and sent as body 
 * with the API-request.
 * @example
 * ```js
 * // Use this function to register users and display an alert that they have
 * // successfully registered
 * // their account.
 * const profile =
 * [ email: user input
 * password: user input
 * username: user input ]
 * register(profile)
 * // Alert appears that confirms a successfull register.
 * ```
 */

export async function register(profile) {
    const registerURL = API_BASE_SOCIAL + action; 
    const body = JSON.stringify(profile);
    
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type" : "application/json"
        },
        method,
        body,
    }) 

    const result = await response.json();
    if (response.status === 201) {
    alert("Profile registered successfully");
    window.location.href = "/index.html";
    }else if (response.status === 400) {
        alert("Profile already exists!");
    }else if (response.ok != true){
        alert("Something went wrong, please try again!")
    }
    return result;
}
