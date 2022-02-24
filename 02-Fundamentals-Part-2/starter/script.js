'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');


// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Alex');
// }

// //calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)


// Function declaration
// function calcAge1(birthYear) {
// return 2037 - birthYear;
// }
// const age1 = calcAge1(1987);
// console.log(age1);

//Function expression
// const calcage2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcage2(1987);

// console.log(age1, age2);

//Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1987, 'Alex'));

// const cutFruitPieces = function (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;

//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1987, 'Alex'));
// console.log(yearsUntilRetirement(1950, 'Ellen'));

// const friends = ['Michael', 'Steven', 'Peter'];
/* console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //Last position in array

friends[2] = 'Jay'; //Modiferar position 3.
console.log(friends);

const alex = ['Alex', 'Wu', 2022 - 1987, 'IT tech', friends];

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018]; // skapar en array

const age1 = calcAge(years[0]); //assignar en position i en array till variable
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), years[years.length - 1]] // stoppar in arrays i en array

console.log(ages); */


// //add elements
// const friends = ['Michael', 'Steven', 'Peter'];

// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop(); //last position
// const popped = friends.pop()
// console.log(friends);
// console.log(popped);

// friends.shift(); // First position
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Steven')); // True
// console.log(friends.includes('Bob')); // False

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

const alexArray = [
    'Alex',
    'Wu',
    2037 - 1987,
    'IT',
    ['Michael', 'Peter', 'Steven']
];

const alex = {
    firstName: 'Alex',
    lastName: 'Wu',
    age: 2037 - 1987,
    job: 'IT',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(alex.friends);