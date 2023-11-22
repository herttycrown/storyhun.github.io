var likeBtn = document.getElementById("likeBtn");
var dislikeBtn = document.getElementById("dislikeBtn");
var likeCount = document.getElementById("likeCount");
var dislikeCount = document.getElementById("dislikeCount");

var currentLikeCount = 0;
var currentDislikeCount = 0;

// Add click event listeners to the like and dislike buttons
likeBtn.addEventListener("click", function() {
    currentLikeCount++;
    likeCount.textContent = currentLikeCount;
});

dislikeBtn.addEventListener("click", function() {
    currentDislikeCount++;
    dislikeCount.textContent = currentDislikeCount;
});

// Submit button functionality
var submitBtn = document.getElementById("submitBtn");
var feedbackInput = document.getElementById("feedback");
var feedbackDisplay = document.getElementById("feedbackDisplay");

submitBtn.addEventListener("click", function() {
    var userFeedback = feedbackInput.value;

    if (userFeedback.trim() !== "") {
        // Display the feedback below the form
        var feedbackItem = document.createElement("p");
        feedbackItem.textContent = userFeedback;
        feedbackDisplay.appendChild(feedbackItem);

        // You can optionally clear the input field
        feedbackInput.value = "";
    } else {
        alert("Please enter comments before submitting.");
    }
});