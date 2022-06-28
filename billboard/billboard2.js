// What artist had the most songs chart in 2000, and what were those songs?

const fs = require('fs');
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const billboardChartObjArr = fileReader('billboard100_2000.csv').map(el => {
	[rank, song, artist, lastWeek, peakRank, weeksOnBoard, date] = el.split(',');
	return { rank, song, artist, lastWeek, peakRank, weeksOnBoard, date };
});

function tallyOfSongsByArtist(arr) {
	// makes and populates obj with artist number of songs and array of those songs. returns obj
	const frequencyCounter = {};
	for (let stat of arr) {
		if (!frequencyCounter[stat.artist]) {
			frequencyCounter[stat.artist] = [0, [], []]; // store more data.
		}
		if (!frequencyCounter[stat.artist][1].includes(stat.song)) {
			frequencyCounter[stat.artist][0] += 1;
			frequencyCounter[stat.artist][1].push(stat.song);
			frequencyCounter[stat.artist][2].push(stat);
		}
	}
	return frequencyCounter;
}

console.log(tallyOfSongsByArtist(billboardChartObjArr));

function artistWithMostSongsFinder(obj) {
	let numberToBeat = 0;
	let container = [];
	Object.entries(obj).forEach(el => {
		if (el[1][1].length > numberToBeat) {
			numberToBeat = el[1][1].length;
			container = [];
			container.push(el);
		}
	});
	console.log(
		`${container[0][0]} had the most songs chart in the year 2000. The songs were ${container[0][1][1]}`
	);
}

// artistWithMostSongsFinder(tallyOfSongsByArtist(billboardChartObjArr));
