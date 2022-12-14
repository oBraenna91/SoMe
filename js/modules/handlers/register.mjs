import { register } from "../api/auth/register.mjs";

/**
 * This function registers a profile.
 * This function sets an addEventListener to the register form,
 * prevents default behaviour,
 * uses the user input as body with the API request.
 * (see /auth/login.mjs)
 */
export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())
        
        register(profile);
    }) 
}
