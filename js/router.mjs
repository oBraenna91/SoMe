import * as postMethods from "../js/modules/api/posts/index.mjs";
import * as listeners from "../js/modules/handlers/index.mjs";
import * as storage from "../js/modules/storage/index.mjs";
import * as templates from "../js/templates/index.mjs";
import { profileNextPosts } from "../js/templates/profile.mjs";
import { profileFirstPost } from "../js/templates/profile.mjs";
import { homePageFeed } from "./templates/home.mjs";
import { getProfileInfo } from "../js/modules/api/profile/index.mjs";

const profile = storage.getFromLocal("profile");

export function router() {
    const path = location.pathname;
    switch (path) {
        case '/login.html':
            listeners.setLoginFormListener();
        break;
        case '/register.html':
            listeners.setRegisterFormListener();
        break;
        case '/profile.html':
            listeners.setCreatePostFormListener();
            postMethods.getProfilePosts(`${profile.name}`);
            async function profileFeed() {
                const posts = await postMethods.getProfilePosts(`${profile.name}`);
                profileFirstPost(posts);
                profileNextPosts(posts);
            }
            profileFeed();
            async function profileInfo(){
                const user = await getProfileInfo(`${profile.name}`);
                templates.profileUserInfo(user);
            }
            profileInfo();
        break;
        case '/index.html':
            listeners.setCreatePostFormListener();
            postMethods.getPosts();
            async function homeFeed() {
                const posts = await postMethods.getPosts();
                homePageFeed(posts);
            }
            homeFeed();
            templates.homePageWelcome(profile.name);
        case '/edit.html':
            listeners.setUpdateFormListener();
            listeners.setRemovePostListener();
        break;
        case '/search.html':
            listeners.setSearchPostFormListener();
        break;
    }
    
}
