/*
Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week, only print it once. Example output:
These were the number one songs of 2000:

    "Try Again" - Aaliyah
    "Say My Name" - Destiny's Child
    "What A Girl Wants" - Christina Aguilera
    "Maria Maria" - Santana Featuring The Product G&B
    "Smooth" - Santana Featuring Rob Thomas
    "Independent Women Part I" - Destiny's Child
*/

const fs = require('fs');

const fileReader = function (filepath) {
	return fs.readFileSync(filepath, 'utf8').toString().trim().split(/\n/);
};

// rank,song,artist,last-week,peak-rank,weeks-on-board,date
const billboardChartObjArr = fileReader('billboard100_2000.csv').map(el => {
	[rank, song, artist, lastWeek, peakRank, weeksOnBoard, date] = el.split(',');
	return { rank, song, artist, lastWeek, peakRank, weeksOnBoard, date };
});


const numberOneSongs = billboardChartObjArr.filter(song => +song.rank === 1).map(({ song, artist }) => {
    return {'song': song, 'artist' : artist}
}).filter((value, index, self) => {
    return index === self.findIndex((t) => (t.song === value.song ))
}).forEach(el => {
    console.log(`"${el.song}" - ${el.artist}`);
})

console.log(numberOneSongs);