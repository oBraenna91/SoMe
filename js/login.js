const API_BASE_URL = 'https://api.noroff.dev/api/v1';

const username = {
    "email" : 'OleBra17268@stud.noroff.no',
    "password": "1234abcd",

};

async function loginUser(url, data) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
        console.log(json);
        return json;
    } catch(error) {
        console.log(error);
    }
}

loginUser(`${API_BASE_URL}/social/auth/login`, username);