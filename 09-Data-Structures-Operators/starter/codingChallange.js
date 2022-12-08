'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  /* //1.
  const events = [...new Set(gameEvents.values())];
console.log(events);

//2.

gameEvents.delete(64);

//3.

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


//.4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} half] ${min}: ${event}`);
}
 */

/* for (const [goals, playerName] of game.scored.entries()) {
    console.log(`Goal ${goals + 1}: ${playerName}`);
    
}

let averageOdds = 0;
const teamOdds = Object.values(game.odds);
console.log(teamOdds);

const calcAverageOdds = function(teamOdds) {
    for (let i = 0; i < teamOdds.length; i++){
        averageOdds += teamOdds[i];
        
        
    }
    let average = averageOdds / teamOdds.length;
    console.log(`Average odds: ${average}`);
}
calcAverageOdds(teamOdds);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player]) = 1;
}

console.log(scorers); */
// for(const [team, odds] of team1.odds.entries) {
//     console.log(`odd of Victory ${team}: ${odds}`);
// };



// for (const [{teamName, odds}] of game.odds.keys()) {
//     console.log(`${teamName} ${odds}`)
// }

// for (let i = 0; i < game.odds.length; i++) {
//     console.log(game.odds);
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1; 
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Couthinho', 'Perscic'];

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// const printGoals = function(...players) {
//     console.log(`${players.length} goals were scored`);

// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likley to win');

