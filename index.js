"use strict";
//1. Number Manipulation:
//a. Create a TypeScript function named doubleNumber that takes a number as a parameter and returns the double of that number.
const doubleNumber = (num) => {
    return num * 2;
};
//b. Create a TypeScript function named squareNumber that takes a number as a parameter and returns the square of that number.
const squareNumber = (num) => {
    return num * num;
};
//Boolean Logic:
//a. Create a TypeScript function named isEven that takes a number as a parameter and returns true if the number is even and false if it's odd.
const isEven = (num) => {
    return num % 2 === 0;
};
//b. Create a TypeScript function named isAdult that takes an age (number) as a parameter and returns true if the age is 18 or above (considering adults), and false otherwise.
const isAdult = (age) => {
    return age >= 18;
};
//String Manipulation:
//a. Create a TypeScript function named reverseString that takes a string as a parameter and returns the reversed string.
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
//b. Create a TypeScript function named capitalizeString that takes a string as a parameter and returns the string in capitalized form.
const capitalizeString = (str) => {
    return str.toUpperCase();
};
//Usage and Output:
//a. Call each of the functions with appropriate arguments and display the results.
console.log(doubleNumber(5)); // 10
console.log(squareNumber(5)); // 25
console.log(isEven(6)); //true
console.log(isEven(7)); //false
console.log(isAdult(18)); // true
console.log(isAdult(17)); // false
console.log(reverseString("cheesecake")); // "ekakseehc"
console.log(capitalizeString("hungry!")); // "HUNGRY!"
//# sourceMappingURL=index.js.map