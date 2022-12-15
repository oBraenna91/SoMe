const feed = document.querySelector(".homePageFeed");
const message = document.querySelector("#welcome-message");


/**
 * This function is a template for how the feeed on the home page is displayed.
 * @param {object} posts is the retrieved posts from the API call, the function puts the posts
 * inside the feed container and displays the title in bold and in the head of the post,
 * which can be seen when the body panel is closed.
 */
export async function homePageFeed(posts) {
    if(feed) {
        for (var i = 0; i < posts.length; i++) {
            feed.innerHTML += 
            `
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading${[i]}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[i]}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${[i]}">
                        <strong>${posts[i].title}</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${[i]}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${[i]}">
                    <div class="accordion-body">
                        <p>${posts[i].body}</p>
                    </div>
                </div>
            </div>
            `
            }
    }
}


/**
 * This function creates a welcome message to the user on the home-page.
 * @param { string } name is the users name
 * @returns a greeting message.
 * @example 
 * ```js
 * // Use this function to greet users on the home page.
 * homePageWelcome('Ola');
 * // Returns h1 greeting
 * Welcome Ola
 * ```
 */
export async function homePageWelcome(name) {
    if(message) {
        return message.innerHTML +=
    `<h1> Welcome ${name}`;
    }
}
    

export async function homePageFeedFiltered(array){
    feed.innerHTML = "";
    array.forEach((post) => {
    feed.innerHTML += 
`
<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-heading${post.id}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${post.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${post.id}">
            <strong>${post.title}</strong>
        </button>
    </h2>
    <div id="panelsStayOpen-collapse${post.id}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${post.id}">
        <div class="accordion-body">
            <p>${post.body}</p>
        </div>
    </div>
</div>
`
    })
}
