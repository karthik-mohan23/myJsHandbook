const myArr = [0, 1, 2, 3, 4, 5, true, "karthik"];

const myArr2 = new Array(1, 2, 3, 4);

// Array methods

// mutates original array
// to remove last element from array
// -----------------------------------
// POP
const arr = [1, 4, 6, 8, 5];
const returnsLastElement = arr.pop(); //returns last element
// console.log(arr);
// console.log(returnsLastElement);

// to add items at end
// -----------------------------
// PUSH
arr.push(3);
const returnsLength = arr.push(7, 2); // returns length of array
// console.log(returnsLength);
// console.log(arr);

// to add elements at start
// ---------------------------------
// UNSHIFT
const returnsLength2 = arr.unshift(0);
// console.log(arr);
// console.log(returnsLength2);

// to remove elements from start
// -------------------------------------
// SHIFT
const returnsRemovedElement = arr.shift();
// console.log(arr);
// console.log(returnsRemovedElement);

// Iterating through an array
// -------------------------------------------

// using for loop
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// using forEach
arr.forEach((item, index) => {
  //   console.log(item);
});

// Q1 - How do you check if an element exists in an array ? [INCLUDES]
// -------------------------------------------------------------------------

const findElement = (target, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};
// console.log(arr);
// console.log(findElement(4, arr));

// console.log(arr.includes(4));

// Q2. Return index if element is present in array
// ----------------------------------------------------------
// if not found returns -1.

// console.log(arr.indexOf(4));
// console.log(arr.indexOf(11));

// How to delete, add & update element from specific index
// -------------------------------------------------------------

// SPLICE
// MUTATES
// -------------------------------------------------------------
// array.splice(index, Number of items to be removed(O), item1, ....., itemX(O- elements to be added))
// from the index specified items will be removed

// to remove
// arr.splice(1,3)

// to add
arr.splice(2, 0, "Hello", "add");
// console.log(arr);

// SLICE [start,end)
// -------------------------------------------
// Non Mutating
// Returns new array which is a slice of original array

const slicedArray = arr.slice();
// const slicedArray = arr.slice(0);
// const slicedArray = arr.slice(1,3);
// console.log(slicedArray);

// How to copy array
// -----------------------

// shallow copy
// points to the same memory location
// const arr1 = arr2

// Deep copy
// -----------------------

// spread
const arrC2 = [...arr];
kkkkkkkk;
// Array from
// -----------
// const arrC3 = Array.from("karthik"); => ["k","a","r","t","h","i","k"]
// console.log(Array.from({name:"Karthik"})) // Interesting => []

// concat
const arrC4 = arr.concat();
// const concatAll = Array1.concat(Array2, Array3,Array4)

// combining 2 arrays
// ---------------------------

// spread operator
const add1 = [...arr, ...arrC2];

const add2 = arr.concat(arrC4);

// Q3. How to check if 2 arrays are equal

function checkArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.log(checkArrayEqual([1, 2, 4], [1, 4]));

// EVERY - check all elements in array

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
};

// console.log(isArrayEqual([1, 2, 4], [1, 2, 4]));

// Sorting Array
// ----------------------

const numArray1 = [1, 4, 6, 7, 43, 0, -5, -200];
numArray1.sort((a, b) => a - b);
// console.log(numArray1, "ascending");
numArray1.sort((a, b) => b - a);
// console.log(numArray1, "descending");

// Reverse an array

// --------------------

// console.log(arr);
// SORT - mutates
const reversedArray = arr.sort();
// console.log(reversedArray);

// Flatten an array
// --------------------

// FLAT - Non mutating

const arrayToFlatten = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattenedArray = arrayToFlatten.flat(1);
const flattenedArray2 = arrayToFlatten.flat(2);
// const flattenedArray3 = arrayToFlatten.flat(Infinity); => flattens whole array
// console.log(flattenedArray);

// FIND
// returns the first element which fulfills the condition

const findElement2 = arr.find((element, index) => element > 4);
// console.log(arr);
// console.log(findElement2);
