const API_BASE_URL = 'https://api.noroff.dev/api/v1';
const email = document.getElementById("staticEmail2");
const password = document.getElementById("inputPassword2");
const btn1 = document.getElementById("login-button");

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

btn1.addEventListener('click', function onClickLogin() {
    const userMail = email.value;
    const userPassword = password.value;

    const username = {
        "email" : userMail,
        "password": userPassword,
    }
    console.log(username);
    loginUser(`${API_BASE_URL}/social/auth/login`, username);     
}
);
