import * as read from "../api/posts/read.mjs";


export function setAscFilterPostFormListener() {
    const button1 = document.querySelector("#filterAsc");

        button1.addEventListener("click", (event) => {
            //event.preventDefault();
            
            read.getPostsCreatedAscending();
        })
    }

export function setDescFilterPostFormListener() {
    const button2 = document.querySelector("#filterDesc");

        button2.addEventListener("click", (event) => {
            //event.preventDefault();
            
            read.getPostsCreatedDescending();
        })
    }

export function setFilterListener() {
    const button1 = document.querySelector("#filterAsc");
    const button2 = document.querySelector("#filterDesc");
    const parent = document.querySelector("#parent");

    parent.addEventListener("click", (event) => {
        if(event.target.id === "filterAsc") {
            read.getPostsCreatedAscending();
        } else if(event.target.id === "filterDesc") {
            read.getPostsCreatedDescending();
        }
    })
}

