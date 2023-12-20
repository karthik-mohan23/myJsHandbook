let score = "33abc";

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); //NaN
// Don't rely on Numbers

let score2 = null;
// console.log(Number(score2)); //0

let score3 = undefined;
// console.log(Number(score3)); //NaN

let score4 = true;
// console.log(Number(score4)); //1
// 0 for false

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let isLoggedIn2 = "";
// console.log(Boolean(isLoggedIn2)); //false

let isLoggedIn3 = [];
// console.log(Boolean(isLoggedIn3)); //true

let isLoggedIn4 = NaN;
// console.log(Boolean(isLoggedIn4)); //false

// false => 0, "", "undefined", "NaN", "null"

let someNumber = 33;
console.log(String(someNumber)); //"33"
