// What is the longest word that has no repeating letters?
// letter cant appear more than once

const fs = require('fs');

// This function takes words from txt file and converts them into an array.
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const scrabbleWordsArray = fileReader('sowpods.txt');

function hasDuplicates(str) {
    let letterContainer = {}
    for (let char of str) {
        if (letterContainer[char]) {
            letterContainer[char]++
        } else {
            letterContainer[char] = 1
        }
    }
    for(let i = 0; i < Object.values(letterContainer).length; i++) {
        if(Object.values(letterContainer)[i] > 1) {
            return true;
        } 
    }
    return false

}

const wordsNoDuplicate = scrabbleWordsArray.filter(el => !hasDuplicates(el))
const wordsNoDuplicatedLength = wordsNoDuplicate.reduce((a, b) =>  a.length > b.length ? a : b).length;
const longestWordNoDupe = wordsNoDuplicate.filter(el => el.length === wordsNoDuplicatedLength)

console.log(longestWordNoDupe); // [ 'DERMATOGLYPHICS', 'UNCOPYRIGHTABLE' ]