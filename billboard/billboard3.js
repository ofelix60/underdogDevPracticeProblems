// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

const fs = require('fs');
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const billboardChartObjArr = fileReader('billboard100_2000.csv').map(el => {
	[rank, song, artist, lastWeek, peakRank, weeksOnBoard, date] = el.split(',');
	return { rank, song, artist, lastWeek, peakRank, weeksOnBoard, date };
});

function longestChartingSong(arr) {
	// makes and populates obj with artist number of songs and array of those songs. returns obj
	const frequencyCounter = {};
	let numberToBeat = 0;
	let songToBeat = '';
	for (let stat of arr) {
		if (!frequencyCounter[stat.song]) {
			frequencyCounter[stat.song] = [0, stat.artist];
		}
		frequencyCounter[stat.song][0] += 1;
		// console.log(frequencyCounter[stat.song][0]);
		if (numberToBeat < frequencyCounter[stat.song][0]) {
			numberToBeat = frequencyCounter[stat.song][0];
			songToBeat = `${stat.song} by ${stat.artist} was on the charts for ${
				frequencyCounter[stat.song][0]
			} weeks!`;
		}
	}
	return songToBeat;
}

console.log(longestChartingSong(billboardChartObjArr));
// tallyOfSongsByArtist(billboardChartObjArr);
