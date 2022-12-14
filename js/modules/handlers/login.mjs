import { login } from "../api/auth/login.mjs";

/**
 * This function sets an addEventListener at the login form,
 * it prevents default behaviour of the form, takes the user input and
 * calls the login function with the input as body.
 * (see /auth/login.mjs)
 */
export function setLoginFormListener() {
    const form = document.querySelector("#loginForm"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        
        login(profile);
    }) 
}