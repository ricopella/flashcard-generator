/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */


const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');
const inquirer = require('inquirer');
const colors = require('colors');
const process = require('process');

// ---------------- Basic Card ---------------- //

function basicGame() {
    // create new object
    let FirstPresident = BasicCard(questions[0].text, questions[0].cloze);

    inquirer.prompt([{
        name: "userguess",
        message: FirstPresident.front + "\nAnswer:",
        type: "input"
    }]).then(function(answers) {
        if (answers.userguess.toLowerCase() === FirstPresident.back.toLowerCase()) {
            console.log("That's Correct!");
        } else {
            console.log("That is incorrect.");
            console.log(`Correct answer was ${FirstPresident.cloze}`);
        }
    })
}


// ---------------- Cloze Card ---------------- //

let totalScore = 0;
let currentQuestion = 1;

function startGame() {

    // Create new obj for each question
    let newQues = ClozeCard(questions[currentQuestion].text, questions[currentQuestion].cloze);

    inquirer.prompt([{
        type: "input",
        name: "userguess",
        message: newQues.partial + "\nAnswer:",
        validate: function(value) {
            // user must enter something
            if (value.length < 1) {
                return "Please enter an answer"
            } else {
                return true;
            }
        }
    }]).then(function(answers) {
        if (answers.userguess.toLowerCase() === newQues.lowerCloze) {
            console.log("Correct!".green);
            console.log(newQues.fullText);
            currentQuestion++;
            totalScore++
        } else {
            console.log("Wrong".red);
            console.log(`The Correct Answer was: ${newQues.fullText}`);
            currentQuestion++;
            totalScore--
        }
        // recurssion until end of questions
        if (currentQuestion < questions.length) {
            startGame();
        } else {
            console.log("");
            console.log(`Final Score: ${totalScore}`.yellow);
            return;
        }
    })
}

// decide which game the user would like to play based off the input
const whichGame = process.argv[2];
whichGame === "basic" ? basicGame() : startGame();