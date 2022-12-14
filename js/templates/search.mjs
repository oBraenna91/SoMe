const searchResultsContainer = document.querySelector("#accordionPanelsStayOpenExample");
const hiddenResultsContainer = document.querySelector("#results-container");

export async function searchResultsContainerTemplate(post) {
    
    hiddenResultsContainer.style.display = "block";

    for (var i = 0; i < post.length; i++) { 
    searchResultsContainer.innerHTML +=
    `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading${[i]}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${[i]}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${[i]}">
                <strong>${post[i].title}</strong>
            </button>
        </h2>
        <div id="panelsStayOpen-collapse${[i]}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${[i]}">
            <div class="accordion-body">
                <p>${post[i].body}</p>
            </div>
        </div>
    </div>
     `;
    }
}