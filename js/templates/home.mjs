const feed = document.querySelector("#accordionPanelsStayOpenExample");
const message = document.querySelector("#welcome-message");

export async function homePageFeed(posts) {
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

export async function homePageWelcome(name) {
    return message.innerHTML +=
    `<h1> Welcome ${name}`;
}
