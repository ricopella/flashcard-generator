const BasicCard = require('./basiccard');

// constructor for creating cloze-deletion
function ClozeCard(text, cloze) {
    this.text = text;
    // contains _only_ the cloze-deleted portion of the text.
    this.cloze = cloze;
    // property that contains _only_ the partial text
    this.partial = "...";
    // property that contains _only_ the full text.
    this.fullText = fullText; // **********

    // The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

    // Use prototypes to attach these methods, wherever possible.
}

// export
module.exports = ClozeCard;