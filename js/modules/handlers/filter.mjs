import * as read from "../api/posts/read.mjs";
import * as templates from "../../templates/index.mjs";

const homePageFeedContainer = document.querySelector(".homePageFeed");

const array = await read.getPosts()

export async function filterFeed() {
    const parent = document.querySelector("#parent");

    parent.addEventListener("click", (event) => {
        const feed = document.querySelector(".homePageFeed");
    
        if(event.target.id === "filterAsc") {
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
        } else if(event.target.id === "filterDesc") {
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
    })
}