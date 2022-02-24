'use strict'

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgDolphin = calcAverage(88, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolphin);
// console.log(avgKoalas);


// const checkWinner = function (avgDolphin, avgKoalas) {

//     if (avgDolphin >= 2 * avgKoalas) {
//         return console.log(`Dolphins Wins! (${avgDolphin} vs ${avgKoalas})`)
//     } else if (avgKoalas > 2 * avgDolphin) {
//         return console.log(`Koala Wins (${avgKoalas} vs ${avgDolphin})`);
//     } else {
//         console.log('no team wins');
//     }
// }

// checkWinner(avgDolphin, avgKoalas);


// let tip;
// const bill = 430;
// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// const total = bill + tip

// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill} and tip ${tip}, and the totale value ${bill + tip}`) : console.log(`The bill was ${bill} and tip ${tip}, and the total value ${bill + tip}`);


// const calcTip = function (bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     console.log(tip);
//     return tip
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totalAmount = [bills.reduce((total, amount) => total + amount) + tips.reduce((total, amount) => total + amount)];

// console.log(bills);
// console.log(tips);
// console.log(totalAmount);