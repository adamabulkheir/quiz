var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var timeAllotment = 60;
var quizContainer = document.querySelector("#quizContainer");
var startContainer = document.querySelector("#firstpage");
var timerInterval;
var answerButton = document.querySelector("#answeroption");
var question = document.querySelector("#question");
var qIndex = 0;
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");




var quizQuestions = [
    {
        q: "What does HTML stand for?",
        a: {
            1: "Hottub Time Machine Lore",
            2: "Hotdogs Took My Lover",
            3: "Hyperloop Train Movement Logic",
            4: "Hyper Text Markup Language"

        },
        correctAns: "Hyper Text Markup Language"
    },
    {
        q: "What does CSS stand for?",
        a: {
            1: "Cascade Silver Solution",
            2: "Costly Sandwich Service",
            3: "Cascading Style Sheets",
            4: "Carpool Student Survey"
        },
        correctAns: "Cascading Style Sheets"
    },
    {
        q: "What does Javascript do?",
        a: {
            1: "Handle logic letting users interact with a site",
            2: "Serve coffee while you wait for the site to load",
            3: "Colors your webpage",
            4: "Absolutely nothing at all, its imaginary"
        },
        correctAns: "Handle logic letting users interact with a site"
    },
    {
        q:
            "Which Git command uploads changes made to a repository?",
        a: {
            1: "Git Punch",
            2: "Git Commit",
            3: "Git Gud",
            4: "Git Pull"
        },
        correctAns: "Git Commit"
    },
    {
        q: "What is a CLI?",
        a: {
            1: "Comically Large Iguana",
            2: "Command Line Interface",
            3: "Command Line Interweb",
            4: "Coast Line Internet"
        },
        correctAns: "Command Line Interface"
    }
];

function newQuestion() {

    question.textContent = quizQuestions[qIndex].q;
    opt1.textContent = quizQuestions[qIndex].a[1];
    opt2.textContent = quizQuestions[qIndex].a[2];
    opt3.textContent = quizQuestions[qIndex].a[3];
    opt4.textContent = quizQuestions[qIndex].a[4];
    return;
}

function startQuiz() {
    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    function startTime() {
        timerInterval = setInterval(function () {
            timeAllotment--;
            timer.textContent = "Time: " + timeAllotment;

            if (timeAllotment === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
    startTime();
    newQuestion();
}
startButton.addEventListener("click", startQuiz);

