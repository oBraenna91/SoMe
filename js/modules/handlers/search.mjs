import { getPosts } from "../api/posts/read.mjs";
import { searchResultsContainerTemplate } from "../../templates/search.mjs";

/**
 * This function searches the posts feed for posts
 * containing the keyword anywhere in the post object.
 * It then displays the results using the searchResultsContainerTemplate.
 * @param keyword This is the keyword used to filter the posts by.
 */
export async function search(keyword) {
    const posts = await getPosts();
    const postResults = posts.filter((post) =>
        JSON.stringify(post).toLowerCase().includes(keyword));
        searchResultsContainerTemplate(postResults);
}
/**
 * This function sets an addEventListener to the search form.
 * It also takes the user input and converts it to lowercase
 * for optimized functionality.
 * It prevents default behaviour and calls the search function
 * using the user input.
 */
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