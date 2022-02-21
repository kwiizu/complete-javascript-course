
/* const markWeightData1 = 78;
const markHeightData1 = 1.69;

const markWeightData2 = 95;
const markLengthData2 = 1.88

const johnWeightData1 = 92;
const johnHeightData1 = 1.95;

const johnWeightData2 = 85;
const johnHeightData2 = 1.76;

let markBmi = markWeightData1 / markHeightData1 ** 2;
let markBmi2 = markWeightData2 / (markLengthData2 * markLengthData2);

let johnBmi = johnWeightData1 / johnHeightData1 ** 2;
let johnBmi2 = johnWeightData2 / (johnHeightData2 * johnHeightData2);

const markHigherBmi = markBmi > johnBmi;
//console.log(markHigherBmi);

const markHigherBmi2 = markBmi2 > johnBmi2;
//console.log(markHigherBmi2);

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi.toFixed(1)}) is higer than John's BMI (${johnBmi.toFixed(1)})`);

} else {
    console.log(`John's BMI (${johnBmi.toFixed(1)}) is higher than Mark's BMI (${markBmi.toFixed(1)})`);

};
 */

// const dolphins = (109 + 95 + 123) / 3
// const koalas = (109 + 95 + 106) / 3

// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100) {
//     console.log('Dolphins Wins!')
// } else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
//     console.log('Draw');
// } else if (koalas > dolphins && koalas >= 100) {
//     console.log('Koalas Wins!');
// } else { console.log('No one wins! 😔') };

// const today = 'monday';

// if (today === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (today === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (today === 'wednesday' || today === 'thursday') {
//     console.log('Write code examples')
// } else if (today === 'friday') {
//     console.log('Record videos');
// } else if (today === 'saturday' || today === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

let tip;
const bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const total = bill + tip

bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill} and tip ${tip}, and the totale value ${bill + tip}`) : console.log(`The bill was ${bill} and tip ${tip}, and the total value ${bill + tip}`);
