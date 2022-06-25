// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.

const fs = require('fs');

// {firstName:name1, lastName:last1}

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};

const finalsObjArr = fileReader('nba_finals.csv').map(el => {
	[year, winner, loser, score, mvp] = el.split(',');
	return { year, winner, loser, score, mvp };
});

function thisYearsWinner(year) {
	// return finalsObj.filter(obj => {
	// 	if (+obj.year === year) return obj.winner;
	// })[0].winner;
	for (let final of finalsObjArr) {
		if (+final.year === year) {
			return final.winner;
		}
	}
}

console.log(thisYearsWinner(1999));
