// Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};
const finalsObjArr = fileReader('nba_finals.csv').map(el => {
	[year, winner, loser, score, mvp] = el.split(',');
	return { year, winner, loser, score, mvp };
});


function yearsTeamHasWon (team) {
	let years = []
	for (let final of finalsObjArr) {
		if (final.winner.toLowerCase().includes(team.toLowerCase())) {
			years.push(final.year)
		} 
	}
	return years
}

console.log(yearsTeamHasWon('suns'));