/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */


const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');
const inquirer = require('inquirer');
const colors = require('colors');

// ---------------- Basic Card ---------------- //
// For Testing

// create new object
let FirstPresident = BasicCard(questions[0].text, questions[0].cloze);

// // Testing
// console.log("\n-------------------");
// console.log(FirstPresident.front);
// console.log(FirstPresident.back);
// console.log("-------------------\n");



// ---------------- Cloze Card ---------------- //
// Create new obj

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

startGame()