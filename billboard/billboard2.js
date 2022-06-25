// What artist had the most songs chart in 2000, and what were those songs?

const fs = require('fs');
const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

const billboardChartObjArr = fileReader('billboard100_2000.csv').map(el => {
	[rank, song, artist, lastWeek, peakRank, weeksOnBoard, date] = el.split(',');
	return { rank, song, artist, lastWeek, peakRank, weeksOnBoard, date };
});

// const something = billboardChartObjArr.filter(position => position.)
const something = [...new Set(billboardChartObjArr.map(item => item.song))]

// console.log(billboardChartObjArr);
console.log(something);