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

let recommendationInbox = document.getElementById("recommendation-inbox");
let recommendationTargetMessage = document.getElementById("recommendation-target-message");
let recommendationText1 = document.getElementById("recommendation-text-1");
let recommendationText1P = document.getElementById("recommendation-text-1-p");
let recommendationText2 = document.getElementById("recommendation-text-2");
let recommendationText2P = document.getElementById("recommendation-text-2-p");

let outboxTextP = document.getElementById("outbox-text-p");

let retryBtn = document.getElementById("retry-btn");

let userReadFirstPage = false;

function blinkLastMessage() {
    if (!userReadFirstPage) {
        inboxText2.classList.add("blinking")
    }
}

setTimeout(blinkLastMessage, 2000);

let stayedInRecommendationForTwoSeconds = false;

function showOtherOptions() {
    if (stayedInRecommendationForTwoSeconds) {
        console.log("test")
        setTimeout(margin0, 0);
        setTimeout(margin1, 80);
        setTimeout(margin2, 160);
        setTimeout(margin3, 240);
        setTimeout(margin4, 320);
        setTimeout(margin5, 400);
        setTimeout(margin6, 480);
        setTimeout(margin5, 560);
        setTimeout(margin4, 640);
        setTimeout(margin3, 720);
        setTimeout(margin2, 800);
        setTimeout(margin1, 880);
        setTimeout(margin0, 960);
    }
}

function margin0() {
    recommendationInbox.style.marginTop = "0px";
}

function margin1() {
    recommendationInbox.style.marginTop = "-2px";
}

function margin2() {
    recommendationInbox.style.marginTop = "-4px";
}

function margin3() {
    recommendationInbox.style.marginTop = "-6px";
}

function margin4() {
    recommendationInbox.style.marginTop = "-8px";
}

function margin5() {
    recommendationInbox.style.marginTop = "-10px";
}

function margin6() {
    recommendationInbox.style.marginTop = "-12px";
}

setInterval(showOtherOptions, 2000);

inboxText1.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
    recommendationTargetMessage.innerText = inbotText1P.innerText;
    recommendationText1P.innerText = "부르셨나요?"
    recommendationText2P.innerText = "말씀하세요"
    userReadFirstPage = true;
    setTimeout(function() {
        stayedInRecommendationForTwoSeconds = true;
    }, 2000);
})

inboxText2.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
    recommendationTargetMessage.innerText = inbotText2P.innerText;
    recommendationText1P.innerText = "오키오키~"
    recommendationText2P.innerText = "안될 것 같습니다"
    userReadFirstPage = true;
    setTimeout(function () {
        stayedInRecommendationForTwoSeconds = true;
    }, 2000);
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
        stayedInRecommendationForTwoSeconds = false;
    }
    // Swipe Up
    if (recommendationTouchEnd - recommendationTouchStart <= -150) {
        recommendationArea.style.display = "none";
        autoAnswerArea.style.display = "block";
        stayedInRecommendationForTwoSeconds = false;
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

let autoAnswerTouchStart = 0;
let autoAnswerTouchEnd = 0;
autoAnswerArea.addEventListener("touchstart", (e) => {
    autoAnswerTouchStart = e.touches[0].pageY;
})

autoAnswerArea.addEventListener("touchmove", (e) => {
    autoAnswerTouchEnd = e.touches[0].pageY;
    // Swipe Down
    if (autoAnswerTouchEnd - autoAnswerTouchStart >= 150) {
        autoAnswerArea.style.display = "none";
        recommendationArea.style.display = "block";
    }
})

let autoAnswerText1 = document.getElementById("auto-answer-text-1");
let autoAnswerText2 = document.getElementById("auto-answer-text-2");
let autoAnswerText3 = document.getElementById("auto-answer-text-3");

let tuneToneText1P = document.getElementById("tune-tone-text-1-p");
let tuneToneText2P = document.getElementById("tune-tone-text-2-p");
let tuneToneText3P = document.getElementById("tune-tone-text-3-p");

let tuneToneText1 = document.getElementById("tune-tone-text-1");
let tuneToneText2 = document.getElementById("tune-tone-text-2");
let tuneToneText3 = document.getElementById("tune-tone-text-3");

autoAnswerText1.addEventListener("click", function() {
    tuneToneText1P.innerText = "네 알겠습니다";
    tuneToneText2P.innerText = "네";
    tuneToneText3P.innerText = "오케이~!";
    autoAnswerArea.style.display = "none";
    tuneToneArea.style.display = "block";
})

autoAnswerText2.addEventListener("click", function () {
    tuneToneText1P.innerText = "힘들 것 같습니다";
    tuneToneText2P.innerText = "아니요";
    tuneToneText3P.innerText = "힘들 듯!";
    autoAnswerArea.style.display = "none";
    tuneToneArea.style.display = "block";
})

autoAnswerText3.addEventListener("click", function () {
    tuneToneText1P.innerText = "정말 감사합니다!";
    tuneToneText2P.innerText = "감사합니다";
    tuneToneText3P.innerText = "땡큐!";
    autoAnswerArea.style.display = "none";
    tuneToneArea.style.display = "block";
})

tuneToneText1.addEventListener("click", function() {
    tuneToneArea.style.display = "none";
    finalAnswerArea.style.display = "block";
    outboxTextP.innerText = tuneToneText1P.innerText;
})

tuneToneText2.addEventListener("click", function () {
    tuneToneArea.style.display = "none";
    finalAnswerArea.style.display = "block";
    outboxTextP.innerText = tuneToneText2P.innerText;
})

tuneToneText3.addEventListener("click", function () {
    tuneToneArea.style.display = "none";
    finalAnswerArea.style.display = "block";
    outboxTextP.innerText = tuneToneText3P.innerText;
})


let backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", function () {
    tuneToneArea.style.display = "none";
    autoAnswerArea.style.display = "block";
})

finalAnswerArea.addEventListener('click', function () {
    finalAnswerArea.style.display = "none";
    retry.style.display = "flex";
})

retryBtn.addEventListener('click', function() {
    retry.style.display = "none";
    textArea.style.display = "block";
    userReadFirstPage = false;
    stayedInRecommendationForTwoSeconds = false;
})