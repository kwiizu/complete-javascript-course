'use strict';

//This list represents the Calories of the food carried by five Elves:

// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
// The second Elf is carrying one food item with 4000 Calories.
// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
// The fifth Elf is carrying one food item with 10000 Calories.
// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).

// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?




const elf1 = [1000, 2000, 3000];
const elf2 = [4000];
const elf3 = [5000, 6000];
const elf4 = [7000,8000,9000];
const elf5 = [10000];

const allElfs = {
    elf1: [1000, 2000, 3000],
    elf2: [4000],
    elf3: [5000, 6000],
    elf4: [7000,8000,9000],
    elf: [10000]
};

const allElfsArr = Object.keys(allElfs);
console.log(allElfsArr);

// const allElfs = [[1000, 2000, 3000], [4000], [5000, 6000], [7000,8000,9000], [10000]];




// const totalCalories = function() {
//     let total = 0;
//     for (let index = 0; index < elf1.length; index++) {
//        var totalElf1 = total+=elf1[index];
        
//     }
//     console.log(totalElf1);

// };

// totalCalories();

// allElfsArr.forEach(function(key,index){
//     console.log(`${key} ${allElfs[key]}`);
//     const sum = allElfs[key].reduce(partialSum, a) => partialSum + a, 0;
//     console.log(sum);
// });