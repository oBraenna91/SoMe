import { removeFromLocal } from "../storage/storage.mjs";

/**
 * This function logs the user out.
 * The function sets an addEventListener at the logout button,
 * prevents default behaviour of the button,
 * removes profile info and the accesstoken from localstorage
 * and displays the logout success message to the user.
 */
export function setLogOutFormListener() {
    const form = document.querySelector("#logOutForm"); 
    const message = document.querySelector("#success-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        removeFromLocal("profile")
        removeFromLocal("accessToken");
        message.style.display = "block";
    })
}