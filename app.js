/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */

const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');
const inquirer = require('inquirer');
const colors = require('colors');
const process = require('process');

let totalScore = 0;
let curQuestion = 0;


// ---------------- Basic Card ---------------- //

function basicGame() {
    // create new object
    let newQues = BasicCard(questions[curQuestion].text, questions[curQuestion].cloze);

    console.log("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n".magenta);
    inquirer.prompt([{
        name: "userguess",
        message: newQues.front + "\nAnswer:",
        type: "input"
    }]).then(function(answers) {
        if (answers.userguess.toLowerCase() === newQues.back.toLowerCase()) {
            console.log("\nThat's Correct! You're earned 1 Point!\n".green);
            totalScore++;
            curQuestion++;
        } else {
            console.log("\nThat is incorrect. You've lost 1 point".red);
            console.log(`The correct answer was ${newQues.back}\n`);
            totalScore--;
            curQuestion++;
        }

        if (curQuestion < 5) {
            basicGame();
        } else {
            // if no more questions
            console.log(`\nQuiz is Complete!\nFinal Score: ${totalScore}`.yellow + `\n`);
            console.log("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n".magenta);
            inquirer.prompt([{
                name: "newgame",
                message: "Would you like to play again?",
                type: "confirm"
            }]).then(function(answers) {
                if (answers.newgame === true) {
                    // reset score & counter / trigger new game
                    basicGame()
                    totalScore = 0;
                    curQuestion = 0;
                } else {
                    console.log("");
                    inquirer.prompt([{
                        name: "newgame",
                        message: "Would you like to try the cloze quiz?",
                        type: "confirm"
                    }]).then(function(answers) {
                        if (answers.newgame === true) {
                            // reset score & counter / trigger new game
                            startGame()
                            totalScore = 0;
                        } else {
                            // exit
                            return false
                        }

                    })
                }

            })
        }

    })
}



// ---------------- Cloze Card ---------------- //

let currentQuestion = 5;

function startGame() {

    // Create new obj for each question
    let newQues = ClozeCard(questions[currentQuestion].text, questions[currentQuestion].cloze, questions[currentQuestion].hint);

    console.log("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n".magenta);
    inquirer.prompt([{
        type: "input",
        name: "userguess",
        message: newQues.partial + "\nAnswer".blue + "(enter 'help' for a hint):".grey,
        validate: function(value) {
            // user must enter something
            if (value === "help") {
                return newQues.hint;
            } else if (value.length < 1) {
                return "Please enter an answer";
            } else {
                return true;
            }
        }
    }]).then(function(answers) {
        // If guessed correct
        if (answers.userguess.toLowerCase() === newQues.lowerCloze) {
            currentQuestion++;
            totalScore++;
            console.log(`\nThat's CORRECT! You're awarded 1 point\nYour Score: ${totalScore}\n`.green);
            // if guessed incorrect
        } else {
            currentQuestion++;
            totalScore--;
            console.log(`\nSorry, that answer is INCORRECT.\nThe Correct Answer was: ${newQues.cloze}\nYou lose 1 point - Current Score: ${totalScore}\n`.red);
        }
        // recurssion until end of questions
        if (currentQuestion < questions.length) {
            startGame();
        } else {
            // if no more questions
            console.log(`\nFinal Score: ${totalScore}`.yellow + `\n`);

            // promt user if they'd like to play a new game
            inquirer.prompt([{
                name: "newgame",
                message: "Would you like to play again?",
                type: "confirm"
            }]).then(function(answers) {
                if (answers.newgame === true) {
                    // reset score & counter / trigger new game
                    totalScore = 0;
                    currentQuestion = 5;
                    startGame()
                } else {
                    // exit
                    return false
                }
            })
        }
    })
}

// decide which game the user would like to play based off the input
const whichGame = process.argv[2];
whichGame === "basic" ? basicGame() : startGame();