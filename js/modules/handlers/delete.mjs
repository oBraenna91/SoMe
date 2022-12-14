import { remove } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/index.mjs";

export async function setRemovePostListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if(form) {
        const button = document.querySelector("#delete-button");
        button.disabled = true;

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            post.id = id;

            remove(id);
        })
    }
}