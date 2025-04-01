class Quiz {
    constructor(position) {
        this.position = document.getElementById(position);
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.questionSubmitted = false;
        this.nextQuestion = false;
    }


    render() {
        const currentQuestion = this.questions[this.currentQuestionIndex];


        const questionPrompt = document.getElementById("quiz-question");
        questionPrompt.innerHTML = currentQuestion.questionPrompt;


        const optionButtons = document.querySelectorAll("[data-optionButton]");
        optionButtons.forEach((button, index) => {
            if (currentQuestion.options[index]) {
                button.innerHTML = currentQuestion.options[index];
                button.setAttribute("data-optionButton", currentQuestion.options[index]);
            } else {
                button.innerHTML = "";
                button.removeAttribute("data-optionButton");
            }


            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);


            newButton.addEventListener("click", () => {
                this.questionSubmitted = true;
                this.nextQuestion = true;


                if (currentQuestion.checkAnswer(newButton.innerHTML)) {
                    newButton.classList.add("correct");
                } else {
                    newButton.classList.add("incorrect");
                    const explanation = document.getElementById("explanation");
                    explanation.innerHTML = currentQuestion.explanation;
                }
            });
        });
    }


    addQuestion(questionPrompt, options, answer, explanation) {
        const question = new Quiz.Question(questionPrompt, options, answer, explanation);
        this.questions.push(question);
    }


    static Question = class {
        constructor(questionPrompt, options, answer, explanation) {
            if (typeof questionPrompt !== "string" || questionPrompt.trim() === "") {
                throw new Error("Question prompt must be a string.");
            }


            if (!Array.isArray(options) || options.length !== 10) {
                throw new Error("Options must be an array of exactly 10 elements or an array.");
            }


            if (!options.includes(answer)) {
                throw new Error("Answer must be one of the provided options.");
            }


            if (typeof explanation !== "string" || explanation.trim() === "") {
                throw new Error("Explanation must be a non-empty string.");
            }


            this.questionPrompt = questionPrompt;
            this.options = options;
            this.answer = answer;
            this.explanation = explanation;
        }


        checkAnswer(userAnswer) {
            return this.answer === userAnswer;
        }
    };
}

const quiz = new Quiz("quiz-list");


quiz.addQuestion(
    "What is the derivative of x²?",
    ["x", "2x", "x^2", "x/2", "1", "0", "2", "x^3", "3x", "None of the above"],
    "2x",
    "The derivative of x² is found using the power rule: d/dx (x^n) = n*x^(n-1). Here, n = 2, so the derivative is 2x."
);


quiz.render();


