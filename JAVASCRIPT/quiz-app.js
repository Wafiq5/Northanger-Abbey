// Quiz objects collection
const quizzes = {
    characterQuiz: {
        questions: [
            {
                question: "Who is Catherine Morland, and what role does her love for Gothic novels play in the story?",
                possibleAnswers: [
                    "She is a mysterious noblewoman who lives in Northanger Abbey.",
                    "She is a young, imaginative girl whose love for Gothic novels influences her perceptions.",
                    "She is Henry Tilney’s sister and a key antagonist in the story.",
                    "She is a servant at Northanger Abbey who uncovers a hidden family secret."
                ],
                correctAnswer: "She is a young, imaginative girl whose love for Gothic novels influences her perceptions."
            },
            {
                question: "What are the key characteristics of Henry Tilney, and how does he contrast with John Thorpe?",
                possibleAnswers: [
                    "Henry is sarcastic and unkind, while John is thoughtful and reserved.",
                    "Henry is charming and witty, while John is boastful and pushy.",
                    "Henry is reckless and irresponsible, while John is wise and patient.",
                    "Henry is quiet and shy, while John is outgoing and friendly."
                ],
                correctAnswer: "Henry is charming and witty, while John is boastful and pushy."
            },
            {
                question: "How does Catherine’s perception of Northanger Abbey differ from reality, and what lesson does she learn?",
                possibleAnswers: [
                    "She believes it is haunted but realizes it is just a normal family estate.",
                    "She expects it to be luxurious, but it turns out to be a ruined castle.",
                    "She thinks it is full of ghosts and secret passages, but she learns not to let fiction cloud her judgment.",
                    "She believes it is cursed, but she finds out it holds a hidden treasure."
                ],
                correctAnswer: "She thinks it is full of ghosts and secret passages, but she learns not to let fiction cloud her judgment."
            },
            {
                question: "Which families are introduced in the character section, and how are they related to Catherine Morland?",
                possibleAnswers: [
                    "The Bennet, Dashwood, and Elliot families, all unrelated to Catherine.",
                    "The Morland, Tilney, Allen, and Thorpe families, who are friends and acquaintances of Catherine.",
                    "The Tilney, Darcy, and Ferrars families, who are all part of the aristocracy.",
                    "The Morland, Bingley, and Woodhouse families, who are all Catherine’s relatives."
                ],
                correctAnswer: "The Morland, Tilney, Allen, and Thorpe families, who are friends and acquaintances of Catherine."
            },
            {
                question: "What is the significance of Bath in the novel, and how does it contribute to Catherine’s character development?",
                possibleAnswers: [
                    "It is where she first meets Henry Tilney and learns about high society.",
                    "It is the place where she discovers a family secret that changes her life.",
                    "It is the setting for her final confrontation with General Tilney.",
                    "It is where she is forced to marry John Thorpe against her will."
                ],
                correctAnswer: "It is where she first meets Henry Tilney and learns about high society."
            }
        ]            
    },
    timelineQuiz: {
        questions: [
            {
                question: "Why is Catherine Morland invited to Bath?",
                possibleAnswers: [
                    "To meet Henry Tilney",
                    "To visit the Thorpe family",
                    "To spend the season with the Allens",
                    "To explore Northanger Abbey"
                ],
                correctAnswer: "To spend the season with the Allens"
            },
            {
                question: "What is Catherine’s initial impression of John Thorpe?",
                possibleAnswers: [
                    "She finds him charming and attractive",
                    "She believes he is too forward and unappealing",
                    "She sees him as a close friend",
                    "She is immediately interested in him"
                ],
                correctAnswer: "She believes he is too forward and unappealing"
            },
            {
                question: "How does Catherine's imagination affect her time at Northanger Abbey?",
                possibleAnswers: [
                    "She remains calm and focused on her surroundings",
                    "She imagines dark secrets and a mysterious past",
                    "She falls in love with Captain Tilney",
                    "She discovers that General Tilney is a kind and honest man"
                ],
                correctAnswer: "She imagines dark secrets and a mysterious past"
            },
            {
                question: "What causes General Tilney to expel Catherine from Northanger Abbey?",
                possibleAnswers: [
                    "She argues with Eleanor Tilney",
                    "He finds out that she is not as wealthy as he thought",
                    "She refuses to dance with him",
                    "She breaks her engagement with James"
                ],
                correctAnswer: "He finds out that she is not as wealthy as he thought"
            },
            {
                question: "What happens at the end of the novel?",
                possibleAnswers: [
                    "Catherine returns to Bath and never sees Henry again",
                    "Henry proposes to Catherine, and they get married",
                    "Catherine chooses John Thorpe over Henry",
                    "Isabella gets married to Captain Tilney"
                ],
                correctAnswer: "Henry proposes to Catherine, and they get married"
            }
        ]            
    },
    analysisQuiz: {
        questions: [
            {
                question: "How does Jane Austen use satire in Northanger Abbey?",
                possibleAnswers: [
                    "By exaggerating Catherine’s love for Henry Tilney",
                    "By making fun of Gothic novel tropes through Catherine’s imagination",
                    "By portraying Isabella Thorpe as the perfect friend",
                    "By making General Tilney an actual murderer"
                ],
                correctAnswer: "By making fun of Gothic novel tropes through Catherine’s imagination"
            },
            {
                question: "Why does General Tilney initially welcome Catherine to Northanger Abbey?",
                possibleAnswers: [
                    "He believes she is from a wealthy family",
                    "He sees her as a good match for Henry due to her intelligence",
                    "He pities her because she has no family",
                    "He admires her love for Gothic novels"
                ],
                correctAnswer: "He believes she is from a wealthy family"
            },
            {
                question: "What does Catherine’s obsession with Gothic novels lead her to believe about General Tilney?",
                possibleAnswers: [
                    "That he is secretly wealthy and hiding his fortune",
                    "That he has murdered his wife and locked her away",
                    "That he is planning to force Henry to marry Isabella",
                    "That he is an actual hero in disguise"
                ],
                correctAnswer: "That he has murdered his wife and locked her away"
            },
            {
                question: "How does Henry Tilney react when Catherine accuses his father of murder?",
                possibleAnswers: [
                    "He is amused and explains the truth to her",
                    "He angrily defends his father and refuses to speak to her",
                    "He agrees with her suspicions to scare her",
                    "He tells her to leave Northanger Abbey immediately"
                ],
                correctAnswer: "He is amused and explains the truth to her"
            },
            {
                question: "What lesson does Catherine learn from her relationship with Isabella Thorpe?",
                possibleAnswers: [
                    "True friends will always forgive each other",
                    "Friendship should be based on wealth and status",
                    "Loyalty based on convenience is not real loyalty",
                    "Isabella was right, and Catherine was too harsh on her"
                ],
                correctAnswer: "Loyalty based on convenience is not real loyalty"
            },
            {
                question: "What does the Regency era’s strict social etiquette prevent Catherine from doing?",
                possibleAnswers: [
                    "Publicly disagreeing with John Thorpe’s lies about her",
                    "Reading Gothic novels",
                    "Dancing with Henry Tilney",
                    "Traveling alone without supervision"
                ],
                correctAnswer: "Publicly disagreeing with John Thorpe’s lies about her"
            },
            {
                question: "How does Catherine’s perception of love evolve throughout the novel?",
                possibleAnswers: [
                    "She learns that real love is based on understanding, not fantasy",
                    "She decides love is too complicated and stays single",
                    "She embraces a life of romantic adventure",
                    "She realizes love is meaningless without wealth"
                ],
                correctAnswer: "She learns that real love is based on understanding, not fantasy"
            },
            {
                question: "What is ironic about Catherine’s stay at Northanger Abbey?",
                possibleAnswers: [
                    "She expects it to be terrifying but finds it ordinary",
                    "She believes Henry is a villain, but he turns out to be kind",
                    "She assumes Eleanor is dangerous, but she helps her escape",
                    "She thinks General Tilney is poor, but he is actually wealthy"
                ],
                correctAnswer: "She expects it to be terrifying but finds it ordinary"
            },
            {
                question: "How does General Tilney’s treatment of Catherine reinforce the novel’s social critique?",
                possibleAnswers: [
                    "It shows how men had total control over women’s lives",
                    "It exposes the cruelty of wealth-based relationships",
                    "It highlights the dangers of reading too many novels",
                    "It proves that Catherine was wrong about him all along"
                ],
                correctAnswer: "It exposes the cruelty of wealth-based relationships"
            },
            {
                question: "What rhetorical appeal does Austen use to critique social expectations in Northanger Abbey?",
                possibleAnswers: [
                    "Pathos, through Catherine’s emotional experiences",
                    "Logos, through direct historical analysis",
                    "Ethos, by including real-life letters from the time period",
                    "None—Austen avoids discussing social norms"
                ],
                correctAnswer: "Pathos, through Catherine’s emotional experiences"
            }
        ]
    }
    
    
};

const quizContainer = document.querySelector('.quiz-app-container');
const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuiz = quizContainer.dataset.quiz;
let currentQuestionIndex = 0;

function loadQuiz(quizName) {
    if (quizzes[quizName]) {
        currentQuiz = quizName;
        currentQuestionIndex = 0;
        
        
        
        handleQuestion(currentQuestionIndex);
    } else {
        console.error(`Quiz '${quizName}' not found!`);
    }
}

function handleQuestion(index) {
    const currentQuestions = quizzes[currentQuiz].questions;
    
    if (index >= currentQuestions.length) {
        questionContainer.classList.add('fade-out');
        answerContainer.classList.add('fade-out');
        
        setTimeout(() => {
            questionContainer.innerHTML = `<div class="subtitle" style="text-align: center;">Quiz Completed!</div>`;
            answerContainer.innerHTML = `
                <p style="text-align: center;">You've completed the quiz.</p>
            `;
            
            questionContainer.classList.remove('question-switch-fade-out');
            questionContainer.classList.add('question-switch-fade-in');
            answerContainer.classList.remove('question-switch-fade-out');
            answerContainer.classList.add('question-switch-fade-in');
            
        }, 400);
        
        return;
    }
    
    if (quizProgress.children.length === 0) {
        currentQuestions.forEach(() => {
            quizProgress.innerHTML += "<span></span>";
        });
    }

    let spans = quizProgress.querySelectorAll("span");
    spans.forEach(span => span.classList.remove("seen"));
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add("seen");
    }
    
    questionContainer.classList.remove('question-switch-fade-out');
    questionContainer.classList.add('question-switch-fade-in');
    answerContainer.classList.remove('question-switch-fade-out');
    answerContainer.classList.add('question-switch-fade-in');
    
    questionContainer.innerHTML = `<p>${currentQuestions[index].question}</p>`;
    answerContainer.innerHTML = "";
    currentQuestions[index].possibleAnswers.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`;
    });
    
    let answers = answerContainer.querySelectorAll("button");
    answers.forEach((answer) => {
        answer.addEventListener("click", (e) => {
            const selectedAnswer = e.target;
            const correctAnswer = currentQuestions[index].correctAnswer;
            
            if (selectedAnswer.textContent === correctAnswer) {
                selectedAnswer.classList.add("correct-chosen");
                answers.forEach(btn => btn.disabled = true);
                
                setTimeout(() => {
                    questionContainer.classList.remove('question-switch-fade-in');
                    questionContainer.classList.add('question-switch-fade-out');
                    answerContainer.classList.remove('question-switch-fade-in');
                    answerContainer.classList.add('question-switch-fade-out');
                    
                    setTimeout(() => {
                        currentQuestionIndex++;
                        handleQuestion(currentQuestionIndex);
                    }, 400);
                }, 500)
            } else {
                selectedAnswer.classList.add("wrong-chosen");
                selectedAnswer.disabled = true;
            }
        });
    });
}
loadQuiz(currentQuiz);

function switchQuiz(quizName) {
    loadQuiz(quizName);
}
document.addEventListener('DOMContentLoaded', function() {
    loadQuiz(currentQuiz);
});