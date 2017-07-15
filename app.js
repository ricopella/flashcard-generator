const ClozeCard = require('./clozecard.js');
const BasicCard = require('./basiccard');

// ---------------- Basic Card ---------------- //
// For Testing
var question = "Who was the first president of the United States?";
var answer = "George Washington";

// create new object
var firstPresident = BasicCard(question, answer);

// Testing
console.log(firstPresident.front);
console.log(firstPresident.back);


// ---------------- Cloze Card ---------------- //
// Create new object
// var brokenCloze = new ClozeCard(questions, answer);
var wutang = ClozeCard("Ol Dirty Bastard was the first Wu member to die", "Ol Dirty Bastard");
var mobbdeep = ClozeCard("Prodigy was the first Mobb Deep artist to pass away", "Prodigy");

console.log(wutang.clozeDeletion());
console.log(mobbdeep.clozeDeletion());