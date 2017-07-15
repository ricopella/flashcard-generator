// For Testing
var question = "Who was the first president of the United States?";
var answer = "George Washington";

// constructor for creating basic flashcards
function BasicCard(front, back) {
    // text of the front of the card
    this.front = front;
    //  text of the back of the card aka the answer
    this.back = back;
}

// create new object
var firstPresident = new BasicCard(question, answer);

// Testing
// console.log(firstPresident.front);
// console.log(firstPresident.back);

// export 
module.exports = BasicCard;