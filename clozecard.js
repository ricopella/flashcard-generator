// constructor for creating cloze-deletion
function ClozeCard(text, cloze, hint) {
    // scope-safe
    if (this instanceof ClozeCard) {
        // contains _only_ the cloze-deleted portion of the text.
        this.lowerfullText = text.toLowerCase();
        this.lowerCloze = cloze.toLowerCase();

        // log an error when the cloze deletion does _not_ appear in the input text
        if (!this.lowerfullText.includes(this.lowerCloze)) {
            console.log(`ERROR: ${cloze} does not appear within full text!`);
            return;
        }
        // property that contains _only_ the partial text
        this.cloze = cloze;
        // property that contains _only_ the full text.
        this.fullText = text;
        this.hint = hint;
        // replaces the cloze with ...
        this.partial = text.replace(cloze, "...")
    } else {
        return new ClozeCard(text, cloze, hint)
    }
}

// export to app.js
module.exports = ClozeCard;