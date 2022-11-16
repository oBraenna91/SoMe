const userInput = document.getElementById("add-post");
const btn1 = document.getElementById("button1");

function logInput() {
    console.log(userInput.value);
}

btn1.addEventListener('click', logInput);



const API_BASE_URL = 'https://api.noroff.dev/api/v1';




//fetch(`${API_BASE_URL}/nba-teams`)
  //  .then((response) => response.json())
    //.then((json) => console.log(json));



// request with token

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
    } catch(error) {
        console.log(error);
    }
}

const postsUrl = `${API_BASE_URL}/social/posts`;


getWithToken(postsUrl);


