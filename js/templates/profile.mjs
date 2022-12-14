const postNumberOne = document.querySelector("#accordionPanelsStayOpenExample");
const profileInfoContainer = document.querySelector("#profile-user-info");

export async function profileUserInfo(user) {
    return profileInfoContainer.innerHTML +=
    `
        <h2> Name : ${user.name}</h2>
        <h2> Email: ${user.email}</h2>
        <h3> Posts: ${user._count.posts}</h3>
        <h3> Followers: ${user._count.followers}</h3>
        <h3> Following: ${user._count.following} </h3>
    `
}

export async function profileFirstPost(post) {
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

export async function profileNextPosts(post) {
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