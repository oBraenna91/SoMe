import { update } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/index.mjs";

export async function setUpdateFormListener() {
    const form = document.querySelector("#updatePost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if(form) {
        const button = document.querySelector("button");
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