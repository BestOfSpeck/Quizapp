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

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestinaNumber = selection.slice(-1);


    console.log('selected questiin number is ', selectedQuestinaNumber);
    console.log('currend question is ', question);
    console.log('Selected answer is ', selection);

    if (selectedQuestinaNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('bg-success');
        console.log('die antwort ist richtig');
    } else {
        document.getElementById(selection).classList.add('bg-danger');
        console.log('Die Antwort ist FALSCH');
    }
}