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

recommendationArea.addEventListener('click', function() {
    recommendationArea.style.display = "none";
    autoAnswerArea.style.display = "block";
})

autoAnswerArea.addEventListener('click', function() {
    autoAnswerArea.style.display = "none";
    tuneToneArea.style.display = "block";
    console.log(finalAnswerArea);
})

tuneToneArea.addEventListener('click', function() {
    tuneToneArea.style.display = "none";
    finalAnswerArea.style.display = "block";
})

finalAnswerArea.addEventListener('click', function () {
    finalAnswerArea.style.display = "none";
    textArea.style.display = "block";
})