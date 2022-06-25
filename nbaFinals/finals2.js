// Which teams have made it to the NBA finals but have never won?
const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\r\n/);
};
const finalsObjArr = fileReader('nba_finals.csv').map(el => {
	[year, winner, loser, score, mvp] = el.split(',');
	return { year, winner, loser, score, mvp };
});

function madeTheContestNeverWon () {
    let winners = {}
    let losers = {}
    let result = []
    for (let final of finalsObjArr) {
        winners[final.winner] = (winners[final.winner] || 0) + 1
        losers[final.loser] = (loser[final.loser] || 0) +1
    }
    for (let key in losers) {
        if(!(key in winners)) {
            result.push(key)
        }
    }
    return result
}

console.log(madeTheContestNeverWon());