'use strict';

/* const bookings = [];

const createBooking = function (
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers) {
    

    //ES5
    // numPassengers = numPassengers || 1
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price

    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 3);

//Skipping a parameter, put it undefined
createBooking('LH123', undefined, 3) */

/* const flight = 'LH234';
const alex = {
    name: 'Alex Wu',
    passport: 1234568
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 1234568) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }

}

//Arrow function

const checkInArrow = (flightNum,passenger) => {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 1234568) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
    
};


checkIn(flight, alex);
console.log(flight);
console.log(alex); */


//Is the same as doing
// const flightNum = flight;
// const passenger = alex;

// const newPasswort = function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000000)
// }

// newPasswort(alex);
// checkIn(flight,alex);


/* const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...other] = str.split(' ')
    return [first.toUpperCase(), ...other].join (' ');
};


// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);

}

transformer('JavaScript is the best', upperFirstWord)
transformer('JavaScript is the best', oneWord)

const higfh5 = function() {
    console.log('👋');
};

document.body.addEventListener('click', higfh5);

['Jonas', 'Martha', 'Alex'].forEach(higfh5); */

/* const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};


const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Alex');

greet('Hello')('Alex');


//Arrow
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Alex'); */

/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}, ${name}`})

    }
};

lufthansa.book(239, 'Alex Wu');
console.log(lufthansa);

const  eurowings = {
    airline: ' Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//does NOT work
// book(23, 'Sarah Williams');

//Call method
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 23, 'hello hello');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply Method, fungerar med array. Används inte så ofta längre.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//Detta är bättre
book.call(swiss, ...flightData);


//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Cooper');

//with event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(23));
console.log(addVAT(100));

const addTaxRate = function(rate) {
    return function(value){ 
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/* const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //Get answer
       const answer = Number(
        prompt(
            `${this.question}\n${this.options.join('\n')}
            \n(Write option number)`
        )
       );
       console.log(answer);

       //Register answer
       typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

       this.displayResults();
       this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        }   else if (type === 'string') {
            // Poll results are 
            console.log(`Poll results are ${this.answers.join(', ')
        }`);
        }
    }
};

poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3] })

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1] */

/* const runOnce = function () {
    console.log('This will never run again');
};

runOnce();

//IIFE
(function() {
    console.log('This will never run again'); 
    const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again'))
();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate); */

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
    
}

const booker = secureBooking();

booker();
booker();
booker();

console.log(booker);

//example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}


g();
f();
// Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
       console.log(`We are now boarding all ${n} passengers`);
       console.log(`Thre are 3 groups, each with ${perGroup} passengers`); 
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


// setTimeout(function() {
//     console.log('TIMER');
// }, 1000);

(function (){
    const header = document.querySelector('h1');
    header.style.color= 'red';
    
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();


