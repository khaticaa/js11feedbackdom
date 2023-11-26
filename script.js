let feedbackHeader = document.getElementById("feedback-header");
let emojiContainer = document.getElementById("emoji-container");
let feedbackButtons = document.getElementById("feedback-buttons");
let feedbackContainer = document.getElementById("feedback-container");
let Happy = document.getElementById("happy");
let neutral = document.getElementById("neutral");
let unhappy = document.getElementById("unhappy");

function Feedback(emoji, color) {
  feedbackHeader.innerHTML = "Your Feedback" + emoji;
  emojiContainer.innerHTML = `<div class="emoji" style="background-color: ${color};">${emoji}</div>`;
  feedbackContainer.style.backgroundColor = color;
  feedbackButtons.innerHTML =
    '<button id="thanks-button" onclick="thanksForFeedback()">Thanks for feedback!!!</button>';
}

Happy.addEventListener("click", function () {
 Feedback("😊", "green");
});

neutral.addEventListener("click", function () {
 Feedback("😐", "blue");
});

unhappy.addEventListener("click", function () {
 Feedback("😞", "red");
});
