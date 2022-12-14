import { remove } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/index.mjs";

/**
 * This function deletes the selected post using the posts id.
 * It finds the id of the post through the URL,
 * and gives functionality to the delete post button,
 * (see /posts/delete.mjs)
 */
export async function setRemovePostListener() {

    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const button = document.querySelector("#delete-button");
        
    button.addEventListener("click", (event) => {
        event.preventDefault();

        remove(id);
        })
    }