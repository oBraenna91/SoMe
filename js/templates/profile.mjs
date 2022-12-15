import * as postMethods from "../modules/api/posts/index.mjs";
import * as storage from "../modules/storage/index.mjs";
import { getProfileInfo } from "../modules/api/profile/index.mjs";

const postNumberOne = document.querySelector(".profileFeed");
const profileInfoContainer = document.querySelector("#profile-user-info");
const profile = storage.getFromLocal("profile");

/**
 * This function displays profile information on the profile page.
 * @param {object} user is the user profile. 
 * @returns user name, email, post count, following and followers count displayed
 * on the page.
 * @example
 * ```js
 * // Use this function to display user info
 * // on the profile page.
 *  profileUserInfo(oleBraenna)
 * // Returns info
 * Name : oleBraenna
 * Email : OleBra17268@stud.noroff.no
 * Posts : 10
 * Followers : 0
 * Following : 0 
 * ```
 */

export async function profileUserInfo(user) {
    if(profileInfoContainer) {
    return profileInfoContainer.innerHTML +=
    `
        <h2> Name : ${user.name}</h2>
        <h2> Email: ${user.email}</h2>
        <h3> Posts: ${user._count.posts}</h3>
        <h3> Followers: ${user._count.followers}</h3>
        <h3> Following: ${user._count.following} </h3>
    `
    }
}   

/**
 * This function is a template for how the first post on the profile page will
 * be displayed.
 * @param { object } post is the retrieved posts from the API call.
 * @returns the first post from the API call in an open panel with the
 * title in the head and a button link with the id to the edit.html page.
 */
export async function profileFirstPost(post) {
    if(postNumberOne) {
        return postNumberOne.innerHTML +=
    `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <strong>${post[0].title}</strong>
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                <p>${post[0].body}</p>
            </div>
            <a href="edit.html?id=${post[0].id}"><button type="button" class="btn btn-outline-primary edit-button">Edit</button></a>
        </div>
    </div>`;
    }
}
    

/**
 * This function is a template for how the next posts on the profile page will
 * be displayed.
 * @param { object } post is the retrieved posts from the API call.
 * @returns the next posts from the API call in a closed panel with the
 * title in the head and a button link with the id to the edit.html page.
 */
export async function profileNextPosts(post) {
    if(postNumberOne) {
        for (var i = 1; i < post.length; i++) {
            postNumberOne.innerHTML += 
            `<div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading${[i]}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[i]}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${[i]}">
                        <strong>${post[i].title}</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${[i]}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${[i]}">
                    <div class="accordion-body">
                        <p>${post[i].body}</p>
                    </div>
                    <a href="edit.html?id=${post[i].id}"><button type="button" class="btn btn-outline-primary edit-button">Edit</button></a>
                </div>`;
        }
    }
}

