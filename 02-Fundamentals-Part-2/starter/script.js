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

/* const alexArray = [
    'Alex',
    'Wu',
    2037 - 1987,
    'IT',
    ['Michael', 'Peter', 'Steven']
]; */

/* const alex = {
    firstName: 'Alex',
    lastName: 'Wu',
    age: 2037 - 1987,
    job: 'IT',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(alex.lastName);
console.log(alex['lastName']);

const nameKey = 'Name';
console.log(alex['first' + nameKey]);
console.log(alex['last' + nameKey]);

const interestedIn = prompt('what do you want to know about Alex? Choose between firstName, lastName, age, job and friends')

if (alex[interestedIn]) {
    console.log(alex[interestedIn]);

} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

alex.location = 'Sweden';
alex['instagram'] = '@kwiizu';
console.log(alex.instagram);

//challange

console.log(`${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[0]} `) */


// const alex = {
//     firstName: 'Alex',
//     lastName: 'Wu',
//     birthYear: 1987,
//     job: 'IT',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }
// calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
// }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },
//     checkDriversLicense: function () {
//         if (this.hasDriversLicense) {
//             this.license = 'has a driving license';
//             return this.license;
//         } else {
//             this.license = 'does not have a driving license';
//             return this.license;
//         }
//     }

// };

// console.log(alex.calcAge());
// alex.checkDriversLicense();
// console.log(alex.age);

// console.log(alex['calcAge'](1987));

//chalange "Alex is 50 years old and he has a/no driver's licens"

// console.log(`alex is ${alex.calcAge()} years old and he ${alex.checkDriversLicense()}`);


// For loop keeps runnig while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);

// }

// const alexArray = [
//     'Alex',
//     'Wu',
//     2037 - 1987,
//     'IT',
//     ['Michael', 'Peter', 'Steven'],
//     true,
//     3232323,
//     'testtest',
// ];
// const types = [];



// for (let i = 0; i < alexArray.length; i++) {
//     console.log(alexArray[i], typeof alexArray[i]);

//     //filling types array
//     // types[i] = typeof alexArray[i];
//     types.push(typeof alexArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

//contiune and break
// console.log('----ONLY STRINGS----');
// for (let i = 0; i < alexArray.length; i++) {
//     if (typeof alexArray[i] !== 'string') continue;
//     console.log(alexArray[i], typeof alexArray[i]);

// }

// //contiune and break
// console.log('----BREAK WITH NUMBER----');
// for (let i = 0; i < alexArray.length; i++) {
//     if (typeof alexArray[i] === 'number') break;
//     console.log(alexArray[i], typeof alexArray[i]);

// }

// const alexArray = [
//     'Alex',
//     'Wu',
//     2037 - 1987,
//     'IT',
//     ['Michael', 'Peter', 'Steven'],
//     true,

// ];

// // loop backward

// for (let i = alexArray.length - 1; i >= 0; i--) {
//     console.log(i, alexArray[i]);
// }


//Loop in a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
//     }

// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);

// }


// let rep = 1
// while (rep <= 10) {
//     {
//         console.log(`Lifting weights repetition ${rep}`);
//         rep++;
//     }

// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');

// }