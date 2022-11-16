const userInfo = {
    "name": "oleBraenna",
    "email": "OleBra17268@stud.noroff.no",
    "password": "1234abcd",
};

async function registerUser(url, data) {
    try{
        const postInfo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postInfo);
        console.log(response);
        const json = await response.json();
        console.log(json);
        return json;
    }
    catch(error) {
        console.log(error);
    }
}

registerUser(`${API_BASE_URL}/social/auth/register`, userInfo);
