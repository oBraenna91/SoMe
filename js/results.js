const searchId = localStorage.getItem('id');
const token = localStorage.getItem('accessToken');
const API_BASE_URL = 'https://api.noroff.dev/api/v1';
const newUrl = `${API_BASE_URL}/social/posts/${searchId}`;
const results = document.querySelector("#results");

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
        const searchResult = await response.json();
        //console.log(profilePosts);
        results.innerHTML +=
        `<div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <strong>${searchResult.title}</strong>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                    <p>${searchResult.body}</p>
                </div>
            </div>
        </div>`;
    } catch(error) {
        console.log(error);
    }
}

getWithToken(newUrl);

localStorage.removeItem('id');


