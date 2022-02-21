/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName)
console.log(firstName)

//Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;


let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Alex');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthYear = 1987;
//birthYear = 1990;

var job = 'programmer';
job = 'teacher';

let lastName = 'Wu';
console.log(lastName); */

// Math operators
/* const now = 2037
const ageAlex = now - 1987;
const ageSarah = now - 1989;
console.log(ageAlex, ageSarah);

console.log(ageAlex * 2, ageAlex / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2

const firstName = 'Alex';
const lastName = 'Wu';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //
x--;
console.log(x);

// Comparison operators

console.log(ageAlex > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullage = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */


/* const now = 2037
const ageAlex = now - 1987;
const ageSarah = now - 1989;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;

const averageAge = (ageAlex + ageSarah) / 2;
console.log(x, y);
console.log(ageAlex, ageSarah, averageAge); */

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}! `;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log(`string
multiple line`) */

/* let age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sara can start driving licene ❤️')

}
else {
    const yearLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearLeft} years`);
};

const birthYear = 1990;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century); */

// type conversion
/* const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Jonas'));

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
console.log(n);
console.log('11' - 1); */

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 10;

if (money) {
    console.log("Don't spend it all!")
} else {
    console.log('You should get a job!');
};

let height = 0;
if (typeof height === 'number') {
    console.log('Yay! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
} */


/* const age = 18;

if (age === 18) console.log('You just become and adult!');

if (age == 18) console.log('You just become and adult!(Loose)');

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('cool!'); 23
} else if (favorite === 7) {
    console.log('7 is also cool')
} else if (favorite === 9) {
    console.log('9 is also cool')
}
else {
    console.log('Number not 23 or 7 or 9')
}

if (favorite !== 23) console.log('why not 23'); */

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sara is able to drive!');
// } else {
//     console.log('Someone else should drive');
// }

// console.log(hasDriversLicense && hasGoodVision && isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sara is able to drive!');
// } else {
//     console.log('Someone else should drive');
// }

// const day = 'friday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break
//     default:
//         console.log('Not a valid day!');

// }

// const today = 'friday';

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

/* const language = 'arabic';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakrs');
        break
    case 'english':
        console.log('3rd place');
        break
    case 'hindi':
        console.log('number 4');
        break
    case 'arabic':
        console.log('5th place');
        break

    default:
        console.log('great language too');
        break;
} */

// const age = 18;
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water');

// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// let drink2
// if (age >= 18) {
//     drink2 = 'Wine'
// } else {
//     drink2 = 'Water'
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)