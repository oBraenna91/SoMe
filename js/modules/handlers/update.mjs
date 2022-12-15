import { update } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/index.mjs";

/**
 * This function updates the selected post using the posts id.
 * It finds the id of the post through the URL,
 * fetches the post and displays the title and body.
 * It gives functionality to the update post button,
 * and it prevents default behaviour of the form, and
 * calls the update function using the update function.
 * (see /posts/update.mjs)
 */
export async function setUpdateFormListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if(form) {
        const button = document.querySelector("#update-button");
        button.disabled = true;

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;

            update(post);
        })
    }
}