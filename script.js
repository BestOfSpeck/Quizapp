let questions = [{
        "question": "Was bedeutet HTML ausgeschrieben?",
        "answer_1": "Hypertext Main Logic",
        "answer_2": "Hausgemachte Tanzende Mäuse Lampe",
        "answer_3": "Highend Text Manager Languane",
        "answer_4": "Hypertext Markup Language",
        "right_answer": 4
    },
    {
        "question": "Wofür steht das www bei vielen Internetseiten?",
        "answer_1": "World Wide Web",
        "answer_2": "Was Wissen Welpen",
        "answer_3": "World Wide Walrus",
        "answer_4": "Welt weites Welken",
        "right_answer": 1
    },
    {
        "question": "Wie wird eine Webseite designed?",
        "answer_1": "Mit CSS",
        "answer_2": "Mit Python",
        "answer_3": "Mit Java",
        "answer_4": "Mit PHP",
        "right_answer": 1
    },
    {
        "question": "Wofür sthet CSS",
        "answer_1": "Control Station Supervisor",
        "answer_2": "Conduited System Server",
        "answer_3": "Controled Server System",
        "answer_4": "Cascading Style Sheets",
        "right_answer": 4
    },
    {
        "question": "Wofür steht a href in HTML?",
        "answer_1": "Um ein Bild einzubinden",
        "answer_2": "Für einen Link",
        "answer_3": "Um PHP zu Importieren",
        "answer_4": "Für Formatierungen wie Fett und Kursiv schreiben",
        "right_answer": 2
    }
];
let rightQuestions = 0;
let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()

}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('question-body').style = 'display: none';

        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-img').src = 'img/trophy.png';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }

}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestinaNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestinaNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        rightQuestions++;

    } else {
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');

    }

    document.getElementById('next-button').disabled = false;
    document.getElementById(`answer_${selection}`).disabled = false;

}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion()

}


function resetAnswerButtons() {

    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');

}