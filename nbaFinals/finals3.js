/* Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
    - 6 times: Michael Jordan
    - 3 times: Shaquille O'Neal, LeBron James
    - 2 times: <etc>
*/

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};

const finalsObjArr = fileReader('nba_finals.csv').map(el => {
	[year, winner, loser, score, mvp] = el.split(',');
	return { year, winner, loser, score, mvp };
});

function findMultMvpWinners() {
	const playersTotalMVPs = {};
	// maps number of mvps that won mult time
	const unorderedMVPWins = {};
	const orderedMVPWins = [];

	// maps every year's
	for (let final of finalsObjArr) {
		if (final.mvp !== '') {
			const player = final.mvp;
			if (playersTotalMVPs[player]) {
				playersTotalMVPs[player] += 1;
			} else {
				playersTotalMVPs[player] = 1;
			}
		}
	}

	Object.entries(playersTotalMVPs).forEach(el => {
		if (el[1] > 1) {
			if (!(el[1] in unorderedMVPWins)) {
				unorderedMVPWins[el[1]] = [];
			}
			unorderedMVPWins[el[1]].push(el[0]);
		}
	});
	Object.entries(unorderedMVPWins).forEach(group => orderedMVPWins.push(group));
	console.log();
}
findMultMvpWinners();
