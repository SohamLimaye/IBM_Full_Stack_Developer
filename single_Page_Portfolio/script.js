// Handle recommendation form submission
document.getElementById("recommendation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input value
    let newRecommendation = document.getElementById("recommendation-input").value;

    // Create a new paragraph element for the recommendation
    let newParagraph = document.createElement("p");
    newParagraph.textContent = newRecommendation;

    // Append the new recommendation to the recommendation list
    document.getElementById("recommendation-list").appendChild(newParagraph);

    // Clear the input field
    document.getElementById("recommendation-input").value = '';

    // Show confirmation dialog
    alert("Recommendation added successfully!");
});
