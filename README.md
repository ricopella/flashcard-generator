# Flashcard Generator


### Overview

This application has two game options. Both games are based around Hip-Hop trivia quesitons.

# Basic

This version is a simple flash card game where the user is promted with a question and the user input's their guess. There are five total questions.

# Cloze

This version is similar to the `Basic` version where the user is prompted with a question. The difference is, the answers to the questions are replaced with `...`. 

This test method is **[Cloze Test](https://en.wikipedia.org/wiki/Cloze_test)** where it challenges the user to identify the correct words that belong in the text of the question. There are 10 total questions.

* Stuck? Don't worry, we've added **hint** feature (cloze only)!

# Getting Started

Follow these instructions to clone the project and run on your local drive.

### Prerequisites

You will need [Node.JS](https://www.npmjs.com/) installed on your system.

### Installing

1. Clone project: 

        `git clone https://github.com/ricopella/flashcard-generator.git`

2. Inside the root directory of the cloned filed, run the following command in your terminal/bash:

        `npm install`

# Commands to run application

1.      `node app.js basic`
    * This will start the basic quiz with one question not in cloze-deletion format

2.      `node app.js cloze`
    * This will start the cloze-deletion quiz

3.      `node app.js`
    * Will default to cloze-deletion quiz

# Answers

The questions & anwers are located in the answers.js file.

# Demo

![Demo](http://gph.to/2t5sN9F)

# Packages Used

* [Node.JS](https://www.npmjs.com/)
* [Colors](https://www.npmjs.com/package/colors)
* [Inquirer](https://www.npmjs.com/package/inquirer)