const BasicCard = require('./basiccard');

// For Testing
// var questions = "George Washington was the first president of the United States.";
// var answer = "George Washington";

// constructor for creating cloze-deletion
function ClozeCard(text, cloze) {
    // scope-safe
    if (this instanceof ClozeCard) {
        // contains _only_ the cloze-deleted portion of the text.
        this.cloze = cloze;
        // property that contains _only_ the partial text
        this.partial = "...";
        // property that contains _only_ the full text.
        this.fullText = text;
        this.clozeDeletion = function() {
            var dotCount = 0;
            // split full text into array of words
            var arrFullText = this.fullText.split(" ");
            // console.log(arrFullText);
            // split cloze into array
            var arrCloze = this.cloze.split(" ");
            // console.log(arrCloze);

            //  loop through fulltext for matching
            for (var i = 0; i < arrFullText.length; i++) {
                // loop through cloze/partial text
                for (var j = 0; j < arrCloze.length; j++) {
                    // if cloze === itterative word in fulltext & no partial inputed
                    if (arrFullText[i] === arrCloze[j] && dotCount < 1) {
                        // replace word w/ partial
                        arrFullText[i] = this.partial;
                        dotCount++;
                        // if cloze === itterative word, but partial has been inputed
                    } else if (arrFullText[i] === arrCloze[j] && dotCount === 1) {
                        // replace with empty value
                        arrFullText[i] = "";
                    }
                    // ****The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text****
                }
            }
            console.log(arrFullText.join(" "));
        }
    } else {
        return new ClozeCard(text, cloze)
    }
}

// Create new object
// var brokenCloze = new ClozeCard(questions, answer);
var wutang = ClozeCard("Ol Dirty Bastard was the first Wu member to die", "Ol Dirty Bastard");
var mobbdeep = ClozeCard("Prodigy was the first Mobb Deep artist to pass away", "Prodigy");

console.log(wutang.clozeDeletion());
console.log(mobbdeep.clozeDeletion());

// export
module.exports = ClozeCard;