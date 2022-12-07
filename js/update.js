const updated = {
    "title" : "This post is updated",
    "body": "And that's pretty cool",

};

async function updateWithToken(url, data) {
    try{
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, fetchOptions);
        //console.log(response);
        const json = await response.json();
        //console.log(json);
    } catch(error) {
        console.log(error);
    }
}


updateWithToken(`${API_BASE_URL}/social/posts/3710`, updated);