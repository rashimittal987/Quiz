const quizData = [{
        question: "What is the most used programming language in 2021?",
        options: [
            "Java",
            "Python",
            "Html",
            "Css",

        ],
        correct: 0,
    }, {
        question: "JavaScript may be used as a",
        options: [
            "Server Side Scripting Language",
            "Client Side Scripting Language",
            "Both ",
            "None",

        ],
        correct: 1,
    }, {
        question: "Is JavaScript,case sensitive ? ",
        options: [
            "Not on windows platforms.",
            "Not on Linux Platform.",
            "Yes ",
            "None",
        ],
        correct: 3,
    }, {

        question: "When is it necessary to use the var keyword ? ",
        options: [
            "To declare a variable.",
            "To create an instruction.",
            "To declare a constant.",
            "None of the above.",
        ],
        correct: 2,
    }, {
        question: "Inside which HTML element do we put the JavaScript ? ",

        options: ["<scripting > ",
            "<javascript > ",
            "<script > ",
            "None of the above.",
        ],
        correct: 2,
    }, {
        question: "Which of the following is not a valid JavaScript array method ?",
        options: ["push()",

            " pop()",


            "shift()",

            "slice()",
        ],
        correct: 3,
    }, {
        question: "Which of the following methods removes the last element from an array and returns that element ?",
        options: ["push()",

            "pop()",

            "shift()",

            "unshift()",
        ],
        correct: 1,
    }, {
        question: "When a user views a page containing a JavaScript program,which machine actually executes the script ?",
        options: ["The User 's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape 's corporate offices",
            "None of the above ",
        ],
        correct: 2,
    }, {

        question: "Which of the following syntax is correct to refer an external script called“ formValidation.js” ?",

        options: ["< script href = “formValidation.js” >",
            "< script source = “formValidation.js” > ",
            " < script name = “formValidation.js” >",
            "< script src = “formValidation.js” >",
        ],
        correct: 3,

    }, {
        question: "Which of the following is the correct way for writing Java Script array ?",

        options: ["var salaries = new Array(1: 39438, 2: 39839 3: 83729)",
            "var salaries = new(Array1 = 39438, Array 2 = 39839 Array 3 = 83729)",
            "var salaries = new Array(39438, 39839, 83729)",
            "var salaries = new Array() values = 39438, 39839 83729",

        ],
        correct: 2,
    }, {
        question: "If para1 is the DOM object for a paragraph,what is the correct syntax to change the textwithin the paragraph ?",
        options: [
            "New Text  ? ",
            "para1.value = New Text ",
            "para1.firstChild.nodeValue = New Text",
            "para1.nodeValue = New Text ",
        ],
        correct: 2,
    }, {
        question: "JavaScript is interpreted by _________",
        options: ["Client",
            "Server ",
            "Object ",
            "None of the above",
        ],
        correct: 0,
    }, {
        question: "Using _______ statement is how you test for a specific condition.",
        options: ["Select",
            "If",
            "Switch",
            "For",
        ],
        correct: 0,
    },
    {
        question: "How do you write Hello World in an alert box ? ",
        options: ["alertBox(Hello World)",
            "msgBox(Hello World);",
            "msg(Hello World)",
            "alert(Hello World)",
        ],
        correct: 3,
    }, {
        question: "How do you create a function in JavaScript ? ",
        options: ["function: myFunction()",
            "function myFunction()",
            "function = myFunction()",
            "None",
        ],
        correct: 0,
    }, {
        question: "How does a FOR loop start ?",
        options: [
            "for (i = 0; i <= 5; i++)",
            "for(i <= 5; i++)",
            "for(i = 0; i <= 5)",
            "for i = 1 to 5 ",
        ],
        correct: 0,
    }, {
        question: "How can you add a comment in a JavaScript ?",
        options: [
            "//This is a comment",

            "'This is a comment",

            "<!--This is a comment-->",
            "none",
        ],
        correct: 0,
    }, {
        question: "JavaScript is the same as Java.",
        options: ["False",
            "True ",

        ],
        correct: 0,
    }, {
        question: "What JavaScript keyword declares a variable ?",
        options: ["var",
            "if",
            "for",
            "create",


        ],
        correct: 0,
    }, {
        question: "Which of the following methods is used to access HTML elements using Javascript ?",
        options: ["getElementById", "getElementByClassName", "Both A and B", "None"],
        correct: 2,
    },
]

const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, options_1, options_2, options_3, options_4] = document.querySelectorAll("#question,.option_1,.option_2,.option_3,.option_4");
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;
const loadQuiz = () => {
    const {
        question,
        options
    } = quizData[currentQuiz];
    console.log(options);
    questionElm.innerText = question;
    //options.forEach((curOption, index) => (option_1.innerText = curOption));

    //scores.innerText = `Score:${score}/${quizData.length}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};
loadQuiz();
const getSelectionOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
    //let answerElement = Array.from(answerElm);
    //return answerElm.findIndex((curElem) => curElem.checked);
};
const deselectedAnswer = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
}
submitBtn.addEventListener("click", (e) => {
    const selectedOptionIndex = getSelectionOption();
    console.log(selectedOptionIndex);
    if (selectedOptionIndex == quizData[currentQuiz].correct) {
        //score += 1;
        score = score + 1;
    }
    currentQuiz = currentQuiz + 4;
    if (currentQuiz < quizData.length) {
        deselectedAnswer();
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class = "result"> <h2>Your Scrore: ${score}/${5} Correct Answer </h2> 
            <p>Congratulations on completing the quiz</p>
            <button class="reload-button"onclick="location.reload()">Play Again</button></div>`;

    }
});