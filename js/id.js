const API_BASE_URL = 'https://api.noroff.dev/api/v1';

const token = localStorage.getItem('accessToken');

async function getWithToken(url) {
    try{
        console.log(url);
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

const profileUrl = `${API_BASE_URL}/social/posts/3710`; //her vil du hente navnet til brukeren


getWithToken(profileUrl);