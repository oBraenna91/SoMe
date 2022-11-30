const API_BASE_URL = 'https://api.noroff.dev/api/v1';
const email = document.getElementById("staticEmail2");
const password = document.getElementById("inputPassword2");
const btn1 = document.getElementById("login-button");
const loginForm = document.querySelector("#login-form");
const loadingWheel = document.querySelector("#loading-wheel");
const errormessage = document.querySelector("#error-message");


var loginUser = async function(url, data) {
    var result = false;
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postData);
        console.log(response.status);
        if (response.status === 200) {
            result = true;
        }
        const json = await response.json();
        const accessToken = json.accessToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', json.name);
        console.log(json);
        console.log(result);
    } catch(error) {
        console.log(error);
        result = false;
    }
    if (result === true) {
        console.log("true");
        window.location.href = "/index.html";
    }else {
        console.log("false");
        errormessage.style.display = "block";
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