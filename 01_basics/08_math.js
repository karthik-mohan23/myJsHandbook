console.log(Math);

// Math Object
// ==================

// Round
console.log(Math.round(8.4)); // 8
console.log(Math.round(8.6)); // 9
console.log(Math.round(8.5)); // 9

// Floor - Rounding down
console.log(Math.floor(8.9)); // 8

// Ceil
console.log(Math.ceil(8.1)); // 9

// Min
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5,

// Max
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20,

// Random
const randNum = Math.random(); // creates random number between 0 to 0.999999
// console.log(randNum);
// console.log(Math.floor(Math.random() * 10) + 1); => to get value between 1 and 10

// To get value between 2 numbers
// ------------------------------
const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

// Power
console.log(Math.pow(3, 2)); // 9

// PI
const PI = Math.PI;
// console.log(PI); // 3.141592653589793
