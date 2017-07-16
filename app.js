/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */


const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');
const inquirer = require('inquirer');

// ---------------- Basic Card ---------------- //
// For Testing

// create new object
let firstPresident = BasicCard(questions[0].text, questions[0].cloze);

// // Testing
// console.log("\n-------------------");
// console.log(firstPresident.front);
// console.log(firstPresident.back);
// console.log("-------------------\n");



// ---------------- Cloze Card ---------------- //
// Create new object

let deathrow = ClozeCard(questions[1].text, questions[1].cloze);
let big = ClozeCard(questions[2].text, questions[2].cloze);
let atcq = ClozeCard(questions[3].text, questions[3].cloze);
let jazzy = ClozeCard(questions[4].text, questions[4].cloze);
let jay = ClozeCard(questions[5].text, questions[5].cloze);
let tlc = ClozeCard(questions[6].text, questions[6].cloze);

let totalScore = 0;

function startGame() {

    inquirer.prompt([{
        type: "input",
        name: "userguess",
        message: deathrow.partial + "\nAnswer:"
    }]).then(function(answers) {
        if (answers.deathrowq === deathrow.lowerCloze) {
            console.log("Correct!");
            console.log(deathrow.fullText);
        } else {
            console.log("Wrong");
            console.log(`The Correct Answer was: ${deathrow.fullText}`);
        }
    })
}

startGame()