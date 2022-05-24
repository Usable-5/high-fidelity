let textArea = document.getElementById("text");
let recommendationArea = document.getElementById("recommendation");
let autoAnswerArea = document.getElementById("auto-answer");
let tuneToneArea = document.getElementById("tune-tone");
let finalAnswerArea = document.getElementById("final-answer");

let inboxText1 = document.getElementById("inbox-text-1");
let inboxText2 = document.getElementById("inbox-text-2");

inboxText1.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
})


inboxText2.addEventListener('click', function () {
    textArea.style.display = "none";
    recommendationArea.style.display = "block";
})


let recommendationText2 = document.getElementById("recommendation-text-2");

recommendationText2.addEventListener('swipe-up', function(e) {
    console.log(e.target);
    console.log(e.detail); // see event data below
    recommendationArea.style.display = "none";
    autoAnswerArea.style.display = "block";
});


