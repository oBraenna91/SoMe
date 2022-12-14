import { removeFromLocal } from "../storage/storage.mjs";

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