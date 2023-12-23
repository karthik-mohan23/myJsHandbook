// Object literals

const jsUser = {
  name: "karthik",
  "full name": "Karthik Mohan",
  age: 25,
};

const singletonObject = new Object();

// Accessing values
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// change values
jsUser.age = 18;

// add values
jsUser.email = "karthik@google.com";

// add functions
jsUser.greeting = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
};

// jsUser.greeting; => gives reference to function
// jsUser.greeting();
// console.log(jsUser);

// merging objects
// ---------------
// const obj3 = Object.assign({}, obj1, obj2);
// const mergedObject = { ...jsUser, ...jsUser2 };

// to convert keys to arrays
// -------------------------
console.log(Object.keys(jsUser));

// to convert values to arrays
// --------------------------
console.log(Object.values(jsUser));

// to covert each item in object to array
// --------------------------------------
// console.log(Object.entries(jsUser)); // [["name", "Vishal"], ["age", 21], ["isEducator", true], ...]

// to check if a key exists in an object or not
// -------------------
// return true / false
console.log(jsUser.hasOwnProperty("age"));

// Looping through an Object using for...in
for (let key in jsUser) {
  console.log(key + ":", jsUser[key]); // name: Vishal   age: 21, isEducator: true ...
}

// Looping through an Object using forEach with Object.keys
Object.keys(jsUser).forEach((key) => console.log(key));

// How to check if two objects are equal?
//----------------------------------
// console.log(Object.is(obj1, obj2))
