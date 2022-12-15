const searchResultsContainer = document.querySelector("#accordionPanelsStayOpenExample");
const hiddenResultsContainer = document.querySelector("#results-container");

/**
 * This function is the template for how the search results will be displayed.
 * It will display the hidden results container and loop through the results,
 * displaying them as open panels with the title in the head.
 * @param { object } post will be the search results. 
 */
export async function searchResultsContainerTemplate(post) {

    hiddenResultsContainer.style.display = "block";
    searchResultsContainer.innerHTML = "";

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