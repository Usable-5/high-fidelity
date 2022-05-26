let textArea = document.getElementById("text");
let recommendationArea = document.getElementById("recommendation");
let autoAnswerArea = document.getElementById("auto-answer");
let tuneToneArea = document.getElementById("tune-tone");
let finalAnswerArea = document.getElementById("final-answer");
let retryArea = document.getElementById("retry");

let inboxText1 = document.getElementById("inbox-text-1");
let inbotText1P = document.getElementById("inbox-text-1-p");
let inboxText2 = document.getElementById("inbox-text-2");
let inbotText2P = document.getElementById("inbox-text-2-p");

let recommendationTargetMessage = document.getElementById("recommendation-target-message");
let recommendationText1 = document.getElementById("recommendation-text-1");
let recommendationText1P = document.getElementById("recommendation-text-1-p");
let recommendationText2 = document.getElementById("recommendation-text-2");
let recommendationText2P = document.getElementById("recommendation-text-2-p");

let outboxTextP = document.getElementById("outbox-text-p");

let retryBtn = document.getElementById("retry-btn");

inboxText1.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
    recommendationTargetMessage.innerText = inbotText1P.innerText;
})

inboxText2.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
    recommendationTargetMessage.innerText = inbotText2P.innerText;
})


let recommendationTouchStart = 0;
let recommendationTouchEnd = 0;
recommendationArea.addEventListener("touchstart", (e) => {
    recommendationTouchStart = e.touches[0].pageY;
})

recommendationArea.addEventListener("touchmove", (e) => {
    recommendationTouchEnd = e.touches[0].pageY;
    // Swipe Down
    if (recommendationTouchEnd - recommendationTouchStart >= 150) {
        recommendationArea.style.display = "none";
        textArea.style.display = "block";
    }
})

recommendationText1.addEventListener('click', function () {
    recommendationArea.style.display = "none";
    finalAnswerArea.style.display = "block";
    outboxTextP.innerText = recommendationText1P.innerText;
})

recommendationText2.addEventListener('click', function () {
    recommendationArea.style.display = "none";
    finalAnswerArea.style.display = "block";
    outboxTextP.innerText = recommendationText2P.innerText;
})

finalAnswerArea.addEventListener('click', function () {
    finalAnswerArea.style.display = "none";
    retry.style.display = "flex";
})

retryBtn.addEventListener('click', function() {
    retry.style.display = "none";
    textArea.style.display = "block";
})