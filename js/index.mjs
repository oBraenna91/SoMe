import {router} from "../js/router.mjs";
import * as postMethods from "../js/modules/api/posts/index.mjs";
import * as storage from "../js/modules/storage/index.mjs";
import * as templates from "../js/templates/index.mjs";
import { getProfileInfo } from "../js/modules/api/profile/index.mjs";
import * as handlers from "../js/modules/handlers/index.mjs";

const profile = storage.getFromLocal("profile");

router();
/**
 * This function creates the profile feed.
 */
async function profileFeed() {
    const posts = await postMethods.getProfilePosts(`${profile.name}`);
    templates.profileFirstPost(posts);
    templates.profileNextPosts(posts);
}
profileFeed();
/**
 * This function creates the profile info part of
 * the profile page
 */
async function profileInfo(){
    const user = await getProfileInfo(`${profile.name}`);
    templates.profileUserInfo(user);
}
profileInfo();

templates.homePageWelcome(profile.name);
/**
 * This function creates the the home page feed.
 */
async function homeFeed() {
    const posts = await postMethods.getPosts();
    templates.homePageFeed(posts);
}
homeFeed();

