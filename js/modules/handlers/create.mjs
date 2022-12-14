import { create } from "../api/posts/index.mjs";

/**
 * This function sets an addEventListener at the create post form,
 * it prevents default behaviour of the form, takes the user input and
 * calls the create function with the input as body.
 * (see /posts/create.mjs)
 */
export function setCreatePostFormListener() {
    const form = document.querySelector("#createPost");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            
            create(post);
        })
    }
}