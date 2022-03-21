'use strict';

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

// let mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function () {
//         mark.bmi = this.weight / this.height ** 2
//         return mark.bmi;

//     }

// };

// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function () {
//         john.bmi = this.weight / this.height ** 2
//         return john.bmi;

//     }
// }

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`Mark's  BMI(${mark.bmi}) is higher than John's(${john.bmi})`)
// } else {
//     console.log(`John's BMI(${john.bmi}) higher than Mark's BMI(${mark.bmi}) is higher than John's(${john.bmi})`)
// }

// console.log(mark.calcBMI > john.calcBMI ? `Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})` : `John's BMI (${john.bmi}) is higher than Mark's BMI (${Mark.bmi})`)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let sum = 0;

const calcTip = function (bills) {
  const tip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  // console.log(tip);
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverage = function (totals) {
  for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
  }
  // let average = sum / bills.length;
  // return average;
};

// const average = calcAverage(totals);
console.log(totals);
calcAverage(totals);
console.log(sum / totals.length);
