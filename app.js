/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */


const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');

// ---------------- Basic Card ---------------- //
// For Testing
// let question = "Who was the first president of the United States?";
// let answer = "George Washington";

// create new object
// let firstPresident = BasicCard(question, answer);

// Testing
// console.log(firstPresident.front);
// console.log(firstPresident.back);


// ---------------- Cloze Card ---------------- //
// Create new object
// var brokenCloze = new ClozeCard(questions, answer);
let wutang = ClozeCard(questions[0].text, questions[0].cloze);
let rakim = ClozeCard(questions[1].text, questions[1].cloze);
// var testing = ClozeCard("This doesn't work", "oops");

console.log(wutang.clozeDeletion());
console.log(rakim.clozeDeletion());
// console.log(testing.clozeDeletion());