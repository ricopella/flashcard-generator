// constructor for creating cloze-deletion
function ClozeCard(text, cloze) {
    // scope-safe
    if (this instanceof ClozeCard) {
        // contains _only_ the cloze-deleted portion of the text.
        var lowerfullText = text.toLowerCase();
        var lowerCloze = cloze.toLowerCase();

        // log an error when the cloze deletion does _not_ appear in the input text
        if (!lowerfullText.includes(lowerCloze)) {
            console.log(`ERROR: ${cloze} does not appear within full text!`);
            return;
        }
        // property that contains _only_ the partial text
        this.cloze = cloze;
        // property that contains _only_ the full text.
        this.fullText = text;
        // replaces the cloze with ...
        this.partial = text.replace(cloze, "...")
    } else {
        return new ClozeCard(text, cloze)
    }
}

// export to app.js
module.exports = ClozeCard;