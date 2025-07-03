let questions = [{
        "question" : "Wie alt bin ich?",
        "answer_1" : 41,
        "answer_2" : 42,
        "answer_3" : 43,
        "answer_4" : 44,
        "right_answer" : 1,
        "number" : 1
    }, 
    {  
        "question" : "Wo bin ich zu Hause?",
        "answer_1" : "Weiz",
        "answer_2" : "Fürstenfeld",
        "answer_3" : "Gleisdorf",
        "answer_4" : "Graz",
        "right_answer" : 3,
        "number" : 2
    },
    {
        "question" : "Wo wurde ich geboren?",
        "answer_1" : "Weiz",
        "answer_2" : "Feldbach",
        "answer_3" : "Hartberg",
        "answer_4" : "Graz",
        "right_answer" : 4,
        "number" : 3
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById("max_questions").innerHTML = questions.length;
    getQuestion();
}

function getQuestion(){
    let question = questions[currentQuestion];

    document.getElementById("question_text").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
    document.getElementById("currentNumber").innerHTML = question.number;
}


function answer(selection){
    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);
    let result = document.getElementById("rightWrong");
    let idRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedAnswer == question['right_answer']) {
        result.innerText = 'RICHTIG';
        document.getElementById(selection).classList.add('correct');
    } else {
        result.innerText = 'Leider falsch';
        document.getElementById(selection).classList.add('wrong');
        document.getElementById(idRightAnswer).classList.add('correct');
    }

    if (questions.number == questions.length) {
        document.getElementById('next').innerText = "Ergebnis anzeigen!"
    } else {document.getElementById("next").disabled = false;
    }
}

function nextQuestion(selection){
    currentQuestion ++;
    document.getElementById("next").disabled = true;
    resetAnswers();
    getQuestion();
    
}

function resetAnswers(){
    document.getElementById("answer_1").classList.remove('correct');
    document.getElementById("answer_2").classList.remove('correct');
    document.getElementById("answer_3").classList.remove('correct');
    document.getElementById("answer_4").classList.remove('correct');
    document.getElementById("answer_1").classList.remove('wrong');
    document.getElementById("answer_2").classList.remove('wrong');
    document.getElementById("answer_3").classList.remove('wrong');
    document.getElementById("answer_4").classList.remove('wrong');
}