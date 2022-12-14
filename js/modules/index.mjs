import * as postMethods from "../modules/api/posts/index.mjs";
import * as listeners from "../modules/handlers/index.mjs";
import * as storage from "../modules/storage/index.mjs";
import * as templates from "../templates/index.mjs";
import { profileNextPosts } from "../templates/profile.mjs";
import { profileFirstPost } from "../templates/profile.mjs";

const path = location.pathname;
const userName = storage.getFromLocal("name");

if (path === '/login.html') {
    listeners.setLoginFormListener();
} else if (path === '/register.html') {
    listeners.setRegisterFormListener();
} else if (path === '/profile.html') {
    listeners.setCreatePostFormListener();
    postMethods.getProfilePosts(`${userName}`);
} else if (path === '/posts/edit/') {
    listeners.setUpdatePostFormListener();
}

async function testTemplate() {
    const posts = await postMethods.getProfilePosts(`${userName}`);
    profileFirstPost(posts);
    profileNextPosts(posts);
}
testTemplate();