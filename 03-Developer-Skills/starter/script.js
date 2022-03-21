// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // new function

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([10, 2, 3], [5, 3, 2, 1]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degrees celsius:")),
//     value: 10,
//   };
//   console.log(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// //using debugger
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // new function

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([10, 2, 3], [5, 3, 2, 1]);
// console.log(amplitudeNew);

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([11, 2, 3], [5, 3, 2, 1]);
// console.log(amplitudeBug);
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c  `;
    // console.log(`... ${arr[i]}c in ${i + 1} days...`);
  }
  console.log(str);
};

printForecast(data2);
