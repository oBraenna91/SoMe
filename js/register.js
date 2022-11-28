const API_BASE_URL = 'https://api.noroff.dev/api/v1';
const email = document.getElementById("registerStaticEmail2");
const password = document.getElementById("RegisterinputPassword2");
const username = document.querySelector("#registerUsername");
const btn1 = document.getElementById("register-button");
const errorMessage = document.getElementById("register-error-message");
const registerSuccess = document.getElementById("register-success");
const userExists = document.getElementById("user-already-exists");



async function registerUser(url, data) {
    var registerComplete = false;
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
        if (response.status === 400) {
            userExists.style.display = "block";
        }
        const json = await response.json();
        console.log(json);
        registerComplete = true;
        return json;
    }
    catch(error) {
        console.log(error);
    }
    if (registerComplete === true) {
        console.log("true");
        registerSuccess.style.display = "block";
    }else {
        console.log("false");
        errorMessage.style.display = "block";
    }
}

//registerUser(`${API_BASE_URL}/social/auth/register`, userInfo);

btn1.addEventListener('click', function onClickRegister() {
    const registerMail = email.value;
    const registerPassword = password.value;
    const registerUsername = username.value;

    const userInfo = {
        "name": registerUsername,
        "email": registerMail,
        "password": registerPassword,
    };
    
    console.log(userInfo);
    
    registerUser(`${API_BASE_URL}/social/auth/register`, userInfo);
}
);
