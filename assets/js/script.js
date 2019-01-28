const questions = [
    ['What is 1 + 1', 2, 3, 5, 'A'],
    ['What is 1 + 6', 2, 7, 9, 'B']
];
let [position, correctAnswers, wrongAnswers, question, userChoice] = [0, 0, 0, ,];

function renderQuestions() {
    const displayQuiz = document.getElementById('display-questions');
    const displayChoices = document.getElementById('display-choices');
    if (position >= questions.length) {
        displayQuiz.innerHTML = `Correct answers: ${correctAnswers}, Wrong answers: ${wrongAnswers}`;
        position = 0;
        displayChoices.innerHTML = '';
        return;
    }

    question = questions[position][0];
    chA = questions[position][1];
    chB = questions[position][2];
    chC = questions[position][3];
  
    displayQuiz.innerHTML = `<h3>Questions ${position + 1} of ${questions.length}</h3>`;
    displayQuiz.innerHTML += question;
    displayChoices.innerHTML = `<input type="radio" name="choices" value="A"> ${chA}`;
    displayChoices.innerHTML += `<input type="radio" name="choices" value="B"> ${chB}`;;
    displayChoices.innerHTML += `<input type="radio" name="choices" value="C"> ${chC}`;;
    displayChoices.innerHTML += `<input type="submit" onclick="checkAnswer()" value="Submit Answer">`;
}

function checkAnswer() {
    const choices = document.getElementsByName('choices');
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) userChoice = choices[i].value;
    } 

    if (userChoice == questions[position][4]) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    position++;
    renderQuestions();
}

window.addEventListener('load', renderQuestions, false);