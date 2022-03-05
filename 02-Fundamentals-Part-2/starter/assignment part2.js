'use strict'

/* function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryInfo = describeCountry('Sweden', 10, 'Stockholm');
console.log(countryInfo);

const describeCountry2 = function (country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const descGermany = describeCountry2('Germany', 83, 'Berlin');
const descPortugal = describeCountry2('Portugal', 10, 'Lisbon');
console.log(descGermany, descPortugal); */

/* function percentageOfworld1(population) {
    return population / 7900 * 100;
}

const percentagePop1 = percentageOfworld1(1441);
const percentagePop2 = percentageOfworld1(10);
const percentagePop3 = percentageOfworld1(30);
console.log(percentagePop1);
console.log(percentagePop2);
console.log(percentagePop3);

const percentageOfworld2 = function (population) {
    return population / 7900 * 100;
}

const percentage2pop1 = percentageOfworld2(1441);
const percentage2pop2 = percentageOfworld2(40);
const percentage2pop3 = percentageOfworld2(10); */

// console.log(percentage2pop1);
// console.log(percentage2pop2);
// console.log(percentage2pop3);

// const percentageOfWorld3 = (population) => population / 7900 * 100;
// const chinaPerc3 = percentageOfWorld3(1441);
// console.log(chinaPerc3);

/* function percentageOfworld1(population) {
    return population / 7900 * 100;
}


const describePopulation = function (country, population) {
    const percentageCountry = percentageOfworld1(population);

    const describe = `${country} has ${population} million people, which is about ${percentageCountry} of the world`;
    return describe;


}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Sweden', 10));

const population = [1441, 10, 83, 5];
console.log(population.length === 4);



const percentage = [percentageOfworld1(population[0]), percentageOfworld1(population[1]), percentageOfworld1(population[2]), percentageOfworld1(population[3])]
console.log(percentage); */

// const neighbour = ['Norway', 'Finland', 'Denmark'];
// neighbour.push('Utopia');
// neighbour.pop('Utopia');

// if (neighbour.includes('Germany')) {
//     console.log('is a neighbour');
// } else {
//     console.log('Probably not a central European country ')
// }

// const changeNeighbour = neighbour.indexOf('Norway');
// neighbour[changeNeighbour] = 'French';


// const myCountry = {
//     Country: 'Sweden',
//     Capital: 'Stockholm',
//     Language: 'Swedish',
//     Population: 10,
//     neighbours: ['Norway', 'Finland', 'Denmark']
// };

// console.log(myCountry);


/* let votes = [];

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} currently voting`);

} */

// const population = [1441, 10, 83, 5];
// let percentages2 = [];


// function percentageOfworld1(population) {
//     return population / 7900 * 100;
// }
// for (let i = 0; i < population.length; i++) {
//     let percentage = percentageOfworld1(population[i])
//     percentages2.push(percentage);

// }
// console.log(percentages2);

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let y = 0; y < listOfNeighbours.length; y++) {
//     console.log(listOfNeighbours[y]);

//     for (let i = 0; i < listOfNeighbours[y].length; i++) {
//         // console.log(`${listOfNeighbours[y][i]}`);
//     }

// }

// const population = [1441, 10, 83, 5]
// function percentageOfworld1(population) {
//     return population / 7900 * 100;
// }

// let percentage3 = [];
// let i = 0
// while (i < population.length) {
//     let perc = percentageOfworld1(population[i]);
//     percentage3.push(perc)
//     i++
// }
// console.log(percentage3);