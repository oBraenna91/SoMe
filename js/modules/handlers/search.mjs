import { getPosts } from "../api/posts/read.mjs";
import { searchResultsContainerTemplate } from "../../templates/search.mjs";

export async function search(keyword) {
    const posts = await getPosts();
    const postResults = posts.filter((post) =>
        JSON.stringify(post).toLowerCase().includes(keyword));
        searchResultsContainerTemplate(postResults);
}

export async function setSearchPostFormListener() {
    const form = document.querySelector("#searchPost");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const searchInput = document.querySelector("#search-input");
            const searchString = searchInput.value.toLowerCase();
            search(searchString);
        })
    }
}