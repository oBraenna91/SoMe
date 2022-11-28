const postContainer = document.querySelector("#put-it-here");
const API_BASE_URL = 'https://api.noroff.dev/api/v1';
const postForm = document.querySelector("#body-to-post");
const postTitle = document.querySelector("#title-to-post");
const postButton = document.querySelector("#post-button");
const h1 = document.querySelector("#home-h1");



async function getWithToken(url, method = 'GET') {
    try{
        console.log(url);
        const token = localStorage.getItem('accessToken');
        const fetchOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        createPost(json);
    } catch(error) {
        console.log(error);
    }
}

const postsUrl = `${API_BASE_URL}/social/posts`;


getWithToken(postsUrl);

function createPost(posts){
    posts.forEach(function(post){
        postContainer.innerHTML +=
        `<h3>${post.title}</h3>
        <p>${post.body}</p>`
    })
}

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
    console.log(entryToPost);
    
    postEntry(`${API_BASE_URL}/social/posts/`, entryToPost);
// legge til en 200 status gjør at siden reloader?
}
);
const userNameFromStorage = localStorage.getItem('name');
h1.innerHTML += `<h1> Welcome ${userNameFromStorage}`;

