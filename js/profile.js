const API_BASE_URL = 'https://api.noroff.dev/api/v1';

const token = localStorage.getItem('accessToken');

const userNameFromStorage = localStorage.getItem('name');

const postNumberOne = document.querySelector("#accordionPanelsStayOpenExample");

const postForm = document.querySelector("#body-to-post");

const postTitle = document.querySelector("#title-to-post");

const postButton = document.querySelector("#post-button");

const userInput = document.querySelector("#search-input");

const searchButton = document.querySelector("#search-button");

const searchResults = document.querySelector("#search-results");

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
                <button type="button" class="btn btn-outline-primary delete-button" id="${profilePosts[0].id}">Delete</button>
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
                <button type="button" class="btn btn-outline-primary delete-button" id="${profilePosts[i].id}">Delete</button>
            </div>`
        }
        const deleteButtons = document.getElementsByClassName("delete-button");
        const deleteButtonPressed = e => {
            console.log(e.target.id);
            const itemToDelete = e.target.id
            localStorage.setItem('itemToDeleteId',itemToDelete);
        }
        for (let item of deleteButtons) {
            item.addEventListener("click", deleteButtonPressed);
        }
    } catch(error) {
        console.log(error);
    }
}
//onclick="${deleteWithToken(`${API_BASE_URL}/social/posts/${profilePosts[i].id}`)}"
const profileUrl = `${API_BASE_URL}/social/profiles/${userNameFromStorage}/posts`;


getWithToken(profileUrl);



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
        const json = await response.json();
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
        const newProfilePosts = profilePosts.filter((post) =>
        JSON.stringify(post).toLowerCase().includes(userInput.value.toLowerCase()));
        console.log(newProfilePosts);
        for (var i = 0; i < newProfilePosts.length; i++) {
        searchResults.innerHTML +=
        `<li><a class="dropdown-item" href="results.html" id="${newProfilePosts[i].id}">${newProfilePosts[i].title}</a></li>`;}
        const dropDownItem = document.getElementsByClassName("dropdown-item");
        const itemPressed = e => {
            console.log(e.target.id);
            const clickedID = e.target.id
            localStorage.setItem('id', clickedID );

        }
        for (let item of dropDownItem) {
            item.addEventListener("click", itemPressed);
        }

        //"${API_BASE_URL}/social/posts/${newProfilePosts[i].id}"
        
    }catch(error){
        console.log(error);
    }
}
searchButton.addEventListener('click', function onclickSearch() {
    findWithToken(`${API_BASE_URL}/social/profiles/${userNameFromStorage}/posts`);
    });

async function deleteWithToken(url) {
    try{
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, deleteOptions);

        //"${API_BASE_URL}/social/posts/${newProfilePosts[i].id}"
        
    }catch(error){
        console.log(error);
    }
}

const deleteItemUrl = `${API_BASE_URL}/social/posts/`;


    


//deleteWithToken(specificPostIdUrl);