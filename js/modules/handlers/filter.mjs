import * as read from "../api/posts/read.mjs";
import * as templates from "../../templates/index.mjs";

const arrayToFilter = await read.getPosts();

/**
 * This function will sort the array from A-Z
 * and display the array in the feed.
 * @param array is the array that will be sorted.
 */
export async function filterAsc(array) {
    array.sort((a, b) => {
        let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB){
                return 1;
            }
            return 0;
    });
    array.forEach((post) => {
        templates.homePageFeedFiltered(array)
    })
}

/**
 * This function will sort the array from Z-A
 * and display the array in the feed.
 * @param array is the array that will be sorted.
 */
export async function filterDesc(array) {
    array.sort((a, b) => {
        let titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();
            if (titleA > titleB) {
                return -1;
            }
            if (titleA < titleB){
                return 1;
            }
            return 0;
    });
    array.forEach((post) => {
        templates.homePageFeedFiltered(array)
    })
}
/**
 * This function will set the addEventListener to
 * the parent div. It will detect which of the buttons
 * was the target of the click event, call the
 * respective sort function and display alerts to
 * the user.
 */
export async function setSortFeedListener() {
    const parent = document.querySelector("#parent");

    parent.addEventListener("click", (event) => {
        alert("Sorting may take a few seconds, new pop-up will appear");
        if(event.target.id === "filterAsc") {
            filterAsc(arrayToFilter);
        } else if(event.target.id === "filterDesc") {
            filterDesc(arrayToFilter);
        }
        alert("Sorting complete")
    })
}