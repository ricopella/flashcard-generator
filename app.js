/* =========================================================================================================

                               Flash Cards - By: Narin R. Sundarabhaya

 =========================================================================================================== */


const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');
const questions = require('./answers.js');

// ---------------- Basic Card ---------------- //
// For Testing

// create new object
let firstPresident = BasicCard(questions[0].text, questions[0].cloze);

// Testing
console.log("\n-------------------");
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("-------------------\n");



// ---------------- Cloze Card ---------------- //
// Create new object

let wutang = ClozeCard(questions[1].text, questions[1].cloze);
let rakim = ClozeCard(questions[2].text, questions[2].cloze);

console.log("\n-------------------");
console.log(wutang.clozeDeletion());
console.log("-------------------\n");

console.log("\n-------------------");
console.log(rakim.clozeDeletion());
console.log("-------------------\n");