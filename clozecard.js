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
        // method for creating the _partial_ text
        this.clozeDeletion = function() {
            let dotCount = 0;
            // split full text into array of words
            let arrFullText = this.fullText.split(" ");
            // split cloze into array
            let arrCloze = this.cloze.split(" ");

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

// export to app.js
module.exports = ClozeCard;