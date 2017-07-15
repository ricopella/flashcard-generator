// constructor for creating basic flashcards
function BasicCard(front, back) {

    if (this instanceof BasicCard) {
        // text of the front of the card
        this.front = front;
        //  text of the back of the card aka the answer
        this.back = back;
    } else {
        return new BasicCard(front, back)
    }
}


// export to app.js
module.exports = BasicCard;