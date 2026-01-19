let currentQuestion;
let points;
const questions = [
    { // question 1
        question: "Which event is the shortest by solve time?",
        options: ["Pyraminx", "2x2", "3x3", "4x4"],
        answer: 1
    },
    { // question 2
        question: "What is the name of the method most commonly used to solve a 3x3 cube?",
        options: ["ZZ", "Roux", "CFOP", "Petrus"],
        answer: 2
    },
    { // question 3
        question: "What does 'PLL' stand for in cubing?",
        options: ["Permute Last Layer", "Positioning Last Line", "Prepare Largest Lane", "Play Last Level"],
        answer: 0
    },
    { // question 4
        question: "Which puzzle is the most complex to solve among these options?",
        options: ["Pyraminx", "2x2", "3x3", "4x4"],
        answer: 3
    },
    {  // question 5
        question: "What is a common term for when a solve is under 10 seconds?",
        options: ["Speedcubing", "Sub-10", "minus10", "10less"],
        answer: 1
    }
];

// initializes the quiz: resets all values and shows the first question
function startQuiz() {
    currentQuestion = 0;
    points = 0;
    showQuestion();
}

// is called when an answer is selected
function selectAnswer(selectedOption) {
    // check if the selected answer is correct
    if (selectedOption === questions[currentQuestion].answer) {
        points++; // add a point for correct answer
    }
    currentQuestion++; // move to the next question
    
    if (currentQuestion < questions.length) { // if there are more questions, show next
        showQuestion();
    } else { // quiz is over, show results
        document.getElementById('questionNumber').innerText = "Quiz Complete!";
        document.getElementById('questionTitle').innerText = "You scored " + points + "/" + questions.length;
        const options = document.querySelectorAll('.card-body .btn');
        options.forEach(button => button.remove()); // delete answer buttons

        // add retry text
        const retryText = document.createElement('p');
        retryText.innerText = "Refresh the page to try again!";
        retryText.className = "text-center mt-3";
        document.getElementById('cardContents').appendChild(retryText); // add it to the card body
    }

    // using questions.length to allow for easy addition of more questions later
}

// display the current question and choices
function showQuestion() {
    document.getElementById('questionNumber').innerText = "Question " + (currentQuestion + 1) + "/" + questions.length;
    document.getElementById('questionTitle').innerText = questions[currentQuestion].question;
    const options = document.querySelectorAll('.card-body .btn'); // get all answer buttons
    // populate buttons with answer options
    options.forEach((button, index) => {
        button.innerText = questions[currentQuestion].options[index];
        button.onclick = () => selectAnswer(index); // just setting it here for simplicity
    });
}

// start the quiz when the page loads
window.onload = startQuiz;