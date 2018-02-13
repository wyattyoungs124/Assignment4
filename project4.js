/**
 *   @author Youngs, Wyatt (youngsw@ncmich.edu)
 *   @version 0.0.1
 *   @summary Assignment 4 :: created: 02/05/18
 */
//section 1
"use strict";
const PROMPT = require('readline-sync');
const MAX_ATTEMPTS = 3;
const MINIMUM_STARS = 1;
const MAXIMUM_STARS = 5;

//section 2
let numStars = [];
let movTitle;
let averageRating;

//section 3
function main() {
    setMovieTitle();
    setNumbStars();
    setResults();
    displayRating();
}


//section 4
main();

function setMovieTitle() {
    movTitle = PROMPT.question("What movie are you rating today? : ");
    if(movTitle.length === 0) {
        console.log("ERROR: No movie title found! ");
        return setMovieTitle();
    }
}

function setResults() {
    let total = 0;
    for (let rating of numStars) {
        total += rating;
    }
    averageRating = total / numStars.length;
}

function setNumbStars() {
    let attempts = 0;
    while (attempts < MAX_ATTEMPTS) {
        try {
            let answer = Number(PROMPT.question("Enter the number of stars you're rating this movie (1-5) : "));
            if(isNaN(answer)) {
                throw "Not a number!";
            }
            if(answer < MINIMUM_STARS) {
                throw "Not enough stars!";
            }
            if(answer > MAXIMUM_STARS) {
                throw "Too many stars!";
            }
            numStars.push(answer);
        }
        catch(errorMsg) {
            console.log(errorMsg);
            attempts++;
        }

    }

}


function displayRating() {
    console.log(averageRating);
}