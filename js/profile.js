const API_BASE_URL = 'https://api.noroff.dev/api/v1';

const token = localStorage.getItem('accessToken');

const userNameFromStorage = localStorage.getItem('name');

const postNumberOne = document.querySelector("#accordionPanelsStayOpenExample");

const postForm = document.querySelector("#body-to-post");

const postTitle = document.querySelector("#title-to-post");

const postButton = document.querySelector("#post-button");

async function getWithToken(url) {
    try{
        //console.log(url);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        const profilePosts = await response.json();
        //console.log(profilePosts);
        postNumberOne.innerHTML +=
        `<div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <strong>${profilePosts[0].title}</strong>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                    <p>${profilePosts[0].body}</p>
                </div>
            </div>
        </div>`;
        for (var i = 1; i < profilePosts.length; i++) {
            postNumberOne.innerHTML += 
            `<div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading${[i]}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[i]}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${[i]}">
                        <strong>${profilePosts[i].title}</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapse${[i]}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${[i]}">
                <div class="accordion-body">
                    <p>${profilePosts[i].body}</p>
                </div>
            </div>`
        }
    } catch(error) {
        console.log(error);
    }
}

const profileUrl = `${API_BASE_URL}/social/profiles/${userNameFromStorage}/posts`;


getWithToken(profileUrl);

const updated = {
    "title" : "This post is updated",
    "body": "And that's pretty cool",

};

async function updateWithToken(url, data) {
    try{
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, fetchOptions);
        //console.log(response);
        const json = await response.json();
        //console.log(json);
    } catch(error) {
        console.log(error);
    }
}


updateWithToken(`${API_BASE_URL}/social/posts/3710`, updated);

//legge inn brukerens navn (og ev info på profile-siden)



const profileInfoContainer = document.querySelector("#profile-user-info");

async function profileWithToken(url, data) {
    try{
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        //console.log(response);
        const json = await response.json();
        //console.log(json);
        profileInfoContainer.innerHTML += 
            `<p> Name : ${userNameFromStorage}</p>
             <p> Email: ${json.email}</p>
             <p> Posts: ${json._count.posts}</p>
             <p> Followers: ${json._count.followers}</p>
             <p> Following: ${json._count.following} </p>`;
    } catch(error) {
        console.log(error);
    }
}

profileWithToken(`${API_BASE_URL}/social/profiles/${userNameFromStorage}`);

var postEntry = async function(url, data) {
    try {
        const token = localStorage.getItem('accessToken');
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postData);
        console.log(response);
        if (response.status === 200) {
            location.reload();
        }
    } catch(error) {
        console.log(error);
    }
}

postButton.addEventListener('click', function onClickPostEntry() {
    const titleToPost = postTitle.value;
    const bodyToPost = postForm.value;

    const entryToPost = {
        "title" : titleToPost,
        "body": bodyToPost,
    }
    //console.log(entryToPost);
    
    postEntry(`${API_BASE_URL}/social/posts/`, entryToPost);
}
);

async function findWithToken(url) {
    try{
        //console.log(url);
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        const profilePosts = await response.json();
        console.log(profilePosts);
        const foundPost = profilePosts.filter((post) => {
            if(post.title.includes('J')) {
                return true;
            }
        }
        );
        console.log(foundPost);
    }catch(error){
        console.log(error);
    }
}
findWithToken(`${API_BASE_URL}/social/profiles/${userNameFromStorage}/posts`);



