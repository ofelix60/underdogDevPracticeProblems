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

function findMultMvpWinners () {
    let mvp = {}
    // maps number of mvps that won mult time
    let mvpFormatted = {}
    // maps every year's 
    for (let final of finalsObjArr) {
        if (final.mvp.length > 1) {
            mvp[final.mvp] = (mvp[final.mvp] || 0) + 1;
        }
    }
    Object.entries(mvp).forEach(el => {
        if (el[1] > 1) {
            if(!(el[1] in mvpFormatted)) {
                mvpFormatted[el[1]] = []
            } 
            mvpFormatted[el[1]].push(el[0])
        }
    })
    return Object.entries(mvpFormatted).forEach(player => {
        if(player)
        console.log(`${player[0]} Times : ${player[1]}`);
    })

}

console.log(findMultMvpWinners());


const finalsObjArr2 = [
  {
    year: '2019',
    winner: 'Toronto Raptors',
    loser: 'Golden State Warriors',
    score: '4-2',
    mvp: 'Kawhi Leonard'
  },
  {
    year: '2018',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-0',
    mvp: 'Kevin Durant'
  },
  {
    year: '2017',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-1',
    mvp: 'Kevin Durant'
  },
  {
    year: '2016',
    winner: 'Cleveland Cavaliers',
    loser: 'Golden State Warriors',
    score: '4-3',
    mvp: 'LeBron James'
  },
  {
    year: '2015',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-2',
    mvp: 'Andre Iguodala'
  },
  {
    year: '2014',
    winner: 'San Antonio Spurs',
    loser: 'Miami Heat',
    score: '4-1',
    mvp: 'Kawhi Leonard'
  },
  {
    year: '2013',
    winner: 'Miami Heat',
    loser: 'San Antonio Spurs',
    score: '4-3',
    mvp: 'LeBron James'
  },
  {
    year: '2012',
    winner: 'Miami Heat',
    loser: 'Oklahoma City Thunder',
    score: '4-1',
    mvp: 'LeBron James'
  },
  {
    year: '2011',
    winner: 'Dallas Mavericks',
    loser: 'Miami Heat',
    score: '4-2',
    mvp: 'Dirk Nowitzki'
  },
  {
    year: '2010',
    winner: 'Los Angeles Lakers',
    loser: 'Boston Celtics',
    score: '4-3',
    mvp: 'Kobe Bryant'
  },
  {
    year: '2009',
    winner: 'Los Angeles Lakers',
    loser: 'Orlando Magic',
    score: '4-1',
    mvp: 'Kobe Bryant'
  },
  {
    year: '2008',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-2',
    mvp: 'Paul Pierce'
  },
  {
    year: '2007',
    winner: 'San Antonio Spurs',
    loser: 'Cleveland Cavaliers',
    score: '4-0',
    mvp: 'Tony Parker'
  },
  {
    year: '2006',
    winner: 'Miami Heat',
    loser: 'Dallas Mavericks',
    score: '4-2',
    mvp: 'Dwyane Wade'
  },
  {
    year: '2005',
    winner: 'San Antonio Spurs',
    loser: 'Detroit Pistons',
    score: '4-3',
    mvp: 'Tim Duncan'
  },
  {
    year: '2004',
    winner: 'Detroit Pistons',
    loser: 'Los Angeles Lakers',
    score: '4-1',
    mvp: 'Chauncey Billups'
  },
  {
    year: '2003',
    winner: 'San Antonio Spurs',
    loser: 'New Jersey Nets',
    score: '4-2',
    mvp: 'Tim Duncan'
  },
  {
    year: '2002',
    winner: 'Los Angeles Lakers',
    loser: 'New Jersey Nets',
    score: '4-0',
    mvp: "Shaquille O'Neal"
  },
  {
    year: '2001',
    winner: 'Los Angeles Lakers',
    loser: 'Philadelphia 76ers',
    score: '4-1',
    mvp: "Shaquille O'Neal"
  },
  {
    year: '2000',
    winner: 'Los Angeles Lakers',
    loser: 'Indiana Pacers',
    score: '4-2',
    mvp: "Shaquille O'Neal"
  },
  {
    year: '1999',
    winner: 'San Antonio Spurs',
    loser: 'New York Knicks',
    score: '4-1',
    mvp: 'Tim Duncan'
  },
  {
    year: '1998',
    winner: 'Chicago Bulls',
    loser: 'Utah Jazz',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: '1997',
    winner: 'Chicago Bulls',
    loser: 'Utah Jazz',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: '1996',
    winner: 'Chicago Bulls',
    loser: 'Seattle SuperSonics',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: '1995',
    winner: 'Houston Rockets',
    loser: 'Orlando Magic',
    score: '4-0',
    mvp: 'Hakeem Olajuwon'
  },
  {
    year: '1994',
    winner: 'Houston Rockets',
    loser: 'New York Knicks',
    score: '4-3',
    mvp: 'Hakeem Olajuwon'
  },
  {
    year: '1993',
    winner: 'Chicago Bulls',
    loser: 'Phoenix Suns',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: '1992',
    winner: 'Chicago Bulls',
    loser: 'Portland Trail Blazers',
    score: '4-2',
    mvp: 'Michael Jordan'
  },
  {
    year: '1991',
    winner: 'Chicago Bulls',
    loser: 'Los Angeles Lakers',
    score: '4-1',
    mvp: 'Michael Jordan'
  },
  {
    year: '1990',
    winner: 'Detroit Pistons',
    loser: 'Portland Trail Blazers',
    score: '4-1',
    mvp: 'Isiah Thomas'
  },
  {
    year: '1989',
    winner: 'Detroit Pistons',
    loser: 'Los Angeles Lakers',
    score: '4-0',
    mvp: 'Joe Dumars'
  },
  {
    year: '1988',
    winner: 'Los Angeles Lakers',
    loser: 'Detroit Pistons',
    score: '4-3',
    mvp: 'James Worthy'
  },
  {
    year: '1987',
    winner: 'Los Angeles Lakers',
    loser: 'Boston Celtics',
    score: '4-2',
    mvp: 'Magic Johnson'
  },
  {
    year: '1986',
    winner: 'Boston Celtics',
    loser: 'Houston Rockets',
    score: '4-2',
    mvp: 'Larry Bird'
  },
  {
    year: '1985',
    winner: 'Los Angeles Lakers',
    loser: 'Boston Celtics',
    score: '4-2',
    mvp: 'Kareem Abdul-Jabbar'
  },
  {
    year: '1984',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-3',
    mvp: 'Larry Bird'
  },
  {
    year: '1983',
    winner: 'Philadelphia 76ers',
    loser: 'Los Angeles Lakers',
    score: '4-0',
    mvp: 'Moses Malone'
  },
  {
    year: '1982',
    winner: 'Los Angeles Lakers',
    loser: 'Philadelphia 76ers',
    score: '4-2',
    mvp: 'Magic Johnson'
  },
  {
    year: '1981',
    winner: 'Boston Celtics',
    loser: 'Houston Rockets',
    score: '4-2',
    mvp: 'Cedric Maxwell'
  },
  {
    year: '1980',
    winner: 'Los Angeles Lakers',
    loser: 'Philadelphia 76ers',
    score: '4-2',
    mvp: 'Magic Johnson'
  },
  {
    year: '1979',
    winner: 'Seattle SuperSonics',
    loser: 'Washington Bullets',
    score: '4-1',
    mvp: 'Dennis Johnson'
  },
  {
    year: '1978',
    winner: 'Washington Bullets',
    loser: 'Seattle SuperSonics',
    score: '4-3',
    mvp: 'Wes Unseld'
  },
  {
    year: '1977',
    winner: 'Portland Trail Blazers',
    loser: 'Philadelphia 76ers',
    score: '4-2',
    mvp: 'Bill Walton'
  },
  {
    year: '1976',
    winner: 'Boston Celtics',
    loser: 'Phoenix Suns',
    score: '4-2',
    mvp: 'Jo Jo White'
  },
  {
    year: '1975',
    winner: 'Golden State Warriors',
    loser: 'Washington Bullets',
    score: '4-0',
    mvp: 'Rick Barry'
  },
  {
    year: '1974',
    winner: 'Boston Celtics',
    loser: 'Milwaukee Bucks',
    score: '4-3',
    mvp: 'John Havlicek'
  },
  {
    year: '1973',
    winner: 'New York Knicks',
    loser: 'Los Angeles Lakers',
    score: '4-1',
    mvp: 'Willis Reed'
  },
  {
    year: '1972',
    winner: 'Los Angeles Lakers',
    loser: 'New York Knicks',
    score: '4-1',
    mvp: 'Wilt Chamberlain'
  },
  {
    year: '1971',
    winner: 'Milwaukee Bucks',
    loser: 'Baltimore Bullets',
    score: '4-0',
    mvp: 'Lew Alcindor'
  },
  {
    year: '1970',
    winner: 'New York Knicks',
    loser: 'Los Angeles Lakers',
    score: '4-3',
    mvp: 'Willis Reed'
  },
  {
    year: '1969',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-3',
    mvp: 'Jerry West'
  },
  {
    year: '1968',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1967',
    winner: 'Philadelphia 76ers',
    loser: 'San Francisco Warriors',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1966',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1965',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-1',
    mvp: ''
  },
  {
    year: '1964',
    winner: 'Boston Celtics',
    loser: 'San Francisco Warriors',
    score: '4-1',
    mvp: ''
  },
  {
    year: '1963',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1962',
    winner: 'Boston Celtics',
    loser: 'Los Angeles Lakers',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1961',
    winner: 'Boston Celtics',
    loser: 'St. Louis Hawks',
    score: '4-1',
    mvp: ''
  },
  {
    year: '1960',
    winner: 'Boston Celtics',
    loser: 'St. Louis Hawks',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1959',
    winner: 'Boston Celtics',
    loser: 'Minneapolis Lakers',
    score: '4-0',
    mvp: ''
  },
  {
    year: '1958',
    winner: 'St. Louis Hawks',
    loser: 'Boston Celtics',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1957',
    winner: 'Boston Celtics',
    loser: 'St. Louis Hawks',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1956',
    winner: 'Philadelphia Warriors',
    loser: 'Fort Wayne Pistons',
    score: '4-1',
    mvp: ''
  },
  {
    year: '1955',
    winner: 'Syracuse Nationals',
    loser: 'Fort Wayne Pistons',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1954',
    winner: 'Minneapolis Lakers',
    loser: 'Syracuse Nationals',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1953',
    winner: 'Minneapolis Lakers',
    loser: 'New York Knickerbockers',
    score: '4-1',
    mvp: ''
  },
  {
    year: '1952',
    winner: 'Minneapolis Lakers',
    loser: 'New York Knickerbockers',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1951',
    winner: 'Rochester Royals',
    loser: 'New York Knickerbockers',
    score: '4-3',
    mvp: ''
  },
  {
    year: '1950',
    winner: 'Minneapolis Lakers',
    loser: 'Syracuse Nationals',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1949',
    winner: 'Minneapolis Lakers',
    loser: 'Washington Capitols',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1948',
    winner: 'Baltimore Bullets',
    loser: 'Philadelphia Warriors',
    score: '4-2',
    mvp: ''
  },
  {
    year: '1947',
    winner: 'Philadelphia Warriors',
    loser: 'Chicago Stags',
    score: '4-1',
    mvp: ''
  }
]