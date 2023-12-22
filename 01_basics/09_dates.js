let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // => Object
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // => Fri Dec 22 2023
// console.log(myDate.toLocaleString()); // => 22/12/2023, 12:35:49 pm

let myCreatedDate = new Date(2023, 0, 23); //(year,month, date)
// console.log(myCreatedDate.toDateString()) => Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); //(year, month, date, hour, minute)
// 23/1/2023, 5:03:00 am
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2023-01-14"); // => YY-MM-DD
// console.log(myCreatedDate3.toDateString()); // => Sat Jan 14 2023

let myCreatedDate4 = new Date("01-14-2023");
// MM-DD-YY

// Timestamps => quizzes, polls
let myTimeStamp = Date.now(); // => millisecond from 1970
// console.log(myTimeStamp);
// to get  in seconds
// console.log(Math.floor(myTimeStamp / 1000));

// Year
// -----
// console.log(myDate.getFullYear()); // => 2023

// Today's Day
// ------------
// console.log(myDate.getDate()); // => 22

// Current hour
// ------------
// console.log(myDate.getHours()); // => 12

// Month
// -----
// console.log(myDate.getMonth() + 1);

// customize dates
myDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "",
});
