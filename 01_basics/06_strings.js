const userName = "Karthik";
const repoCount = 50;
// console.log( "Hello my name is " + userName + " and my repo count is " + repoCount); // => String concatenation
// console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);  // => String Interpolation

const gameName = new String("GTA6");

// console.log(gameName[0]);
// console.log(gameName.__proto__); // {}

// To get length
// -------------
// console.log(gameName.length)

// To convert to lowercase
// -----------------------
// console.log(gameName.toLowerCase());

// To convert to Uppercase
// -----------------------
// console.log(gameName.toUpperCase());

// To get character at specified index
// -----------------------------------------
// console.log(gameName.charAt(2));

// To get index of character
// -------------------------
// console.log(gameName.indexOf("6"));

// Slice=> [start, end(Optional) ) => extracts part of a string
// -------------------------------------------
//The slice() method does not change the original string.
const sliceString = gameName.slice(-2);
// console.log(sliceString);
// -----

// Difference between slice and substring is that you can use -ve numbers when using slice

// Substring => [start, end(Optional) )
// ------------------------------------
// extracts characters, between two indices
// ------------------------------------
const newString = gameName.substring(0, 2);
// console.log(newString);

// Trim
// -----
// To remove empty spaces from start and end of string
// --------------------------------------------
const spaceString = "  Karthik   ";
// console.log(spaceString.trim());

// Replace
// To replace characters with another
// ---------
const url = "https://karthik.com/karthik%20mohan";
// console.log(url.replace("%20", "-"));

// Includes
// --------
// To check of a character exists in a string
// console.log(url.includes("kar"));

//Split => To convert string to array
// ----
const name2 = "hello split";
console.log(name2.split(" "));
