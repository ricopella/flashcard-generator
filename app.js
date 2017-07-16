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

    console.log("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n".magenta);
    inquirer.prompt([{
        name: "userguess",
        message: FirstPresident.front + "\nAnswer:",
        type: "input"
    }]).then(function(answers) {
        if (answers.userguess.toLowerCase() === FirstPresident.back.toLowerCase()) {
            console.log("\nThat's Correct! Thank you for playing. Give the Cloze Quiz a try\n".green);
        } else {
            console.log("\nThat is incorrect. Thank you for playing. Give the Cloze Quiz a try".red);
            console.log(`The correct answer was ${FirstPresident.back}\n`);
        }
        console.log("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n".magenta);
        inquirer.prompt([{
            name: "newgame",
            message: "Would you like to play again?",
            type: "confirm"
        }]).then(function(answers) {
            if (answers.newgame === true) {
                // reset score & counter / trigger new game
                basicGame()
            } else {
                inquirer.prompt([{
                    name: "newgame",
                    message: "Would you like to try the cloze quiz?",
                    type: "confirm"
                }]).then(function(answers) {
                    if (answers.newgame === true) {
                        // reset score & counter / trigger new game
                        startGame()
                    } else {
                        // exit
                        return false
                    }

                })
            }

        })
    })
}



// ---------------- Cloze Card ---------------- //

let totalScore = 0;
let currentQuestion = 1;

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
                    currentQuestion = 1;
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