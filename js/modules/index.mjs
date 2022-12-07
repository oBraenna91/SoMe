import * as posts from "../modules/api/posts/index.mjs";

posts.create({
    title: "Example Post",
    body: "Also an example",
})
console.log("ok");