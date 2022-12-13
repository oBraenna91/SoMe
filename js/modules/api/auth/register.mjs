import { API_BASE_SOCIAL } from "../../constants/constants.mjs";

const action = "/auth/register";
const method = "POST";

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
    alert("Profile registered successfully");
    return result;
}