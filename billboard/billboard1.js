// What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?

const fs = require('fs');
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const billboardChartObjArr = fileReader('billboard100_2000.csv').map(el => {
	[rank, song, artist, lastWeek, peakRank, weeksOnBoard, date] = el.split(',');
	return { rank, song, artist, lastWeek, peakRank, weeksOnBoard, date };
});
console.log(billboardChartObjArr);

const numberOneSongs = billboardChartObjArr
	.filter(song => +song.rank === 1)
	.map(({ song, artist }) => {
		return { song: song, artist: artist };
	});

function weeksAtNumberOne(arr) {
	let frequencyCounter = {};
	let maxValue = 0;
	let maxCount = 0;
	for (let i = 0; numberOneSongs.length > i; i++) {
		if (
			!(
				`${numberOneSongs[i].song} - ${numberOneSongs[i].artist}` in
				frequencyCounter
			)
		) {
			frequencyCounter[
				`${numberOneSongs[i].song} - ${numberOneSongs[i].artist}`
			] = 0;
		}
		frequencyCounter[
			`${numberOneSongs[i].song} - ${numberOneSongs[i].artist}`
		] += 1;
		if (
			frequencyCounter[
				`${numberOneSongs[i].song} - ${numberOneSongs[i].artist}`
			] > maxCount
		) {
			maxValue = `${numberOneSongs[i].song} - ${numberOneSongs[i].artist}`;
			maxCount =
				frequencyCounter[
					`${numberOneSongs[i].song} - ${numberOneSongs[i].artist}`
				];
		}
	}
	return `Number one song and artist: ${maxValue}. Weeks at number one: ${maxCount}.`;
}
console.log(weeksAtNumberOne(numberOneSongs));
